import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Programs } from "@/components/programs";
import { SuccessStories } from "@/components/success-stories";

export default function Home() {
  return (
    <div>
      <Hero />
      <Pricing />
      <Programs />
      <SuccessStories />
    </div>
  );
}
