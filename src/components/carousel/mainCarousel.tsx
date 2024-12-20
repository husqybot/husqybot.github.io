import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import styles
import styles from "./mainCarousel.module.css";

export default function MainCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          We are celebrating the launch of the new reworked Husqy2.0.0! Noticing
          any issues since the new update or missing changes in our changelog?
          Please let us know!
        </div>
        <div className={styles.embla__slide}>
          Want to help us translate the Husqy responses? We can't do it without you! Please visit&nbsp;
          <a href="https://github.com/husqybot/translations/">
            our translations repo!
          </a>
        </div>
      </div>
    </div>
  );
}
