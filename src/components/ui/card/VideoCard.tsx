import { LinkIcon, MoreIcon } from "@/components/icons/icons";
import { Flex, Text } from "@chakra-ui/react";

type VideoCardProps = {
  w?: string;
};
export function VideoCard(props: VideoCardProps) {
  return (
    <Flex
      maxW={"500px"}
      w={{
        base: "100%",
        lg: `${props.w || "100%"}`,
      }}
      h={"280px"}
      p={"4"}
      bg={"brand.cardcolor"}
      border={"1.5px solid"}
      borderColor={"brand.bgColor"}
      borderRadius={"24px"}
      mr={"4"}
    >
      <Flex w={"100%"} h={"100%"} flexDir={"column"}>
        <Flex
          h={"190px"}
          borderRadius={"12px"}
          border={"1.5px solid"}
          borderColor={"brand.bgColor"}
          pos={"relative"}
        >
          <Text
            pos={"absolute"}
            right={"5px"}
            bottom={"10px"}
            bg={"brand.lightpurple"}
            px={"2"}
            py={"1"}
            borderRadius={"4"}
            fontSize={"xs"}
          >
            Duration
          </Text>
        </Flex>
        <Flex w={"100%"} justify={"space-between"} align={"center"} py={"4"}>
          <Text isTruncated>How to create Facebook Ad listing</Text>
          <Flex w={"20%"} justify={"space-between"} align={"center"}>
            <LinkIcon />
            <MoreIcon />
          </Flex>
        </Flex>
        <Text color={"brand.lightpurple"}> Date</Text>
      </Flex>
    </Flex>
  );
}
