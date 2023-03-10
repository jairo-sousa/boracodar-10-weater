import { Flex, Text } from "@chakra-ui/react";

type DetailProps = {
	value: string;
	property: string;
};

function Detail({ value, property }: DetailProps) {
	return (
		<Flex direction="column" justify="center">
			<Text fontSize="1.4rem " color="#87EBCD">
				{value}
			</Text>
			<Text fontSize="1.2rem" fontWeight={400} color="#E7E6FB">
				{property}
			</Text>
		</Flex>
	);
}

export function AirDetails() {
	const detailsData = [
		{
			value: "12.9",
			property: "PM2.5",
		},
		{
			value: "12.9",
			property: "PM10",
		},
		{
			value: "2.1",
			property: "SO₂",
		},
		{
			value: "1.4",
			property: "NO₂",
		},
		{
			value: "21.2",
			property: "O₃",
		},
		{
			value: "0.7",
			property: "CO",
		},
	];
	return (
		<Flex gap="1.75rem">
			{detailsData.map((detail, i) => {
				return (
					<Detail
						key={`${detail.property} - ${i}`}
						value={detail.value}
						property={detail.property}
					/>
				);
			})}
		</Flex>
	);
}
