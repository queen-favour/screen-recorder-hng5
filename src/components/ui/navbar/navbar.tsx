import { Flex, Text, Image } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex
      w={"100%"}
      px={{
        base: "8",
        lg: "16",
      }}
      h={"84px"}
      bg={"brand.white"}
      align={"center"}
      cursor={"pointer"}
    >
      <Flex
        w={"100%"}
        justify={"space-between"}
        fontSize={{
          base: "xs",
          lg: "md",
        }}
      >
        <Flex>
          <Image
            objectFit={"contain"}
            src={"/images/logo.png"}
            alt={"logo"}
            boxSize={"20px"}
            boxShadow={"xl"}
          />
          <Text mx={"2"} color={"brand.primary"} fontWeight={"bold"}>
            Helpout
          </Text>
        </Flex>
        <Flex
          w={"fit-content"}
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Text
            px={"2"}
            _hover={{
              borderBottom: "1.5px solid",
              borderColor: "brand.primary",
            }}
            transition={"all 0.2s linear"}
          >
            Features
          </Text>
          <Text
            mx={"6"}
            px={"2"}
            _hover={{
              borderBottom: "1.5px solid",
              borderColor: "brand.primary",
            }}
            transition={"all 0.2s ease-in"}
          >
            How it works
          </Text>
        </Flex>
        <Flex>
          <Text
            textTransform={"capitalize"}
            fontWeight={"semibold"}
            color={"brand.textBlue"}
          >
            Get started
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
