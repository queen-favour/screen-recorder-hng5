import {
  PlayRecordIcon,
  RecordIcon,
  ShareIcon,
} from "@/components/icons/icons";
import { Flex, Text, Image } from "@chakra-ui/react";
type FeaturesInfoCardProps = {
  text: string;
  Heading: string;
  Icon?: React.ReactNode;
};
export function FeaturesInfoCard({
  text,
  Icon,
  Heading,
}: FeaturesInfoCardProps) {
  return (
    <Flex>
      <Flex align={"flex-start"} my={"4"}>
        {Icon}
        <Flex
          flexDir={"column"}
          mx={"4"}
          w={{
            base: "100%",
            md: "75%",
            lg: "70%",
          }}
        >
          <Text
            fontWeight={"semibold"}
            fontSize={"sm"}
            color={"brand.textBlue"}
          >
            {Heading}
          </Text>
          <Text
            fontSize={{
              base: "2xs",
              md: "sm",
              lg: "md",
            }}
            color={"brand.darkgray"}
            lineHeight={"2"}
          >
            {text}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export function FeaturesCardLayout() {
  return (
    <Flex w={"100%"} flexWrap={"wrap"} mt={"4"}>
      <Flex
        w={{
          base: "100%",
          md: "50%",
        }}
        flexDir={"column"}
        my={"4"}
      >
        <FeaturesInfoCard
          text=" Effortless screen recording for everyone. Record with ease, no tech
          expertise required."
          Icon={<RecordIcon />}
          Heading="Simple screen recording"
        />
        <FeaturesInfoCard
          text="Share your recordings instantly with a single link. No attachments, no downloads."
          Icon={<ShareIcon />}
          Heading="Easy-to-Share URL"
        />
        <FeaturesInfoCard
          text="Access and review your past content effortlessly. Your recordings, always at your fingertips."
          Icon={<PlayRecordIcon />}
          Heading="Revisit Recordings"
        />
      </Flex>
      <Flex
        w={{
          base: "100%",
          md: "50%",
        }}
      >
        <Image
          alt={"Features image"}
          src={"/vidoRepository.svg"}
          objectFit={"cover"}
          _hover={{
            transform: "scale(1.2)",
          }}
          transition={"transform 0.5s ease-in-out"}
        />
      </Flex>
    </Flex>
  );
}

export function HightLightCardLayout() {
  return (
    <Flex
      justify={"center"}
      w={{
        base: "fit-content",
        lg: "100%",
      }}
    >
      <Flex>
        <HightLightCard
          number={1}
          text="Click the Start Recording button in our extension.  choose which part of your screen to capture and who you want to send it to."
          heading="Record Screen"
        />
        <HightLightCard
          number={2}
          text="We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform."
          heading="Share Your Recording"
        />
        <HightLightCard
          number={3}
          text="Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone."
          heading="Learn Effortlessly"
        />
      </Flex>
    </Flex>
  );
}

type HightLightCardProps = {
  heading: string;
  text: string;
  number: number;
};
export function HightLightCard(props: HightLightCardProps) {
  return (
    <Flex w={"238px"} flexDir={"column"} align={"center"} mx={"8"}>
      <Flex w={"100%"} textAlign={"center"} flexDir={"column"}>
        <Text
          bg={"brand.primary"}
          borderRadius={"full"}
          color={"brand.white"}
          h={"47px"}
          w={"47px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={"900"}
          alignSelf={"center"}
        >
          {props.number}
        </Text>
        <Text fontWeight={"semibold"} color={"brand.lightblue"} my={"4"}>
          {props.heading}
        </Text>
        <Text
          fontSize={"sm"}
          mb={"4"}
          color={"brand.darkgray"}
          lineHeight={"2"}
        >
          {props.text}
        </Text>
      </Flex>
      <Flex>
        <Image
          alt={"user flow description "}
          src={"/recordImage.svg"}
          objectFit={"cover"}
          _hover={{
            transform: "scale(1.1)",
          }}
          transition={"transform 0.5s ease-in-out"}
        />
      </Flex>
    </Flex>
  );
}
