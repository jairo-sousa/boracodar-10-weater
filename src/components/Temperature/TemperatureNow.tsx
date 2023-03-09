import { Flex, Text } from "@chakra-ui/react";

export function TemperatureNow() {
	return (
		<Flex direction="column" align="center" pos="relative">
			<Text fontSize="8.8rem" lineHeight="9.5rem">
				18
			</Text>
			<Flex
				fontSize="2rem"
				gap="0.6rem"
				w="100%"
				justify="center"
				color="#C2BFF4"
			>
				<Text>22º</Text>
				<Text>16º</Text>
			</Flex>
			<Text
				fontSize="2.4rem"
				pos="absolute"
				top="0"
				right="-2.4rem"
				color="#DAD8F7"
			>
				ºC
			</Text>
		</Flex>
	);
}
