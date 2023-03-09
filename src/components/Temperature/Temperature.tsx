import { Flex, Img, Text } from "@chakra-ui/react";
import { OtherInfo } from "./OtherInfo";
import { Point } from "./Point";
import { TemperatureNow } from "./TemperatureNow";

import { OtherInfosData } from "../../utils/OtherInfosData";

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

			<Flex gap="0.8rem">
				{OtherInfosData.map((info, i) => {
					return (
						<OtherInfo
							key={`${info.title} - ${i}`}
							img={info.img}
							title={info.title}
							value={info.value}
							measure={info.measure}
						/>
					);
				})}
			</Flex>
		</Flex>
	);
}
