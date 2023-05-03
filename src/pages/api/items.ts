// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { items } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    {
      order: string;
      type: string;
      item: string;
      category: string;
    }[]
  >
) {
  const { query, body } = req;
  let filteredItems = items;
  const filterKeys = Object.keys(query).filter((_key) => _key!=="search");
  if (filterKeys.length) {
    filteredItems = filteredItems.filter((_item: any) => {
      const validItems = filterKeys.every((_key: string) => {
        if (_item[_key]) {
          return _item[_key] === query[_key];
        }
        return false;
      })
      return validItems;
    });
  }
  const search = query?.search as string;
  const searchItems = search?.split(",").map((_item) => _item.trim());

  if (search) {
    filteredItems = filteredItems.filter((_item) => {
      const some = Object.values(_item).some((_value) => {
        return searchItems.includes(_value)
      });
      return some;
    })
  }
  res.status(200).json(filteredItems);
}
