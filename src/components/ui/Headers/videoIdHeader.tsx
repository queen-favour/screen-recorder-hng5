import { CopyIcon } from "@/components/icons/icons";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

export default function VideoIdHeader() {
  return (
    <Flex w={"100%"} flexDir={"column"} my={"2"}>
      <Text fontWeight={"semibold"} color={"brand.dark"} my={"2"}>
        Video name
      </Text>
      <Flex
        w={"100%"}
        border={"1.5px solid"}
        borderColor={"brand.lightgray"}
        borderRadius={"20px"}
        p={"2"}
        bg={"brand.bgColor"}
      >
        <Flex
          w={"100%"}
          h={{
            base: "30vh",
            lg: "50vh",
          }}
          border={"1.5px solid"}
          bg={"brand.white"}
          borderColor={"brand.lightgray"}
          borderRadius={"12px"}
        ></Flex>
      </Flex>
      <Flex
        w={"100%"}
        py={"6"}
        flexWrap={{
          base: "wrap",
          lg: "nowrap",
        }}
      >
        <Flex
          h={"52px"}
          w={"100%"}
          bg={"#F1F0F4"}
          px={"4"}
          py={"4"}
          align={"center"}
          borderRadius={"8px"}
          justify={"space-between"}
          mr={{
            base: "none",
            lg: "20",
          }}
          mb={{
            base: "5",
            lg: "none",
          }}
        >
          <Input
            variant={"unstyled"}
            placeholder="Search for a particular video"
            _placeholder={{
              fontSize: "xs",
              color: "brand.lightpurple",
            }}
          />
          <Button size={"sm"} bg={"brand.lightpurple"} color={"#fff"}>
            send
          </Button>
        </Flex>
        <Flex
          h={"52px"}
          w={"100%"}
          bg={"#FAFAFA"}
          px={"2"}
          py={"4"}
          align={"center"}
          borderRadius={"8px"}
          justify={"space-between"}
        >
          <Text fontSize={"xs"} color={"brand.darkgray"}>
            video link
          </Text>
          <Button
            size={"sm"}
            color={"brand.primary"}
            variant={"outline"}
            borderColor={"brand.primary"}
            fontWeight={"200"}
          >
            <CopyIcon />
            copy url
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
