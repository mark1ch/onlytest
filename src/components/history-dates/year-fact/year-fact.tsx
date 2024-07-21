import { YearFactProps } from "./types";
import styles from "./year-fact.module.scss";

export function YearFact({ year, fact }: YearFactProps) {
  return (
    <div className={styles.year__fact}>
      <p className={styles.year__fact_year}>{year}</p>
      <p className={styles.year__fact_text}>{fact}</p>
    </div>
  );
}
