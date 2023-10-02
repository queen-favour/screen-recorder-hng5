import { Flex, Text, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg={"brand.primary"}
      px={{
        base: "8",
        lg: "16",
      }}
      py={"4"}
      color={"brand.white"}
      minH={"347px"}
    >
      <Flex
        maxW={"1050px"}
        flexWrap={"wrap"}
        align={"center"}
        w={"100%"}
        justify={"center"}
      >
        <Flex
          align={"center"}
          w={{
            base: "100%",
            lg: "50%",
          }}
          my={"6"}
        >
          <Image
            objectFit={"contain"}
            src={"/images/logoOutline.png"}
            alt={"logo"}
            boxSize={"25px"}
            boxShadow={"xl"}
          />
          <Text fontSize={"sm"} fontWeight={"extrabold"} mx={"2"}>
            Helpout
          </Text>
        </Flex>
        <Flex
          w={{
            base: "100%",
            lg: "50%",
          }}
          flexWrap={{
            base: "wrap",
            md: "nowrap",
          }}
        >
          <FooterItem
            heading="Menu"
            item={["Home", "converter", "how it works"]}
          />

          <FooterItem
            heading="About us"
            item={["About", "Contact us", "Privacy Policy"]}
          />

          <FooterItem
            heading="Screen Record"
            item={["Browser Window", "Desktop", "Application"]}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

type FooterItemProps = {
  heading: string;
  item: string[];
};

function FooterItem(props: FooterItemProps) {
  return (
    <Flex w={"100%"} flexDir={"column"} justify={"center"} mt={"4"}>
      <Text fontWeight={"800"} fontSize={"sm"}>
        {props.heading}
      </Text>
      {props.item.map((item) => (
        <Text fontSize={"xs"} key={item} py={"1"}>
          {item}
        </Text>
      ))}
    </Flex>
  );
}
