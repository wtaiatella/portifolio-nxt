import { useEffect, useState } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import file from '../README.md';

import { Container } from './styles';

export function Grid() {
	return (
		<Container>
			<ReactMarkdown
				// eslint-disable-next-line react/no-children-prop
				children={file}
			/>
			{/* <ReactMarkdown>`${file}`</ReactMarkdown>{' '} */}
		</Container>
	);
}
