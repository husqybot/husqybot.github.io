"use client";
import { Button } from "@heroui/button";

// Import types
import { PressEvent } from "@react-types/shared";

// Styles
import styles from "./mainButton.module.css";

// Interfaces
interface IMainButton {
  text: string;
  type: 1 | 2 | 3 | 4 | 5;
  onButtonClick: (e: PressEvent) => void;
  customClass?: string | undefined;
}

export default function MainButton({
  text,
  type,
  onButtonClick,
  customClass,
}: IMainButton) {
  switch (type) {
    case 1:
      return (
        <Button
          onPress={onButtonClick}
          className={`${styles.main_button_overwrite} ${styles.primary} ${
            customClass === undefined ? "" : customClass
          }`}
        >
          {text}
        </Button>
      );
    case 2:
      return (
        <Button
          onPress={onButtonClick}
          className={`${styles.main_button_overwrite} ${styles.secondary} ${
            customClass === undefined ? "" : customClass
          }`}
          variant="bordered"
        >
          {text}
        </Button>
      );
    case 3:
      return (
        <Button
          onPress={onButtonClick}
          className={`${styles.main_button_overwrite} ${styles.tertiary} ${
            customClass === undefined ? "" : customClass
          }`}
          variant="bordered"
        >
          {text}
        </Button>
      );
    case 4:
      return (
        <Button
          onPress={onButtonClick}
          type="submit"
          className={`${styles.main_button_overwrite} ${
            styles.discord_blurple
          } ${customClass === undefined ? "" : customClass}`}
          variant="bordered"
        >
          {text}
        </Button>
      );
    case 5:
      return (
        <Button
          onPress={
            onButtonClick !== undefined && onButtonClick !== null
              ? onButtonClick
              : () => {}
          }
          type="submit"
          className={`${styles.main_button_overwrite} ${styles.danger} ${
            customClass === undefined ? "" : customClass
          }`}
          variant="bordered"
        >
          {text}
        </Button>
      );
  }
  return;
}
