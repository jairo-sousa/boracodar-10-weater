import { Flex, Img, Text } from "@chakra-ui/react";

type OtherInfoProps = {
	img: string;
	title: string;
	value: string;
	measure: string;
};

export function OtherInfo({ img, title, value, measure }: OtherInfoProps) {
	return (
		<Flex
			w="14.6rem"
			h="6rem"
			bg="rgba(102, 96, 200, 0.6)"
			borderRadius="0.6rem"
			align="center"
			justify="center"
			gap="1.4rem"
		>
			<Img src={img ? img : ""} />
			<Flex direction="column" color="#E7E6FB">
				<Text fontSize="1.2rem"> {title} </Text>
				<Flex align="end" gap="0.6rem">
					<Text fontSize="1.8rem" lineHeight="2.4rem">
						{value}
					</Text>
					<Text fontSize="1.4rem"> {measure}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
