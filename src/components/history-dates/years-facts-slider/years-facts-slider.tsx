import styles from "./years-facts-slider.module.scss";
import { factsObj } from "./mock-data";
import { YearFact } from "../index";
import { useCallback, useEffect, useRef, useState } from "react";

export function YearsFactsSlider({ activeNumber }: { activeNumber: number }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const checkArrows = () => {
    if (!ref.current) return;
    const {
      scrollWidth,
      clientWidth,
      scrollLeft: currentScrollLeft,
    } = ref.current;
    setShowLeftArrow(currentScrollLeft > 0);
    setShowRightArrow(currentScrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkArrows();
  }, []);

  const handleScroll = useCallback((direction: "left" | "right") => {
    if (!ref.current) return;
    const newScrollLeft =
      direction === "left"
        ? ref.current.scrollLeft - 400
        : ref.current.scrollLeft + 400;
    ref.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    checkArrows();
  }, []);

  return (
    <div className={styles.years__facts__slider}>
      {showLeftArrow && (
        <button
          className={styles.years__facts__slider__btn_left}
          onClick={() => handleScroll("left")}
        >
          {"<"}
        </button>
      )}
      <div
        className={styles.years__facts__slider__content}
        ref={ref}
        onScroll={checkArrows}
      >
        {factsObj[activeNumber].map((item) => (
          <YearFact fact={item.fact} year={item.years} key={item.id} />
        ))}
      </div>
      {showRightArrow && (
        <button
          className={styles.years__facts__slider__btn_right}
          onClick={() => handleScroll("right")}
        >
          {">"}
        </button>
      )}
    </div>
  );
}
