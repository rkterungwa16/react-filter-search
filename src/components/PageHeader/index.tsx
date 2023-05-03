import { useState, FC, useContext, ChangeEventHandler } from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import cx from "classnames";

import styles from "./styles.module.css";
import SlideIn from "../RightSlideIn";
import { SlideInContext } from "../RightSlideIn/context";

export type PageHeaderProps = {
  numberOfItems?: number;
};
export const PageHeader: FC<PageHeaderProps> = ({ numberOfItems = 0 }) => {
  const slideIn = useContext(SlideInContext);
  const [sidebarIsOpen, setSideBarOpen] = useState(false);
  const handleClick = () => {
    setSideBarOpen(!sidebarIsOpen);
  };
  const handleCancelClick = () => {
    setSideBarOpen(false);
  };
  const handleSearchChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    slideIn.handleSearchValues(value);
  }
  return (
    <div className={cx(styles.Page__header, "")}>
      <div className="flex flex-col">
        <h2 className="py-1">Item search</h2>
        <span>{slideIn.items.length} items</span>
      </div>
      <div className="flex">
        <div className="px-2">
          <input className={styles.Search__input} type='text' onChange={handleSearchChange} />
        </div>
        <button onClick={handleClick}>
          <FunnelIcon style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      </div>
      <SlideIn
        isOpen={sidebarIsOpen}
        handleCancelClick={handleCancelClick}
      />
    </div>
  );
};
