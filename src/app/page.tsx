import HomeHero from "@/components/ui/Hero/HomeHero";
import {
  FeaturesCardLayout,
  HightLightCardLayout,
} from "@/components/ui/card/infoCard";

import HomeSectionLayout from "@/components/ui/section/HomeSectionlayout";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSectionLayout
        heading="Features"
        subHeading="Key highlight of our extention"
      >
        <FeaturesCardLayout />
      </HomeSectionLayout>
      <HomeSectionLayout heading="How it works">
        <HightLightCardLayout />
      </HomeSectionLayout>
    </main>
  );
}
