import React from "react";

// Import styles
import styles from "./contentHighlight.module.css";

// Interfaces
interface IContentHightlight {
  children: React.ReactNode;
  type?: "primary" | "secondary" | undefined;
}

export default function ContentHighlight({
  children,
  type,
}: IContentHightlight) {
  return (
    <div
      className={`${styles.contentHighlight} ${
        type === "primary"
          ? styles.contentHighlight_primary
          : type === "secondary"
          ? styles.contentHighlight_secondary
          : ""
      }`}
    >
      {children}
    </div>
  );
}
