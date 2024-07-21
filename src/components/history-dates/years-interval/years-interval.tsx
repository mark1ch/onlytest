import { yearsObj } from "./mock-data";
import styles from "./years-interval.module.scss";

export function YearsInterval({ activeNumber }: { activeNumber: number }) {
  return (
    <div className={styles.years__interval}>
      <p className={styles.years__interval_first}>{yearsObj[activeNumber].a}</p>
      <p className={styles.years__interval_second}>
        {yearsObj[activeNumber].b}
      </p>
    </div>
  );
}
