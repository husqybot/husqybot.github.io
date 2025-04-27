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
          We are testing <a href="https://husqy.xyz/premium">premium</a> Husqy
          subscription! Please check back soon to unleash the full power of
          Husqy!
        </div>
        <div className={styles.embla__slide}>
          The permissions Husqy needs have been updated! Please cross check with
          the new invite link to make sure you are up to date!
        </div>
        <div className={styles.embla__slide}>
          We are now verified! Husqy is now a verified bot in Discord making us
          visible in the app discovery and enabling bigger trust to users!
        </div>
        <div className={styles.embla__slide}>
          Want to help us translate the Husqy responses? We can't do it without
          you! Please visit&nbsp;
          <a href="https://github.com/husqybot/translations/">
            our translations repo!
          </a>
        </div>
      </div>
    </div>
  );
}
