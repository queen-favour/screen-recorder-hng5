import { SearchIcon } from "@/components/icons/icons";
import { Flex, Text, Input } from "@chakra-ui/react";

export default function ProfileHeader() {
  return (
    <Flex
      w={"100%"}
      align={"center"}
      py={"8"}
      justify={"space-between"}
      flexWrap={{
        base: "wrap",
        lg: "nowrap",
      }}
    >
      <Flex flexDir={"column"}>
        <Text fontWeight={"semibold"} fontSize={"2xl"}>
          Hello, Jack
        </Text>
        <Text fontSize={"xs"} color={"brand.darkgray"}>
          Here are your videos
        </Text>
      </Flex>
      <Flex>
        <Flex
          h={"48px"}
          borderRadius={"8px"}
          bg={"brand.bgColor"}
          align={"center"}
          px={"6"}
          justify={"center"}
          my={{
            base: "4",
            lg: "none",
          }}
        >
          <SearchIcon />
          <Input
            variant={"unstyled"}
            w={"100%"}
            ml={"4"}
            placeholder="Search for a particular video"
            _placeholder={{
              fontSize: "xs",
              color: "brand.lightpurple",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
