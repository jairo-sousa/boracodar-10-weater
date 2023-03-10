import { Flex, Heading, Img } from "@chakra-ui/react";

export function SunTime() {
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
				<Img src="/time.svg" />
				<Heading as="h3" fontSize="1.6rem" color="#DAD8F7">
					Horário do sol
				</Heading>
			</Flex>
			<Img src="/sunChart.svg" />
		</Flex>
	);
}
