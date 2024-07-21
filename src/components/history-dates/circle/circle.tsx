import { CircleItem } from "../index";
import styles from "./circle.module.scss";
import { CircleProps } from "./types";

export function Circle({ activeNumber, onClickChapter }: CircleProps) {
  const arr = new Array(6).fill(0);

  return (
    <ul
      className={styles.circle}
      style={{ transform: `rotate(-${60 * activeNumber}deg)` }}
    >
      {arr.map((_, index) => (
        <CircleItem
          count={index + 1}
          activeCount={activeNumber}
          onHandleItem={onClickChapter}
          key={index}
        />
      ))}
    </ul>
  );
}
