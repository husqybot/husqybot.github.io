import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Import components
import MainButton from "../../components/buttons/mainButton/mainButton";

// Import styles
import styles from "./index.module.css";

export default function GetStarted(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <div className={styles.premium_container} id="get-started-container">
        <div className={styles.premium_text_container}>
          <h1 className={styles.premium_title}>Premium</h1>
          <span className={styles.premium_subtitle}>
            Get extra benefits and unlock Husqy's full potential!
          </span>
          <p className={styles.premium_text}>
            We are currently testing premium subscription and they will be
            available soon!
          </p>
        </div>
        <div className={styles.premium_comparison_table}>
          <div className={styles.premium_comparison_table_header}>
            <div className={styles.premium_comparison_table_header_item_1}>
              <h3>Features</h3>
            </div>
            <div className={styles.premium_comparison_table_header_item_2}>
              <div className={styles.plan_title_container}>
                <h3>Free</h3>
                <h1>$0.00</h1>
              </div>
              <MainButton
                type={2}
                text="Get started"
                onButtonClick={() => {
                  window.location = "https://husqy.xyz/get-started";
                }}
              />{" "}
            </div>
            <div className={styles.premium_comparison_table_header_item_3}>
              <div className={styles.plan_title_container}>
                <h3>Husqy+</h3>
                <h1>$1.99</h1>
              </div>
              <MainButton
                type={1}
                text="Subscribe to Husqy+"
                onButtonClick={() => {
                  window.location = "https://husqy.xyz/get-started";
                }}
              />{" "}
            </div>
          </div>
          <div className={styles.premium_comparison_table_body}>
            {/* GENERAL */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>General</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Functions giveaways
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Utils commands
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Audio (music & radio) commands
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Moderation commands
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Games commands
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Info commands
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Meme command
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
            {/* Module Logging */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module logging</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Custom logs channel
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Log events
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
            {/* Module Welcoming */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module welcoming</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Welcome messages in DM
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Welcome messages in channel
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Leave messages in channel
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Autorole
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Timedroles
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    DM welcome message entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Channel welcome message entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Channel leave message entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Timedroles entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* Module Tempchannels */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module tempchannels</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Creation channels
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Active tempchannels
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* Module Socials */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module Socials</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Subreddits
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    10
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Twitch accounts
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    10
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    RSS feeds
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    10
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    YouTube channels
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    3
                  </div>
                </div>
              </div>
            </div>
            {/* Module Reactionroles */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module Reactionroles</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Reactionrole panels
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Reactionrole emoji entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    20
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Reactionrole button entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    25
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Reactionrole dropdown entries
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    25
                  </div>
                </div>
              </div>
            </div>
            {/* Module Tickets */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module tickets</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Ticket panels
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Ticket types
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    25
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Active tickets
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    10
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* Module Serverstats */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module serverstats</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Counters
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    3
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Starboard
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Statistics
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
            {/* Module Tags */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module tags</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Tags
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    10
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* Module Verifier */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module verifier</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Click-to-pass
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Passphrase
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Web
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
            {/* Module Rules */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module rules</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Rule limit
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    3
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    Unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* Module Invite tracker */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module invite tracker</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Shared invite link
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Statistics
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ✅
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
            {/* Module Polls */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module Polls</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Discord polls
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    unlimited
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Answers (Discord polls)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    10 (Discord limit)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    10 (Discord limit)
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Husqy polls
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Emoji answers (Husqy polls)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    20
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Button answers (Husqy polls)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    25
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Dropdown answers (Husqy polls)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    5
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    25
                  </div>
                </div>
              </div>
            </div>
            {/* Module Reminders */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Module Reminders</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Quick reminders (per user per server)
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    3
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Repeated reminders
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    unlimited
                  </div>
                </div>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Scheduled reminders
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    1
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    unlimited
                  </div>
                </div>
              </div>
            </div>
            {/* SUPPORT */}
            <div className={styles.premium_comparison_table_body_row}>
              <div
                className={styles.premium_comparison_table_body_row_group_title}
              >
                <h4>Support</h4>
              </div>
              <div className={styles.premium_comparison_table_body_row_item}>
                <div
                  className={
                    styles.premium_comparison_table_body_row_item_container
                  }
                >
                  <div className={styles.premium_comparison_table_row_item_1}>
                    Priority support
                  </div>
                  <div className={styles.premium_comparison_table_row_item_2}>
                    ❌
                  </div>
                  <div className={styles.premium_comparison_table_row_item_3}>
                    ✅
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
