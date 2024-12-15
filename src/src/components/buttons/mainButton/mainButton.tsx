"use client";
import { Button } from "@nextui-org/button";

// Import types
import { PressEvent } from "@react-types/shared";

// Styles
import styles from "./mainButton.module.css";

// Interfaces
interface IMainButton {
  text: string;
  type: 1 | 2;
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
  }
  return;
}
