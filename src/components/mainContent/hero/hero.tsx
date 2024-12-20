// Import components
import MainButton from "../../buttons/mainButton/mainButton";

// Import styles
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_text_actions_container}>
        <div className={styles.hero_text_container}></div>
        <h1 className={styles.hero_title}>
          Take control of your Discord server.
        </h1>
        <span className={styles.hero_subtitle}>
          With the most advanced bot you can add!
        </span>
        <p className={styles.hero_text}>
          Take control of your own Discord server with Husqy. Husqy is designed
          to make your life as a server manager easier. Configure everything
          yourself with the help of our documentation.
        </p>
        <div className={styles.hero_actions}>
          <MainButton
            type={1}
            text="Get started"
            onButtonClick={() => {
              window.location = "/get-started";
            }}
          />
          <MainButton
            type={2}
            text="Dashboard"
            onButtonClick={() => {
              window.location = "https://dashboard.husqy.xyz/";
            }}
          />
        </div>
      </div>
      <div className={styles.hero_image_container}>
        <img className={styles.hero_image} src="/img/stock_discord_image.png" />
      </div>
    </div>
  );
}
