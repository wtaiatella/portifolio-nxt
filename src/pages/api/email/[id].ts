import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const EGOI_TOKEN = process.env.EGOI_TOKEN;
	const EGOI_LIST = process.env.EGOI_LIST;
	const requestMethod = req.method;
	const { id } = req.query;
	const { name, email, subject, message } = req.body;

	const dataUpdateContat = JSON.stringify({
		base: {
			status: 'active',
			first_name: name,
			language: 'en',
		},
	});

	const dataAddTagContat = JSON.stringify({
		contacts: [id],
		tag_id: 1,
	});

	switch (requestMethod) {
		case 'POST':
			console.log('API: Update contato : ' + name + ' ' + email);
			console.log(JSON.stringify(req.body));
			console.log(dataUpdateContat);
			const resUpdateContact = await fetch(
				`https://api.egoiapp.com/lists/${EGOI_LIST}/contacts/${id}`,
				{
					method: 'PATCH',
					body: `${dataUpdateContat}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			)
				.then((response) => response.json())
				.catch((err) => console.log(err));
			console.log('API: Resposta update contato no E-goi');
			console.log(resUpdateContact);

			console.log('API: add tag contato : ' + name + ' ' + email);
			console.log(dataAddTagContat);
			const resAddTagContact = await fetch(
				`https://api.egoiapp.com/lists/${EGOI_LIST}/contacts/actions/attach-tag`,

				{
					method: 'POST',
					body: `${dataAddTagContat}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			)
				.then((response) => response.json())
				.catch((err) => console.log(err));
			console.log('API: Resposta add tag contato no E-goi');
			console.log(resAddTagContact);

			const dataEmail = JSON.stringify([
				{
					senderId: '1',
					subject: 'Lets have a coffe again!!!',
					to: ['wtaiatella@gmail.com'],
					htmlBody: `
				<p>Olá my friend, o ${name} < ${email} > enviou nova mensagem</p>
				<p>subject: ${subject} </p>
				<p>${message}</p>
				`,
				},
			]);

			console.log('Envio de email de controle');
			console.log(dataEmail);
			const resSendEmail = await fetch(
				'https://slingshot.egoiapp.com/api/v2/email/messages/action/send',
				{
					method: 'POST',
					body: `${dataEmail}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			)
				.then((response) => response.text())
				.catch((err) => console.log(err));
			console.log('API: Resposta envio email de controle');
			console.log(resSendEmail);
			res.status(200).json(resUpdateContact.result);
	}
}
