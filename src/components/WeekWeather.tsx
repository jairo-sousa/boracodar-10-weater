import { Flex, Img, Text } from "@chakra-ui/react";

type DayWeatherProps = {
	day: string;
	image: string;
	highest: string;
	lowest: string;
};

function DayWeather({ day, image, highest, lowest }: DayWeatherProps) {
	return (
		<Flex
			direction="column"
			gap="0.8rem"
			h="13.2rem"
			w="9rem"
			minW="fit-content"
			justify="space-between"
			align="center"
		>
			<Text fontSize="1.4rem" color="#DAD8F7">
				{day}
			</Text>
			<Img src={image} w="5.8rem" />
			<Flex>
				<Text>{highest}</Text>
				<Text color="#C2BFF4">{lowest}</Text>
			</Flex>
		</Flex>
	);
}

export function WeekWeather() {
	const DayWeatherData = [
		{
			day: "Amanhã",
			image: "cloud.svg",
			highest: "21º",
			lowest: "16º",
		},
		{
			day: "Sexta-Feira",
			image: "cloud.svg",
			highest: "28º",
			lowest: "20º",
		},
		{
			day: "Sábado",
			image: "cloud.svg",
			highest: "25º",
			lowest: "21º",
		},
		{
			day: "Domingo",
			image: "cloud.svg",
			highest: "20º",
			lowest: "14º",
		},
		{
			day: "Segunda-Feira",
			image: "cloud.svg",
			highest: "24º",
			lowest: "18º",
		},
	];
	return (
		<Flex
			bg="#6D67D0"
			w="100%"
			h="21.2rem"
			borderRadius="1rem"
			align="center"
			justify="center"
			pos="relative"
			gap="1.2rem"
		>
			{DayWeatherData.map((dayWeather, i) => {
				return (
					<DayWeather
						key={`${dayWeather.day} - ${i}`}
						day={dayWeather.day}
						highest={dayWeather.highest}
						lowest={dayWeather.lowest}
						image={dayWeather.image}
					/>
				);
			})}
		</Flex>
	);
}
