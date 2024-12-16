// Import components
import ReasonComponent from "./whyChooseUsComponents/reasonComponent/reasonComponent";

// Import styles
import styles from "./whyChooseUs.module.css";

export default function WhyChooseUs() {
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
        description_line_1=""
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Greet your new server members"
        subtitle="Give them a warm welcome!"
        description_line_1=""
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Play your favorite music and radio stations"
        subtitle="Never have a boring voice chat again!"
        description_line_1=""
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="Create giveaways to engage your community"
        subtitle="Give back to the community!"
        description_line_1=""
      />
      <ReasonComponent
        image_url="/img/stock_discord_image.png"
        title="And much more"
        subtitle="We think our features and modules are a good fit for your server!"
        description_line_1="There is much more to discover when you start using Husqy, these features just scrape the surface. Other features include creating reminders, using tags in your server, create reactionroles, and more. All of these are split across Husqy modules and standard Husqy features for you to configure in your server."
        description_line_2="Learn more by reading our documentation and start using Husqy today!"
        url="/get-started"
        custom_button_text="Invite Husqy now!"
      />
    </div>
  );
}
