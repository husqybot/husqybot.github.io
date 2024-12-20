import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Import components
import Hero from "../components/mainContent/hero/hero";
import ContentHighlight from "../components/mainContent/contentHighlight/contentHighlight";
import WhyChooseUs from "../components/mainContent/whyChooseUs/whyChooseUs";
import Discover from "../components/mainContent/discover/discover";
import MainButton from "../components/buttons/mainButton/mainButton";

// Import functions
import isElementInViewport from "../functions/isElementInViewport";

// Import NextUI provider
import { NextUIProvider } from "@nextui-org/react";

// Import styles
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Event listeners
  const checkElements = async () => {
    var targetWhyChooseUsElements = document.getElementsByClassName(
      styles.contentHighlight_why_choose_us
    );
    var targetDiscoverElements = document.getElementsByClassName(
      styles.contentHighlight_discover
    );

    if (isElementInViewport(targetWhyChooseUsElements[0])) {
      targetWhyChooseUsElements[0].classList.add(
        styles.animate_contentHighlight_why_choose_us
      );
    }
    if (isElementInViewport(targetDiscoverElements[0])) {
      targetDiscoverElements[0].classList.add(
        styles.animate_contentHighlight_discover
      );
    }
  };

  useEffect(() => {
    checkElements();
    // Attach the event listener to the window
    window.addEventListener("scroll", checkElements);

    // Cleanup the event listener when the component unmounts or is re-rendered
    return () => {
      window.removeEventListener("scroll", checkElements);
    };
  }, []); // Empty dependency array ensures it runs only once, similar to componentDidMount

  return (
    <Layout>
      <Hero />
      <ContentHighlight type="primary">
        <div className={styles.contentHighlight_why_choose_us}>
          <h2 className={styles.contentHighlight_why_choose_us_title}>
            Why the community chooses us?
          </h2>
        </div>
      </ContentHighlight>
      <WhyChooseUs />
      <ContentHighlight type="primary">
        <div className={styles.contentHighlight_discover}>
          <h2 className={styles.contentHighlight_discover_title}>
            Discover Husqy documentation, FAQ and more!
          </h2>
        </div>
      </ContentHighlight>
      <Discover />
      <ContentHighlight type="secondary">
        <div className={styles.contentHighlight_add_husqy}>
          <h2 className={styles.contentHighlight_add_husqy_title}>
            Add Husqy, the most{" "}
            <span className={styles.contentHighlight_add_husqy_highlight}>
              complete
            </span>{" "}
            Discord bot, to your server today!
          </h2>
          <div className={styles.contentHighlight_add_husqy_actions}>
            <MainButton
              type={3}
              text="Get started"
              onButtonClick={() => {
                window.location = "/get-started";
              }}
            />
          </div>
        </div>
      </ContentHighlight>
    </Layout>
  );
}
