import { SlideInContext } from "@/components/RightSlideIn/context";
import { useState } from "react";

import { Layout } from "../components/Layout";

const Home = () => {
  const [filterValues, setFilterValues] = useState<
    { name: string; value: string }[]
  >([]);

  const handleFilterValues = (
    filterValues: { name: string; value: string }[]
  ) => {
    setFilterValues(filterValues);
  };
  console.log('context filter values -->>', filterValues);
  return (
    <SlideInContext.Provider value={{ handleFilterValues }}>
      <Layout>

      </Layout>
    </SlideInContext.Provider>
  );
};

export default Home;
