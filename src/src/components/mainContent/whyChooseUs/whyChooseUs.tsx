import { useEffect } from "react";

// Import components
import ReasonComponent from "./whyChooseUsComponents/reasonComponent/reasonComponent";
import MainButton from "../../buttons/mainButton/mainButton";

// Import functions
import isElementInViewport from "../../../functions/isElementInViewport";

// Import styles
import styles from "./whyChooseUs.module.css";
import reasonComponentStyles from "./whyChooseUsComponents/reasonComponent/reasonComponent.module.css";

export default function WhyChooseUs() {
  // Event listeners
  const checkElements = async () => {
    var targetElements = document.getElementsByClassName(
      reasonComponentStyles.reason_highlight
    );

    Array.from(targetElements).forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add(reasonComponentStyles.animate_reason_highlight);
        element.classList.add(reasonComponentStyles.opacity_1);
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
    <div className={styles.why_choose_us_container}>
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Configure everything to your liking"
        subtitle="The dashboard is there when you need it!"
        description_line_1="Almost everything in Husqy is configurable to fit your servers needs. Wether you want to change general Husqy settings, create reminders or giveaways without having access to Discord or enabling, configuring or disabling a Husqy module. You can do it all!"
        description_line_2="The way to do this all? The dashboard!"
        url="https://dashboard.husqy.xyz/"
        custom_button_text="Go to dashboard"
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Log your servers events"
        subtitle="See what is happening in your server!"
        description_line_1="Your servers events are important to you (and maybe your members). An easy way to get live notifications for your servers events is using the Husqy. Husqy can log all events that you want to a channel which you have full control over. Want everyone to see the logging messages, configure the channel to comply with your wishes."
        description_line_2="Something being logged you are not interested in? Turn it off using the dashboard."
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Greet your new server members"
        subtitle="Give them a warm welcome!"
        description_line_1="Greet your server member and give them standard information when they join to remove repetitiveness either in your servers channel or in the users DM. Choose between embeds or normal messages and give users a default role when they join!"
        description_line_2="Want to let others know when someone leaves? This is also possible!"
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Play your favorite music and radio stations"
        subtitle="Never have a boring voice chat again!"
        description_line_1="Ever been in a voice channel where it is all quiet? No more with music and radio stations. Make Husqy join your voice channel and play your favorite music or radiostation. Add full playlists or individual songs, skip songs, check the queue and even change the volume!"
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Create giveaways to engage your community"
        subtitle="Give back to the community!"
        description_line_1="Want to give back to your community? Now you can with Husqy giveaways. Easily create giveaways in your server and let Husqy pick a random winner or even multiple winners. Somebody one in another giveaway and now again? Reroll the giveaway winners to make sure someone doesn't win twice!"
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="And much more"
        subtitle="We think our features and modules are a good fit for your server!"
        description_line_1="There is much more to discover when you start using Husqy, these features just scrape the surface. Other features include creating reminders, using tags in your server, create reactionroles, and more. All of these are split across Husqy modules and standard Husqy features for you to configure in your server."
        description_line_2="Learn more by reading our documentation and start using Husqy today!"
        url="/get-started"
        custom_button_text="Invite Husqy now!"
      >
        <>
          <MainButton
            type={2}
            text="Documentation"
            onButtonClick={() => {
              window.location = "/docs";
            }}
          />
        </>
      </ReasonComponent>
    </div>
  );
}
