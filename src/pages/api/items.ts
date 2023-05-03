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
  filteredItems = filteredItems.filter((_item: any) => {
    const filterKeys = Object.keys(query);
    const validItems = filterKeys.every((_key: string) => {
      if (_item[_key]) {
        return _item[_key] === query[_key];
      }
      return false;
    })
    return validItems;
  });
  const search = query?.search as string;
  const searchItems = search?.split(",");
  res.status(200).json(filteredItems);
}
