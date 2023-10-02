import { Facebook, Telegram, Whatsapp } from "@/components/icons/icons";
import VideoIdHeader from "@/components/ui/Headers/videoIdHeader";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function VideoId() {
  return (
    <Flex bg={"brand.white"} flexDir={"column"} w={"100%"} align={"center"}>
      <Flex
        w={"100%"}
        maxW={"1100px"}
        flexDir={"column"}
        px={{
          base: "8",
          lg: "16",
        }}
      >
        <Text>video</Text>
        <VideoIdHeader />

        <Text fontSize={"sm"} fontWeight={"bold"} color={"brand.dark"}>
          Share your video
        </Text>
        <Flex
          py={"6"}
          overflowX={"scroll"}
          w={"100%"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex>
            <Button
              variant={"outline"}
              borderColor={"brand.dark"}
              size={"sm"}
              borderRadius={"4.5px"}
              fontWeight={"300"}
              py={"4"}
              fontSize={{
                base: "xs",
                lg: "sm",
              }}
            >
              <Facebook />
              Facebook
            </Button>
            <Button
              variant={"outline"}
              borderColor={"brand.dark"}
              size={"sm"}
              borderRadius={"4.5px"}
              fontWeight={"300"}
              py={"4"}
              fontSize={{
                base: "xs",
                lg: "sm",
              }}
              mx={"4"}
            >
              <Whatsapp />
              WhatsApp
            </Button>
            <Button
              variant={"outline"}
              borderColor={"brand.dark"}
              size={"sm"}
              borderRadius={"4.5px"}
              fontWeight={"300"}
              py={"4"}
              fontSize={{
                base: "xs",
                lg: "sm",
              }}
            >
              <Telegram />
              Telegram
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
