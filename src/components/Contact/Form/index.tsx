import { Container } from './styles';

export function Form() {
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
			<form>
				<div className='form-details'>
					<input
						type='text'
						id='name'
						className='form-inputs'
						placeholder='Name'
						name='name'
						required
					/>

					<input
						type='email'
						id='email'
						className='form-inputs'
						placeholder='E-mail'
						name='email'
						required
					/>
				</div>

				<input
					type='text'
					id='subject'
					className='form-inputs'
					placeholder='Subject'
					name='subject'
					required
				/>

				<textarea
					name='message'
					id='message'
					cols={30}
					rows={5}
					className='form-inputs'
					placeholder='write a message'
					required
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
