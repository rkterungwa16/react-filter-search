import { useState, FC } from "react";
import cx from "classnames";

import styles from "./styles.module.css";
import SlideOvers from "../RightSlideIn";

export type PageHeaderProps = {
  numberOfItems?: number;
};
export const PageHeader: FC<PageHeaderProps> = ({ numberOfItems = 0 }) => {
  const [sidebarIsOpen, setSideBarOpen] = useState(false);
  const handleClick = () => {
    setSideBarOpen(!sidebarIsOpen);
  };
  const handleCancelClick = () => {
    setSideBarOpen(false);
  };
  return (
    <div className={cx(styles.Page__header, "")}>
      <div className="flex flex-col">
        <h2 className="py-1">Item search</h2>
        <span>{numberOfItems} items</span>
      </div>
      <div className="flex">
        <div className="px-2">Item search</div>
        <button onClick={handleClick}>filter</button>
      </div>
      <SlideOvers
        isOpen={sidebarIsOpen}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};
