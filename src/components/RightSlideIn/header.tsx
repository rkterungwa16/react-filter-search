import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, MouseEventHandler } from "react";

import styles from "./styles.module.css";

interface SlideOverContentHeaderProps {
  title?: string;
  subtitle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleReset?: MouseEventHandler<HTMLButtonElement>;
}

export const SlideOverContentHeader: FC<SlideOverContentHeaderProps> = ({
  title,
  subtitle,
  handleClick,
  handleReset
}) => (
  <div className={styles.SlideOverContentHeader__container}>
    <div className={styles.SlideOverContentHeader__wrapper}>
      <h2 className={styles.SlideOverContentHeader__title}>{title}</h2>
      <div className={styles.SlideOverContentHeaderTitle__wrapper}>
        <button data-testid="reset-btn-data" onClick={handleReset}>
          <span className={styles.SlideOverReset__button}>Reset all</span>
        </button>
        <button data-testid="cancel-btn-data" className={styles.SlideOverClose__button} onClick={handleClick}>
          <XMarkIcon style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      </div>
    </div>
    <div className={styles.SlideOverContentHeaderSubtitle__container}>
      <p className={styles.SlideOverContentHeader__subtitle}>{subtitle}</p>
    </div>
  </div>
);
