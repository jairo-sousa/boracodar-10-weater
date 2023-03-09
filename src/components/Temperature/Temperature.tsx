import { Flex, Img, Text } from "@chakra-ui/react";
import { Point } from "./Point";
import { TemperatureNow } from "./TemperatureNow";

export function Temperature() {
	return (
		<Flex
			direction="column"
			bgImage="url('/cardBg.svg')"
			bgSize="cover"
			backdropBlur="2rem"
			w="48rem"
			h="48rem"
			p="1.2rem"
			borderRadius="1rem"
			align="center"
			justify="space-between"
		>
			<Point />

			<TemperatureNow />
		</Flex>
	);
}
