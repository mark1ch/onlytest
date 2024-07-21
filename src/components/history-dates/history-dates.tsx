import { useState } from "react";
import styles from "./history-dates.module.scss";
import { Circle, SlideChapter, YearsInterval, YearsFactsSlider } from "./index";

export function HistoryDates() {
  const [activeNumber, setActiveNumber] = useState(1);

  const handleActiveNumber = (num: number) => {
    setActiveNumber(num);
  };

  const handleNumberSlide = (arrow: string) => {
    if (arrow === "left") setActiveNumber((prev) => prev - 1);
    else if (arrow === "right") setActiveNumber((prev) => prev + 1);
  };

  return (
    <div className={styles.history__dates}>
      <div className={styles.history__dates__text}>
        <div className={styles.history__dates__text__gradient}></div>
        <p>Исторические даты</p>
      </div>
      <Circle activeNumber={activeNumber} onClickChapter={handleActiveNumber} />
      <YearsInterval activeNumber={activeNumber} />
      <SlideChapter
        activeNumber={activeNumber}
        onClickArrow={handleNumberSlide}
      />
      <YearsFactsSlider activeNumber={activeNumber} />
    </div>
  );
}
