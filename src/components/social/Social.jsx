import { useState } from "react";
// icons
import instagramIcon from "../icons/instagram.svg";
import githubIcon from "../icons/github.svg";
import discordIcon from "../icons/discord.svg";
import gmailIcon from "../icons/gmail.svg";
import LinkedInIcon from "../icons/linkedIn.svg";
import youtubeIcon from "../icons/youtube.svg";
// style
import Style from "./social.module.css";
const Icons = ({ href, imgSrc, IconName }) => {
  return (
    <div>
      <a href={href} target="_dvn">
        <img src={imgSrc} alt={`${IconName} Icon`} style={{ width: "40px" }} />
        <span style={{ fontSize: "20px", margin: "0 10px" }}>{IconName}</span>
      </a>
    </div>
  );
};
const Social = () => {
  const [mailCopyedIndicator, setMailCopyedIndicator] = useState(false);
  const handleCopyingEmail = () => {
    navigator.clipboard
      .writeText("devendrdhare03@gmail.com")
      .then(() => {
        setMailCopyedIndicator(true);
        setTimeout(() => {
          setMailCopyedIndicator(false);
        }, 1000);
      })
      .catch((err) => {
        alert("Unable to copy to clipboard", err);
      });
  };
  return (
    <>
      <section
        className={Style.socialSection}
        style={{ left: "-870px", top: "50px" }}
      >
        <Icons
          href="https://www.instagram.com/devendra_dhare22/"
          imgSrc={instagramIcon}
          IconName="Instagram"
        />
        <Icons
          href="https://github.com/devendradhare"
          imgSrc={githubIcon}
          IconName="Github"
        />
        <Icons
          href="https://discord.gg/AKH3QQGb"
          imgSrc={discordIcon}
          IconName="Discord"
        />
        <Icons
          href="https://www.linkedin.com/in/devendra-dhare-bbb214221/"
          imgSrc={LinkedInIcon}
          IconName="LinkedIn"
        />
        <Icons
          href="https://www.youtube.com/channel/UCU8CkuqiYF3iojYnr8Zc4GQ"
          imgSrc={youtubeIcon}
          IconName="YouTube"
        />
        {/* gmail */}
        <div onClick={() => handleCopyingEmail()}>
          <img src={gmailIcon} alt="Gamil Icon" style={{ width: "40px" }} />
          <span style={{ fontSize: "20px", margin: "0 10px" }}>Gmail</span>
          <div>
            <span
              className={
                mailCopyedIndicator
                  ? `${Style.mailCopyedAnimation}`
                  : `${Style.mailCopyed}`
              }
            >
              email copyed
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Social;
