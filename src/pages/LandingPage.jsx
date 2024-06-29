import { ItemCard } from "@/components/component/item-card";
import { Dashboard } from "@/components/component/Navbar";

const LandingPage = () => {
  return (
    <>
      <Dashboard />
      <main className="flex flex-row gap-4 items-center justify-center flex-wrap p-10 mt-14">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        {/* Testing UI statically until we fetch data from database... */}
      </main>
    </>
  );
};

export default LandingPage;
