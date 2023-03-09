import { Flex, Img, Text } from "@chakra-ui/react";

export function Point() {
	return (
		<Flex w="100%" mt="2.3rem" gap="0.833rem" justify="end">
			<Img src="/point.svg" />
			<Text color="#C2BFF4" fontSize="1.4rem">
				Rio do Sul, SC
			</Text>
		</Flex>
	);
}
