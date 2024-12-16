// Import components
import DiscoverItem from "./discoverComponents/discoverItem/discoverItem";

// Import styles
import styles from "./discover.module.css";

export default function Discover() {
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
        resource_link="https://github.com/husqybot/CHANGELOG/blob/main/CHANGELOG.md"
      />
    </div>
  );
}
