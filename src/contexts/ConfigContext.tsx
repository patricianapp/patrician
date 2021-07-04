import { createContext, useState, ReactElement } from 'react';
interface Config {}

interface Props {
	children: ReactElement;
}

export function ConfigProvider({ children }: Props) {
	const [config, setConfig] = useState<Config>({});
	const ConfigContext = createContext({ config, setConfig });

	return (
		<ConfigContext.Provider value={{ config, setConfig }}>
			{children}
		</ConfigContext.Provider>
	);
}
