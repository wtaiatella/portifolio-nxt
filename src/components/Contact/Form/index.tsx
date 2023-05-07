import { Container } from './styles';
import { useState, useEffect } from 'react';
import { messageProps, createContactProps } from '@/services/types';
import { createContact } from '@/services/email';
import { message } from 'antd';

export const Form: React.FC = () => {
	const [contactName, setContactName] = useState<string>('');
	const [contactEmail, setContactEmail] = useState<string>('');
	const [contactSubject, setContactSubject] = useState<string>('');
	const [contactMessage, setContactMessage] = useState<string>('');
	const [contact, setContact] = useState<createContactProps>(null);
	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		console.log('Status da Resposta');
		console.log(contact?.status);
		if (contact?.status > 200) {
			switch (contact?.status) {
				case 201:
					messageApi.open({
						type: 'success',
						content: 'Message sent successfully',
					});
					setContactName('');
					setContactEmail('');
					setContactSubject('');
					setContactMessage('');
					break;

				case 409:
					messageApi.open({
						type: 'warning',
						content: 'Hi again! Message sent successfully',
					});
					setContactName('');
					setContactEmail('');
					setContactSubject('');
					setContactMessage('');
					break;

				default:
					messageApi.open({
						type: 'error',
						content:
							'Sorry, something went wrong, please send again later',
					});
			}
		}
	}, [contact, messageApi]);

	const handleContactName = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		setContactName(event.currentTarget.value);
	};

	const handleContactEmail = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		setContactEmail(event.currentTarget.value);
	};

	const handleContactSubject = (event: React.FormEvent<HTMLInputElement>) => {
		console.log(event.currentTarget.value);
		setContactSubject(event.currentTarget.value);
	};

	const handleContactMessage = (
		event: React.FormEvent<HTMLTextAreaElement>
	) => {
		console.log(event.currentTarget.value);
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
			subject: contactSubject,
			message: contactMessage,
		};

		//const contactID = await searchContact(contactEmail);
		setContact(await (await createContact(messageData)).json());
	};

	return (
		<Container>
			{contextHolder}
			<p>
				Did you
				<span className='text-highlight'> like</span> my portifolio?
			</p>

			<p>
				Let&apos;s have a <span className='text-highlight'>coffe</span>
				!!!
			</p>
			<form onSubmit={handleSubmit}>
				<div className='form-details'>
					<input
						type='text'
						id='name'
						className='form-inputs'
						placeholder='Name'
						name='name'
						required
						onChange={handleContactName}
						value={contactName}
					/>

					<input
						type='email'
						id='email'
						className='form-inputs'
						placeholder='E-mail'
						name='email'
						required
						onChange={handleContactEmail}
						value={contactEmail}
					/>
				</div>

				<input
					type='text'
					id='subject'
					className='form-inputs'
					placeholder='Subject'
					name='subject'
					required
					onChange={handleContactSubject}
					value={contactSubject}
				/>

				<textarea
					name='message'
					id='message'
					cols={30}
					rows={5}
					className='form-inputs'
					placeholder='write a message'
					required
					onChange={handleContactMessage}
					value={contactMessage}
				></textarea>

				{/*Fields to avoid robot, these fields are hidden and if filled the e-mail will not be sent*/}
				<label className='hidden'>
					If you are not a robot, leave blank
				</label>
				<input
					type='text'
					className='hidden'
					name='leaveblank'
					onChange={handleLeaveBlank}
				/>

				<label className='hidden'>
					If you are not a robot, dont change
				</label>
				<input
					type='text'
					className='hidden'
					name='dontchange'
					value='http://'
					onChange={handleLeaveBlank}
				/>

				<button
					name='send'
					id='send'
					type='submit'
					className='intro-btn'
				>
					Send Message
				</button>
			</form>
		</Container>
	);
};
