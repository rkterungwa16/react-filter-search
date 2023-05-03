
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  ReactNode,
} from "react";

import styles from "./styles.module.css";

interface SlideOverContentBodyProps {
  handleCancelClick?: () => void;
  children?: ReactNode;
}

export const SlideOverContentBody: FC<SlideOverContentBodyProps> = ({
  handleCancelClick,
  children,
}) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        ...(handleCancelClick && { handleCancelClick }),
      });
    }
    return child;
  });
  return (
    <div className={styles.SlideOverContentBody__container}>
      <div className={styles.SlideOverContentBody__wrapper}>
        {childrenWithProps}
      </div>
    </div>
  );
};
