import React, { type ReactNode } from "react";
import Layout from "@theme-original/Layout";
import type { Props } from "@theme/Layout";

// Import MainCarousel
import MainCarousel from "../../components/carousel/mainCarousel";

// Import NextUI provider
import { NextUIProvider } from "@nextui-org/react";

// Import styles
import styles from "./styles.module.css";

export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <NextUIProvider className={styles.nextui_provider_overwrite}>
      <MainCarousel />
      <Layout {...props} />
    </NextUIProvider>
  );
}
