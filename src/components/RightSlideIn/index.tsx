import classNames from "classnames";
import { cloneElement, FC, ReactElement } from "react";

import { RightSlideInTransition } from "../RightSlideInTransition";
import { SlideOverContentHeader } from "./header";
import { SlideOverContentBody } from "./body";

import styles from "./styles.module.css";

interface SlideOversProps {
  title?: string;
  subtitle?: string;
  contentBody?: ReactElement;
  contentHeader?: ReactElement;
  isOpen?: boolean;
  showButtons?: boolean;
  handleCancelClick?: () => void;
}

export const SlideOvers: FC<SlideOversProps> = ({
  title = "Set Parameters",
  subtitle = "9 parameters available",
  contentBody,
  contentHeader,
  isOpen = false,
  showButtons = true,
  handleCancelClick,
}) => {
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
      <div className={styles.SlideOver__wrapper} aria-hidden={`${isOpen}`}>
        <RightSlideInTransition in={isOpen}>
          <div className={styles.SlideOverContent__wrapper}>
            {contentHeader ? (
              cloneElement(contentHeader, { handleCancelClick })
            ) : (
              <>
                <SlideOverContentHeader
                  title={title}
                  subtitle={subtitle}
                  handleClick={handleCancelClick}
                />
              </>
            )}
            <SlideOverContentBody handleCancelClick={handleCancelClick}>
              {/* {contentBody && cloneElement(contentBody, { handleCancelClick })} */}
            </SlideOverContentBody>
          </div>
        </RightSlideInTransition>
      </div>
    </div>
  );
};

export default SlideOvers;
