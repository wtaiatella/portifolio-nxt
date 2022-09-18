import { createContext, useState } from 'react';

export type ContextProps = {
	googleToken: string;
	setGoogleToken: (c: string) => void;
};

export const UserContext = createContext<ContextProps>({
	googleToken: '',
	setGoogleToken: () => {},
});

export const UserStorage = ({ children }: { children: JSX.Element[] }) => {
	const [googleToken, setGoogleToken] = useState<string>('');

	return (
		<UserContext.Provider
			value={{
				googleToken,
				setGoogleToken,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
