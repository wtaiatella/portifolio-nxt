import { messageProps } from '@/services/types';

interface contactIdProps {
	contact_id: string;
	list_id: string;
}

export async function searchContact(contactEmail: string) {
	console.log('searchContact: busca de contato ' + contactEmail);
	const contactID: contactIdProps[] = await fetch(
		'/api/email?' + new URLSearchParams({ contact: contactEmail }),
		{
			method: 'GET',
		}
	)
		.then((response) => response.json())
		.catch((err) => console.log(err));
	console.log('searchContact: Retorno da busca ');
	console.log(contactID);
	return contactID;
}

export async function createContact(messageData: messageProps) {
	console.log('creatContact');

	console.log(messageData);
	const contactCreated = await fetch('/api/email', {
		method: 'POST',
		body: JSON.stringify(messageData),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return contactCreated;
}

export async function newMessage(
	messageData: messageProps,
	contactId: contactIdProps
) {
	console.log('updateContact');
	console.log(messageData);

	const resNewMessage = await fetch('/api/email/' + contactId.contact_id, {
		method: 'POST',
		body: JSON.stringify(messageData),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	});

	return resNewMessage;
}
