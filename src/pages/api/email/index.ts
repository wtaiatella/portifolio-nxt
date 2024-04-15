// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { createContactProps } from "@/services/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const ZOHO_TOKEN = process.env.ZOHO_TOKEN;

  const ZOHO_TEMPLATE = process.env.ZOHO_TEMPLATE;
  const requestMethod = req.method;
  const { name, email, linkedin, message } = req.body;

  const messageData = JSON.stringify({
    mail_template_key: `${ZOHO_TEMPLATE}`,
    from: {
      address: "wagner@wtaiatella.com.br",
      name: "Wagner Taiatella",
    },
    to: [
      {
        email_address: {
          address: email,
          name: name,
        },
      },
    ],
    merge_info: "{}",
  });

  if (requestMethod == "POST") {
    console.log("API: Enviar mensagem para " + name + " " + email);
    try {
      console.log("API: Enviar mensagem");
      console.log(ZOHO_TOKEN);
      const responseMessageSent = await fetch(
        `https://api.zeptomail.com/v1.1/email/template`,
        {
          method: "POST",
          body: `${messageData}`,
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `${ZOHO_TOKEN}`,
          },
        }
      );
      console.log("API: Mensagem enviada");
      res.status(responseMessageSent.status).json(responseMessageSent);
    } catch (err) {
      console.log("API: Erro");
      res.status(400).json("deu erro");
    }

    console.log("API: mensagem enviada");
    const newContact = JSON.stringify({
      from: {
        address: "wagner@wtaiatella.com.br",
        name: "Wagner Taiatella",
      },
      to: [
        {
          email_address: {
            address: "wtaiatella@gmail.com",
            name: "Wagner Taiatella",
          },
        },
      ],
      subject: "New contact from portfolio",
      htmlbody: `
				<div><b> Email sent successfully to a new contact. </b></div>
				<br><br>
				<div><b>Name:</b> ${name} </div>
				<div><b>Email:</b> ${email} </div>
				<div><b>Linkedin:</b> ${linkedin} </div>
				<br><br>
				<div><b>Message:</b></div>
				<br><br>
				<div>${message}</div>
				`,
    });

    try {
      const responseNewContact = await fetch(
        `https://api.zeptomail.com/v1.1/email`,
        {
          method: "POST",
          body: `${newContact}`,
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `${ZOHO_TOKEN}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
