// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { createContactProps } from '@/services/types';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const EGOI_TOKEN = process.env.EGOI_TOKEN;
	const EGOI_LIST = process.env.EGOI_LIST;
	const requestMethod = req.method;
	const { name, email, subject, message } = req.body;

	const dataCreateContat = JSON.stringify({
		base: {
			status: 'active',
			first_name: name,
			language: 'en',
			email: email,
		},
	});

	let createContact: createContactProps | null = null;
	let responseCreateContact: Response;

	//`https://api.egoiapp.com/lists/${EGOI_LIST}/contacts`

	if (requestMethod == 'POST') {
		console.log('API: Criar contato : ' + name + ' ' + email);
		try {
			responseCreateContact = await fetch(
				`https://api.egoiapp.com/lists/${EGOI_LIST}/contacts`,
				{
					method: 'POST',
					body: `${dataCreateContat}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			);
		} catch (err) {
			createContact = {
				status: 400,
				contact_id: '',
				message: err,
			};
			res.status(400).json(createContact);
		}

		const newContactEmail = JSON.stringify([
			{
				senderId: '1',
				subject: 'Lets have a coffe!!!',
				to: ['wtaiatella@gmail.com'],
				htmlBody: `
				<p>Olá my friend, o ${name} < ${email} > enviou a mensagem</p>
				<p>Novo visitante </p>
				<p>subject: ${subject} </p>
				<p>${message}</p>
				`,
			},
		]);

		const exitContactEmail = JSON.stringify([
			{
				senderId: '1',
				subject: 'Lets have a coffe!!!',
				to: ['wtaiatella@gmail.com'],
				htmlBody: `
				<p>Olá my friend, o ${name} < ${email} > enviou uma nova mensagem</p>
				<p>Visitante já cadastrado</p>
				<p>subject: ${subject} </p>
				<p>${message}</p>
				`,
			},
		]);

		console.log('Envio de email de controle');

		if (responseCreateContact.status == 201) {
			console.log('Contact created, report new contact');

			const { contact_id } = await responseCreateContact.json();
			createContact = {
				status: 201,
				contact_id,
				message: 'success',
			};

			await fetch(
				'https://slingshot.egoiapp.com/api/v2/email/messages/action/send',
				{
					method: 'POST',
					body: `${newContactEmail}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			);

			console.log(createContact);

			res.status(201).json(createContact);
		} else if (responseCreateContact.status == 409) {
			console.log('Contact exist already, report new message');

			const responseData = await responseCreateContact.json();
			createContact = {
				status: 409,
				contact_id: responseData.errors.contacts[0],
				message: 'Already Exist',
			};

			await fetch(
				'https://slingshot.egoiapp.com/api/v2/email/messages/action/send',
				{
					method: 'POST',
					body: `${exitContactEmail}`,
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
						ApiKey: `${EGOI_TOKEN}`,
					},
				}
			);

			res.status(409).json(createContact);
		} else {
			console.log('Someting went wrong');
			createContact = {
				status: responseCreateContact.status,
				contact_id: '',
				message: await responseCreateContact.text(),
			};
			res.status(responseCreateContact.status).json(createContact);
		}
	}
}
