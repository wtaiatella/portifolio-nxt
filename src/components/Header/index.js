import { useEffect, useRef, useState } from 'react';
import { Container } from './styles';

export function Header() {
	const ref = useRef(null);

	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const resizeWidth = (event) => {
			//console.log('Width changed');
			//console.log(ref.current);
			if (ref.current != null) {
				setHeight(ref.current.offsetHeight);
				setWidth(ref.current.offsetWidth);
				//console.log(ref.current.offsetHeight);
				//console.log(ref.current.offsetWidth);
			}
			// 	// 👇️ if you need access to parent
			// 	// of the element on which you set the ref
		};

		const menu = ref.current;

		window.addEventListener('resize', resizeWidth);

		return () => {
			menu.removeEventListener('resize', resizeWidth);
		};
	}, []);

	return (
		<Container>
			<nav ref={ref} className='menu'>
				<ul>
					<span className='line'>
						<li>
							<a href='#'>HOME</a>
						</li>
						<li>
							<a href='#about'>ABOUT</a>
						</li>
						<li>
							<a href='#portifolio'>PORTIFOLIO</a>
						</li>
					</span>
					<span className='line'>
						<li>
							<a href='#knowledge'>KNOWLEDGE</a>
						</li>
						<li>
							<a href='#contact'>CONTACT</a>
						</li>
					</span>
				</ul>
			</nav>
		</Container>
	);
}
