import React, { type ReactNode } from "react";
import Layout from "@theme-original/Layout";
import type { Props } from "@theme/Layout";

// Import MainCarousel
import MainCarousel from "../../components/carousel/mainCarousel";

// Import NextUI provider
import { HeroUIProvider } from "@heroui/react";

// Import styles
import styles from "./styles.module.css";

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <HeroUIProvider className={styles.nextui_provider_overwrite}>
      <MainCarousel />
      <Layout {...props} />
    </HeroUIProvider>
  );
}
