import { Select } from "@/components/ui/select";
import Item from "../components/Item";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "@/components/CarouselDemo";
import { ItemCard } from "@/components/component/item-card";

const LandingPage = () => {
  return (
    <>
      <main>
        {/* <Item /> */}
        <Select />
        <Button>Testing</Button>
        {/* <CarouselDemo></CarouselDemo> */}
        <ItemCard />
      </main>
    </>
  );
};

export default LandingPage;
