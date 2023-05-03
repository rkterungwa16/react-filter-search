import { SlideInContext } from "@/components/RightSlideIn/context";
import { useEffect, useState } from "react";

import { Layout } from "../components/Layout";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
console.log("base url", baseUrl);
const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filterValues, setFilterValues] = useState<
    { name: string; value: string }[]
  >([]);

  const handleFilterValues = (
    filterValues: { name: string; value: string }[]
  ) => {
    setFilterValues(filterValues);
  };
  const handleSearchValues = (search: string) => {
    setSearch(search);
  };
  useEffect(() => {
    let query = "";
    if (filterValues.length) {
      query = filterValues
        ?.map((_value) => `${_value.name}=${_value.value}`)
        .join("&");
    }
    (async () => {
      const resultsResponse = await fetch(
        `${baseUrl}/api/items${
          query ? `?${query}&search=${search}` : `?search=${search}`
        }`
      );
      const results = await resultsResponse.json();
      setItems(results);
    })();
  }, [filterValues, search]);

  return (
    <SlideInContext.Provider value={{ handleFilterValues, handleSearchValues, items }}>
      <Layout>
        {items.length ? (
          <table>
            <thead>
              <tr className="font-bold py-2">
                <td>Category</td>
                <td>Item</td>
                <td>Order</td>
                <td>type</td>
              </tr>
            </thead>

            <tbody>
              {items.map((_item: any, index) => (
                <tr key={index}>
                  <td>{_item.category}</td>
                  <td>{_item.item}</td>
                  <td>{_item.order}</td>
                  <td>{_item.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </Layout>
    </SlideInContext.Provider>
  );
};

export default Home;
