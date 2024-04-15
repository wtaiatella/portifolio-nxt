import { Container } from "./styles";
import { Card } from "../Card";
import { Octokit } from "octokit";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { projectProps } from "../../../services/types";

interface repoProps {
  name: string;
}

interface fileProp {
  name: string;
  download_url: string;
}

export function Grid() {
  const [portifolio, setportifolio] = useState<projectProps[]>([]);
  const { googleToken } = useContext(UserContext);

  useEffect(() => {
    if (googleToken != "") {
      let projects: projectProps[] = [];
      const octokit = new Octokit({
        auth: googleToken,
      });
      console.log(octokit);

      const readRepos = async () => {
        const respRepos = await octokit.request("GET /users/{username}/repos", {
          username: "wtaiatella",
        });

        console.log(`Aqui está o responsefile`);
        console.log(respRepos.data.length);

        if (respRepos.data.length > 0) {
          respRepos.data.map(async (repo: repoProps) => {
            //console.log(`consulta lista de arquivos do ${repo.name}`);
            const urlRepoContent = `https://api.github.com/repos/wtaiatella/${repo.name}/contents`;

            const readRepoContent = async () => {
              const resRepoContent = await octokit.request(
                `GET ${urlRepoContent}`,
                {}
              );

              resRepoContent.data.map(async (file: fileProp) => {
                //console.log(`${repo.name}  -->  ${file.name}`);

                if (file.name === "portifolio.json") {
                  console.log(`Achei o portifolio`);
                  const configUrl = `/repos/wtaiatella/${repo.name}/contents/portifolio.json`;
                  const resConfigContent = await octokit.request(
                    `GET ${configUrl}`,
                    {}
                  );
                  // console.log(
                  // 	atob(resConfigContent.data.content)
                  // );

                  projects = [
                    ...projects,
                    JSON.parse(atob(resConfigContent.data.content)),
                  ];
                  console.log(projects);
                  setportifolio(projects);
                }
              });
            };
            readRepoContent();
          });
        }
      };
      readRepos();
    }
  }, [googleToken]);

  return (
    <Container>
      {portifolio.length > 0
        ? portifolio.map((project) => (
            <Card project={project} key={project.name} />
          ))
        : null}
    </Container>
  );
}
