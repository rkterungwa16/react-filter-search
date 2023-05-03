
import { SlideInContext } from "@/components/RightSlideIn/context";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    let query = '';
    if (filterValues.length) {
      query = filterValues?.map(
        (_value) =>
          `${_value.name}=${_value.value}`
      ).join("&");
    }
    console.log('query -->>', query);
    console.log('filter values -->>', filterValues);
    (async () => {
      const resultsResponse = await fetch(`http://localhost:3000/api/items${ query ? `?${query}` : ''}`);
      const results = await resultsResponse.json();
      console.log('request', results)
    })();
  }, [filterValues]);
  console.log("context filter values -->>", filterValues);
  return (
    <SlideInContext.Provider value={{ handleFilterValues }}>
      <Layout>
        
      </Layout>
    </SlideInContext.Provider>
  );
};

export default Home;
