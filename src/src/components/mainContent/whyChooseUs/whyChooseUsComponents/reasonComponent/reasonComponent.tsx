import React from "react";

// Import components
import MainButton from "../../../../buttons/mainButton/mainButton";

// Import styles
import styles from "./reasonComponent.module.css";

// Interface
interface IWhyChooseUs {
  children?: React.ReactNode | undefined;
  image_url?: string | undefined;
  icon?: string | undefined;
  title: string;
  subtitle: string;
  description_line_1: string;
  description_line_2?: string | undefined;
  url?: string | undefined;
  custom_button_text?: string | undefined;
}

export default function ReasonComponent({
  children,
  image_url,
  icon,
  title,
  subtitle,
  description_line_1,
  description_line_2,
  url,
  custom_button_text,
}: IWhyChooseUs) {
  return (
    <div className={styles.reason_highlight}>
      <div className={styles.reason_container_image}>
        {image_url !== undefined ? (
          <img
            className={styles.reason_image}
            src={image_url}
            width={484}
            height={333}
          />
        ) : (
          <></>
        )}
        {icon !== undefined ? (
          <span
            className={`${styles.reason_container_icon_overwrite} material-symbols-outlined`}
          >
            {icon}
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.reason_main_content}>
        <div className={styles.reason_main_text}>
          <div className={styles.reason_main_title_container}>
            <h3 className={styles.reason_title}>{title}</h3>
            <label className={styles.reason_subtitle}>{subtitle}</label>
          </div>
          <p className={styles.reason_description}>{description_line_1}</p>
          {description_line_2 === undefined ? (
            ""
          ) : (
            <>
              <br />
              <p className={styles.reason_description}>{description_line_2}</p>
            </>
          )}
        </div>
        <div className={styles.reason_actions}>
          <MainButton
            type={1}
            text={
              custom_button_text === undefined
                ? "Learn more"
                : custom_button_text
            }
            onButtonClick={() => {
              window.location = url === undefined ? "/" : url;
            }}
          />
          {children === undefined ? <></> : children}
        </div>
      </div>
    </div>
  );
}
