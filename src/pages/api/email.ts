// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	console.log(req.body);
	const EGOI_TOKEN = process.env.EGOI_TOKEN;
	const requestMethod = req.method;
	const { name, email, subject, message } = req.body;

	const dataEmail = JSON.stringify([
		{
			senderId: '1',
			subject: 'Lets have a coffe!!!',
			to: ['wtaiatella@gmail.com'],
			htmlBody: `
		<p>Olá my friend, o ${name} < ${email} > enviou a mensaguem</p>
		<p>subject: ${subject} </p>
		<p>${message}</p>
		`,
		},
	]);
	console.log('dataEmail = ', dataEmail);
	const dataCreateContat = JSON.stringify({
		base: {
			status: 'active',
			first_name: name,
			language: 'en',
			email: email,
		},
	});

	switch (requestMethod) {
		case 'POST':
			const resCreateContact = await fetch(
				'https://api.egoiapp.com/lists/1/contacts',
				{
					method: 'POST',
					body: `${dataCreateContat}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			);

			const resposta = await fetch(
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
			console.log(resposta);
			res.status(200).json(resposta);
	}
}
