import ProfileHeader from "@/components/ui/Headers/profileHeader";
import { VideoCard } from "@/components/ui/card/VideoCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        bg={"brand.white"}
        w={"100%"}
        px={{
          base: "8",
          lg: "16",
        }}
        justify={"center"}
        mb={"1.5px"}
      >
        <Flex w={"100%"} maxW={"1100px"}>
          <ProfileHeader />
        </Flex>
      </Flex>
      <Flex
        bg={"brand.white"}
        w={"100%"}
        px={{
          base: "8",
          lg: "16",
        }}
        justify={"center"}
        py={"6"}
      >
        <Flex w={"100%"} maxW={"1100px"} flexDir={"column"}>
          <Flex w={"100%"} flexDir={"column"}>
            <Text fontSize={"xs"} color={"brand.darkgray"} my={"4"}>
              Recent files
            </Text>
            <Flex
              overflowX={"scroll"}
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Flex>
                <VideoCard w={"500px"} />
                <VideoCard w={"500px"} />
                <VideoCard w={"500px"} />
              </Flex>
            </Flex>
          </Flex>
          <Flex w={"100%"} flexDir={"column"} py={"4"}>
            <Text fontSize={"xs"} color={"brand.darkgray"} my={"6"}>
              Files from last week
            </Text>
            <SimpleGrid columns={[1, 2, 3]} gap={"4"}>
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
