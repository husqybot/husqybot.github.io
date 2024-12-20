import type { Props } from "@theme/NotFound/Content";

// Import components
import MainButton from "../../../components/buttons/mainButton/mainButton";

// Import styles
import styles from "./styles.module.css";

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <div className={styles.not_found_container}>
      <div className={styles.not_found_text_container}>
        <h1 className={styles.not_found_text_title}>Oh no!</h1>
        <span className={styles.not_found_text_subtitle}>
          We were unable to locate the requested page!
        </span>
        <p>
          We would appreciate if you let us know the broken link so we can fix
          this!
        </p>
      </div>
      <div className={styles.not_found_actions_container}>
        <MainButton
          type={1}
          text="Return home"
          onButtonClick={() => {
            window.location = "/";
          }}
        />
      </div>
    </div>
  );
}
