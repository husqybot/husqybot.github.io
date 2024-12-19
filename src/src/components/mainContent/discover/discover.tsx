import { useEffect } from "react";

// Import components
import DiscoverItem from "./discoverComponents/discoverItem/discoverItem";

// Import functions
import isElementInViewport from "../../../functions/isElementInViewport";

// Import styles
import styles from "./discover.module.css";
import discoverItemStyles from "./discoverComponents/discoverItem/discoverItem.module.css";

export default function Discover() {
  // Event listeners
  const checkElements = async () => {
    var targetElements = document.getElementsByClassName(
      discoverItemStyles.discover_item_container
    );

    if (isElementInViewport(targetElements[0])) {
      targetElements[0].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[0].classList.add(discoverItemStyles.opacity_1);
    }
    if (isElementInViewport(targetElements[1])) {
      targetElements[1].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[1].classList.add(discoverItemStyles.opacity_1);
    }
    if (isElementInViewport(targetElements[2])) {
      targetElements[2].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[2].classList.add(discoverItemStyles.opacity_1);
    }
    if (isElementInViewport(targetElements[3])) {
      targetElements[3].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[3].classList.add(discoverItemStyles.opacity_1);
    }
    if (isElementInViewport(targetElements[4])) {
      targetElements[4].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[4].classList.add(discoverItemStyles.opacity_1);
    }
    if (isElementInViewport(targetElements[5])) {
      targetElements[5].classList.add(
        discoverItemStyles.animate_discover_container
      );
      targetElements[5].classList.add(discoverItemStyles.opacity_1);
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
    <div className={styles.discover_container}>
      <DiscoverItem
        icon="dashboard"
        title="Configure Husqy to your liking using the Husqy dashboard!"
        resource_link="https://dashboard.husqy.xyz/"
      />
      <DiscoverItem
        icon="article"
        title="Get familiar with Husqy by reading the documentation."
        resource_link="/docs"
      />
      <DiscoverItem
        icon="question_mark"
        title="Any questions? They may be answered on our FAQ page!"
        resource_link="/faq"
      />
      <DiscoverItem
        icon="link"
        title="Join our support server!"
        resource_link="https://discord.gg/W8EdsMkZRm"
      />
      <DiscoverItem
        icon="bug_report"
        title="Check on known issues"
        resource_link="/known-issues"
      />
      <DiscoverItem
        icon="update"
        title="Check the changelog"
        resource_link="/documents/changelog"
      />
    </div>
  );
}
