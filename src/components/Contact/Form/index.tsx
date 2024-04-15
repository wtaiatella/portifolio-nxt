import { Container } from "./styles";
import { useState, useEffect } from "react";
import { messageProps, createContactProps } from "@/services/types";
import { sendMessage } from "@/services/email";
import { message } from "antd";

export const Form: React.FC = () => {
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactLinkedin, setContactLinkedin] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");
  const [mensageResponse, setMensageResponse] = useState(null);
  const [contact, setContact] = useState<createContactProps>(null);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    console.log("Status da Resposta");
    console.log(mensageResponse);
    if (mensageResponse?.status == 201) {
      messageApi.open({
        type: "success",
        content: "Message sent successfully",
      });
      setContactName("");
      setContactEmail("");
      setContactLinkedin("");
      setContactMessage("");
    }
  }, [mensageResponse, messageApi]);

  const handleContactName = (event: React.FormEvent<HTMLInputElement>) => {
    setContactName(event.currentTarget.value);
  };

  const handleContactEmail = (event: React.FormEvent<HTMLInputElement>) => {
    setContactEmail(event.currentTarget.value);
  };

  const handleContactLinkedin = (event: React.FormEvent<HTMLInputElement>) => {
    setContactLinkedin(event.currentTarget.value);
  };

  const handleContactMessage = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setContactMessage(event.currentTarget.value);
  };

  const handleLeaveBlank = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const messageData: messageProps = {
      name: contactName,
      email: contactEmail,
      linkedin: contactLinkedin,
      message: contactMessage,
    };
    const resSendMessage = await sendMessage(messageData);
    console.log("Resposta do envio de mensagem");
    console.log(resSendMessage);
    setMensageResponse(resSendMessage);
    //setMensageResponse(await (await sendMessage(messageData)).json());
  };

  return (
    <Container>
      {contextHolder}
      <p>
        Did you
        <span className="text-highlight"> like</span> my portifolio?
      </p>

      <p>
        Let&apos;s have a <span className="text-highlight">coffe</span>
        !!!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-details">
          <input
            type="text"
            id="name"
            className="form-inputs"
            placeholder="Name"
            name="name"
            required
            onChange={handleContactName}
            value={contactName}
          />

          <input
            type="email"
            id="email"
            className="form-inputs"
            placeholder="E-mail"
            name="email"
            required
            onChange={handleContactEmail}
            value={contactEmail}
          />
        </div>

        <input
          type="text"
          id="linkedin"
          className="form-inputs"
          placeholder="Linkedin address"
          name="linkedin"
          onChange={handleContactLinkedin}
          value={contactLinkedin}
        />

        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          className="form-inputs"
          placeholder="write a message"
          required
          onChange={handleContactMessage}
          value={contactMessage}
        ></textarea>

        {/*Fields to avoid robot, these fields are hidden and if filled the e-mail will not be sent*/}
        <label className="hidden">If you are not a robot, leave blank</label>
        <input
          type="text"
          className="hidden"
          name="leaveblank"
          onChange={handleLeaveBlank}
        />

        <label className="hidden">If you are not a robot, dont change</label>
        <input
          type="text"
          className="hidden"
          name="dontchange"
          value="http://"
          onChange={handleLeaveBlank}
        />

        <button name="send" id="send" type="submit" className="intro-btn">
          Send Message
        </button>
      </form>
    </Container>
  );
};
