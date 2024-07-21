import { cn } from "../../../utils/cn";
import arrow from "../../../../public/icon-arrow.svg";
import styles from "./slide-chapter.module.scss";
import { SlideChapterProps } from "./types";

export function SlideChapter({
  activeNumber,
  onClickArrow,
}: SlideChapterProps) {
  return (
    <div className={styles.slide__chapter}>
      <p className={styles.slide__chapter__header}>{`0${activeNumber}/06`}</p>
      <div className={styles.slide__chapter__btn}>
        <button
          disabled={activeNumber === 1}
          className={cn({
            [styles.slide__chapter__btn_disabled]: activeNumber === 1,
          })}
          onClick={() => onClickArrow("left")}
        >
          <img
            src={arrow}
            alt="arrow left"
            className={styles.slide__chapter__btn_left}
          />
        </button>
        <button
          disabled={activeNumber === 6}
          className={cn({
            [styles.slide__chapter__btn_disabled]: activeNumber === 6,
          })}
          onClick={() => onClickArrow("right")}
        >
          <img
            src={arrow}
            alt="arrow right"
            className={styles.slide__chapter__btn_right}
          />
        </button>
      </div>
    </div>
  );
}
