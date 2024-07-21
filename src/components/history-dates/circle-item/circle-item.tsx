import styles from "./circle-item.module.scss";
import { cn } from "../../../utils/cn";
import { CircleItemProps } from "./types";

export function CircleItem({
  count,
  activeCount,
  onHandleItem,
}: CircleItemProps) {
  return (
    <li className={styles.circle__item} onClick={() => onHandleItem(count)}>
      <button
        className={cn({
          [styles.circle__item_active]: activeCount === count,
        })}
        style={{ transform: `rotate(${60 * activeCount}deg)` }}
      >
        {count}
      </button>
    </li>
  );
}
