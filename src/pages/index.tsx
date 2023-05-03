import { SlideInContext } from "@/components/RightSlideIn/context";
import { useEffect, useState } from "react";

import { Layout } from "../components/Layout";

const Home = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
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
  }
  useEffect(() => {
    let query = "";
    if (filterValues.length) {
      query = filterValues
        ?.map((_value) => `${_value.name}=${_value.value}`)
        .join("&");
    }
    (async () => {
      const resultsResponse = await fetch(
        `http://localhost:3000/api/items${query ? `?${query}&search=${search}` : `?search=${search}`}`
      );
      const results = await resultsResponse.json();
      setItems(results);
    })();
  }, [filterValues, search]);

  return (
    <SlideInContext.Provider value={{ handleFilterValues, handleSearchValues }}>
      <Layout>
        {items.length ? (
          <table>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Order</th>
              <th>type</th>
            </tr>
            (
            {items.map((_item: any, index) => (
              <tr key={index}>
                <td>{_item.category}</td>
                <td>{_item.item}</td>
                <td>{_item.order}</td>
                <td>{_item.type}</td>
              </tr>
            ))}
            )
          </table>
        ) : null}
      </Layout>
    </SlideInContext.Provider>
  );
};

export default Home;
