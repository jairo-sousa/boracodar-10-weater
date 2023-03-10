import { Flex } from "@chakra-ui/react";
import { AirQuality } from "./components/AirQuality/AirQuality";
import { Temperature } from "./components/Temperature/Temperature";
import { SunTime } from "./components/SunTime";

export function App() {
	return (
		<Flex
			w="100%"
			h="100%"
			backgroundImage="url('/appBg.svg')"
			backgroundSize="cover"
			justify="center"
			align="center"
			gap="3.2rem"
		>
			<Temperature />
			<Flex gap="3.2rem">
				<AirQuality />
				<SunTime />
			</Flex>
		</Flex>
	);
}
