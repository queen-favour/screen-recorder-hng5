import { Heading, Flex, Text } from "@chakra-ui/react";

type HomeSectionLayoutProps = {
  heading: string;
  subHeading?: string;
  children: React.ReactNode;
};
export default function HomeSectionLayout(props: HomeSectionLayoutProps) {
  return (
    <Flex
      w={"100%"}
      bg={"brand.white"}
      h={"fit-content"}
      px={{
        base: "8",
        lg: "16",
      }}
      mt={"20px"}
      py={"8"}
      justify={"center"}
    >
      <Flex
        flexDir={"column"}
        w={"100%"}
        maxW={"1100px"}
        align={"center"}
        justifySelf={"center"}
      >
        <Heading fontSize={"xl"} color={"brand.primary"}>
          {props.heading}
        </Heading>
        <Text fontSize={"xs"} my={"4"}>
          {props.subHeading}
        </Text>
        <Flex
          w={"100%"}
          py={"6"}
          overflowX={"scroll"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {props.children}
        </Flex>
      </Flex>
    </Flex>
  );
}
