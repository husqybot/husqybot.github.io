// Import components
import MainButton from "../../../../buttons/mainButton/mainButton";

// Import styles
import styles from "./reasonComponent.module.css";

// Interface
interface IWhyChooseUs {
  image_url: string;
  title: string;
  description: string;
}

export default function ReasonComponent({
  image_url,
  title,
  description,
}: IWhyChooseUs) {
  return (
    <div className={styles.reason_highlight}>
      <div className={styles.reason_container_image}>
        <img
          className={styles.reason_image}
          src={image_url}
          width={484}
          height={333}
        />
      </div>
      <div className={styles.reason_main_content}>
        <div className={styles.reason_main_text}>
          <h3 className={styles.reason_title}>{title}</h3>
          <p className={styles.reason_description}>{description}</p>
        </div>
        <div className={styles.reason_actions}>
          <MainButton
            type={1}
            text="Learn more"
            onButtonClick={() => {
              window.location = "/";
            }}
          />
        </div>
      </div>
    </div>
  );
}
