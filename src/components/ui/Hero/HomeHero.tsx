import { Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

export default function HomeHero() {
  return (
    <>
      <Flex
        w={"100%"}
        my={"0.5"}
        bg={"brand.white"}
        p={{
          base: "8",
          lg: "16",
        }}
        minH={"500px"}
        justify={"center"}
      >
        <Flex
          w={"100%"}
          justify={"space-between"}
          maxW={"1100px"}
          h={"100%"}
          flexWrap={"wrap"}
        >
          <Flex
            flexDir={"column"}
            w={{
              base: "100%",
              md: "50%",
            }}
            justify={"center"}
          >
            <Heading
              textTransform={"capitalize"}
              fontSize={{
                base: "lg",
                lg: "3xl",
              }}
            >
              Show them <br />
              dont just tell them
            </Heading>

            <Text
              my={"6"}
              fontSize={{
                base: "2xs",
                md: "xs",
                lg: "md",
              }}
            >
              Help your friends and loved ones by creating and sending <br />
              videos on how to get things done on a website.
            </Text>

            <Button
              w={"fit-content"}
              my={"4"}
              px={"4"}
              backgroundColor={"brand.primary"}
              color={"#fff"}
              _hover={{
                backgroundColor: "brand.primary",
                transform: "scaleX(1.2)",
              }}
              transition={"all 0.4s ease-in-out"}
            >
              Install helpout
            </Button>
          </Flex>
          <Flex
            w={{
              base: "100%",
              md: "50%",
            }}
          >
            <HomeHeroLeftLHS />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export function HomeHeroLeftLHS() {
  return (
    <>
      <Flex
        w={"100%"}
        pos={"relative"}
        h={{
          base: "300px",
          lg: "400px",
        }}
      >
        <Flex>
          <Image
            alt={"dots"}
            src="/griddotsBlack.svg"
            boxSize={{
              base: "150px",
              lg: "200px",
            }}
            pos={"absolute"}
            bottom={"1"}
          />
          <Image
            alt={"dots"}
            src="/griddotsGreen.svg"
            boxSize={{
              base: "150px",
              lg: "200px",
            }}
            pos={"absolute"}
            right={"0"}
          />
          <Flex p={"8"}>
            <Flex w={"50%"} flexDir={"column"}>
              <Image
                alt={"dots"}
                src="/images/ladyWithLaptop.png"
                objectFit={"cover"}
                w={"500"}
                zIndex={"2"}
                mb={"4"}
                h={"100%"}
                borderRadius={"8"}
                _hover={{
                  transform: "scale(1.1)",
                }}
                transition={"transform 0.5s ease-in-out"}
              />
              <Image
                alt={"display image"}
                src="/images/twoMen.png"
                objectFit={"cover"}
                zIndex={"2"}
                h={"100%"}
                borderRadius={"8"}
                _hover={{
                  transform: "scale(1.1)",
                }}
                transition={"transform 0.5s ease-in-out"}
              />
            </Flex>
            <Flex w={"50%"} ml={"4"}>
              <Image
                alt={"display image"}
                src="/images/oneLady.png"
                objectFit={"cover"}
                h={"100%"}
                w={"305px"}
                zIndex={"2"}
                borderRadius={"8"}
                _hover={{
                  transform: "scale(1.1)",
                }}
                transition={"transform 0.5s ease-in-out"}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
