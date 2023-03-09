import { Flex } from "@chakra-ui/react";
import { Temperature } from "./components/Temperature/Temperature";

export function App() {
	return (
		<Flex
			w="100%"
			h="100%"
			backgroundImage="url('/appBg.svg')"
			backgroundSize="cover"
			justify="center"
			align="center"
		>
			<Temperature />
		</Flex>
	);
}
