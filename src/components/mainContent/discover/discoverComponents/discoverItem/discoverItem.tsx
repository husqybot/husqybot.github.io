// Import styles
import styles from "./discoverItem.module.css";

// Interface
interface IDiscoverItem {
  icon: string;
  title: string;
  discription: string;
  resource_link: string;
}
export default function DiscoverItem({
  icon,
  title,
  resource_link,
}: IDiscoverItem) {
  return (
    <div
      onClick={() => {
        window.location = resource_link;
      }}
      className={styles.discover_item_container}
    >
      <div className={styles.discover_item_icon_container}>
        <span
          className={`material-symbols-outlined ${styles.discover_item_icon}`}
        >
          {icon}
        </span>
      </div>
      <div className={styles.discover_item_main_content_container}>
        <div className={styles.discover_item_text_container}>
          <h4 className={styles.discover_item_title}>{title}</h4>
        </div>
        <div className={styles.discover_item_link_text}>
          <label>Go to resource</label>
        </div>
      </div>
    </div>
  );
}
