import classNames from "classnames";
import { ChangeEventHandler, FC, useState, useContext } from "react";

import { RightSlideInTransition } from "../RightSlideInTransition";
import { SlideOverContentHeader } from "./header";
import { SlideOverContentBody } from "./body";

import styles from "./styles.module.css";
import { SlideInContext } from "./context";

interface SlideInProps {
  isOpen?: boolean;
  handleCancelClick?: () => void;
}

export const SlideIn: FC<SlideInProps> = ({
  isOpen = false,
  handleCancelClick,
}) => {
  const slideIn = useContext(SlideInContext);
  const [filterValues, setFilterValues] = useState<
    { name: string; value: string }[]
  >([]);
  const handleResetFilterValues = () => {
    setFilterValues([]);
  };
  const handleFilterValuesChange = (
    filter: string
  ): ChangeEventHandler<HTMLTextAreaElement> => {
    return (e) => {
      const value = e.currentTarget.value as string;
      const exists = filterValues.find((_value) => _value.name === filter);
      if (exists) {
        const currentFilterValue = filterValues.map((_value) => {
          if (_value.name === filter) {
            return {
              ..._value,
              value,
            };
          }
          return _value;
        });
        setFilterValues(currentFilterValue);
        slideIn?.handleFilterValues(currentFilterValue);
      }
      if (!exists) {
        const currentFilterValue = [
          ...filterValues,
          {
            name: filter,
            value,
          },
        ];
        setFilterValues(currentFilterValue);
        slideIn.handleFilterValues(currentFilterValue);
      }
    };
  };

  return (
    <div
      className={classNames(styles.SlideOver__container, {
        [styles.SlideOverBackground__on]: isOpen,
        [styles.SlideOverBackground__off]: !isOpen,
      })}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.SlideOver__wrapper} aria-hidden={isOpen}>
        <RightSlideInTransition in={isOpen}>
          <div className={styles.SlideOverContent__wrapper}>
            <SlideOverContentHeader
              title="Set Parameters"
              subtitle={`${filterValues.length} parameters available`}
              handleClick={handleCancelClick}
              handleReset={handleResetFilterValues}
            />

            <SlideOverContentBody>
              <div className="flex flex-col px-3 py-2">
                <div className="flex">
                  <h4 className="text-base font-semibold py-3">Item</h4>
                </div>
                <textarea
                  className={styles.textarea}
                  rows={5}
                  onChange={handleFilterValuesChange("item")}
                  value={
                    filterValues.find((_value) => _value.name === "item")
                      ?.value || ""
                  }
                />
              </div>
              <div className="flex flex-col px-3 py-2">
                <div className="flex">
                  <h4 className="text-base font-semibold py-3">Order</h4>
                </div>
                <textarea
                  className={styles.textarea}
                  rows={5}
                  onChange={handleFilterValuesChange("order")}
                  value={
                    filterValues.find((_value) => _value.name === "order")
                      ?.value || ""
                  }
                />
              </div>
            </SlideOverContentBody>
          </div>
        </RightSlideInTransition>
      </div>
    </div>
  );
};

export default SlideIn;
