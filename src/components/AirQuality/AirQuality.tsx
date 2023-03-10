import { Flex, Heading, Img, Text } from "@chakra-ui/react";
import { AirDetails } from "./AirDetails";

export function AirQuality() {
	return (
		<Flex
			direction="column"
			bg="#6D67D0"
			w="27.7rem"
			h="24.4rem"
			p="3.2rem 1.6rem 1.6rem 1.6rem"
			borderRadius="1rem"
			align="center"
			justify="space-between"
			pos="relative"
		>
			<Flex gap="0.8rem">
				<Img src="/leaf.svg" />
				<Heading as="h3" fontSize="1.6rem" color="#DAD8F7">
					Qualidade do ar
				</Heading>
			</Flex>
			<Flex direction="column" align="center">
				<Text fontSize="1.8rem" color="#87EBCD">
					Boa
				</Text>
				<Text fontSize="4rem"> 21</Text>
			</Flex>

			<AirDetails />
		</Flex>
	);
}
