import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Import styles
import styles from "./index.module.css";

export default function GetStarted(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <Layout>Get started</Layout>;
}
