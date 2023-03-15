import { Container } from './styles';
import { useState } from 'react';

export function Form() {
	const [contactName, setContactName] = useState<string>('');
	const [contactEmail, setContactEmail] = useState<string>('');
	const [contactSubjecct, setContactSubject] = useState<string>('');
	const [contactmessage, setContactMessage] = useState<string>('');

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

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();
	};

	return (
		<Container>
			<p>
				Did you like
				<span className='text-highlight'>like</span> my portifolio?
			</p>

			<p>
				Let&apos;s have a<span className='text-highlight'>coffe</span>
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
					/>

					<input
						type='email'
						id='email'
						className='form-inputs'
						placeholder='E-mail'
						name='email'
						required
						onChange={handleContactEmail}
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
				></textarea>

				{/*Fields to avoid robot, these fields are hidden and if filled the e-mail will not be sent*/}
				<label className='hidden'>
					If you are not a robot, leave blank
				</label>
				<input type='text' className='hidden' name='leaveblank' />

				<label className='hidden'>
					If you are not a robot, dont change
				</label>
				<input
					type='text'
					className='hidden'
					name='dontchange'
					value='http://'
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
}
