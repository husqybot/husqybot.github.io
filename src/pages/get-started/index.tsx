import { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// Import components
import MainButton from "../../components/buttons/mainButton/mainButton";

// Import functions
import isElementInViewport from "../../functions/isElementInViewport";

// Import styles
import styles from "./index.module.css";

export default function GetStarted(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  // Event listeners
  const checkElements = async () => {
    var targetElements = document.getElementsByClassName(
      styles.get_started_step_small_container
    );

    Array.from(targetElements).forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add(styles.animate_slide_in_small_cards);
      }
    });
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
      <div className={styles.get_started_container} id="get-started-container">
        <div className={styles.get_started_text_container}>
          <h1 className={styles.get_started_title}>Get started</h1>
          <span className={styles.get_started_subtitle}>
            We are sure you will enjoy!
          </span>
          <p className={styles.get_started_text}>
            Thank you for trusting Husqy! Please follow the steps below to make
            full use of Husqy and get the best experience for your server and
            members!
          </p>
        </div>
        <div className={styles.get_started_steps_container}>
          <div className={styles.get_started_step_big_container}>
            <div className={styles.get_started_step_big_icon_container}>
              <span
                className={`${styles.get_started_step_big_icon} material-symbols-outlined`}
              >
                add_circle
              </span>
            </div>
            <div className={styles.get_started_step_big_container_content}>
              <div className={styles.get_started_step_text_container}>
                <span className={styles.get_started_step_title}>
                  Invite Husqy to your server
                </span>
                <p className={styles.get_started_step_text}>
                  Invite Husqy to your server, allow access to the needed
                  permissions. Husqy will setup some default settings and do the
                  onboarding for you on the background, so no need to worry!
                </p>
              </div>
              <div className={styles.get_started_step_actions_container}>
                <MainButton
                  type={1}
                  text="Add Husqy"
                  onButtonClick={() => {
                    window.location =
                      "https://discord.com/api/oauth2/authorize?client_id=868946730878632047&permissions=1506760976631&scope=bot%20applications.commands";
                  }}
                />
              </div>
            </div>
          </div>
          <div className={styles.get_started_step_small_container}>
            <div className={styles.get_started_step_small_icon_container}>
              <span
                className={`${styles.get_started_step_small_icon} material-symbols-outlined`}
              >
                change_circle
              </span>
            </div>
            <div className={styles.get_started_step_small_container_content}>
              <div className={styles.get_started_step_text_container}>
                <span className={styles.get_started_step_title}>
                  Configure Husqy
                </span>
                <p className={styles.get_started_step_text}>
                  When Husqy is joined to your server, you can immediatly start
                  configuring Husqy to you servers needs, be sure to have fun
                  too!
                </p>
              </div>
              <div className={styles.get_started_step_actions_container}>
                <a href="/docs/introduction">Go to documentation</a>
                <span
                  className={`${styles.get_started_step_actions_container_icon} material-symbols-outlined`}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
          <div className={styles.get_started_step_small_container}>
            <div className={styles.get_started_step_small_icon_container}>
              <span
                className={`${styles.get_started_step_small_icon} material-symbols-outlined`}
              >
                recommend
              </span>
            </div>
            <div className={styles.get_started_step_small_container_content}>
              <div className={styles.get_started_step_text_container}>
                <span className={styles.get_started_step_title}>Have fun</span>
                <p className={styles.get_started_step_text}>
                  Use Husqy and have fun with it. Play music, setup your
                  community or play games with friends accompanied by Husqy!
                </p>
              </div>
              <div className={styles.get_started_step_actions_container}>
                <a href="/">Back to front page</a>
                <span
                  className={`${styles.get_started_step_actions_container_icon} material-symbols-outlined`}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
