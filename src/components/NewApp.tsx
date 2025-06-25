import "./NewApp.css";
import type { SocialIconsProps, SpecItemsProps } from "../types/AppNewProps";

const NewApp = () => {
  const socialIcons: SocialIconsProps[] = [
    {
      link: "#",
      src: "./images/icons/social_icon1.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon2.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon3.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon4.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon5.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon6.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon7.png"
    },
    {
      link: "#",
      src: "./images/icons/social_icon8.png"
    },
  ]

  const specIcons: SpecItemsProps[] = [
    {
      label: "Awesomeness",
      link: "#",
      src: "./images/icons/icon_28px_1.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },
    {
      label: "Pro Concept",
      link: "#",
      src: "./images/icons/icon_28px_2.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },
    {
      label: "Colourfull",
      link: "#",
      src: "./images/icons/icon_28px_3.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },
    {
      label: "Skills",
      link: "#",
      src: "./images/icons/icon_28px_4.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },
    {
      label: "Responsive",
      link: "#",
      src: "./images/icons/icon_28px_5.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },
    {
      label: "Tested",
      link: "#",
      src: "./images/icons/icon_28px_6.png",
      descr: "Aenean lacinia bibendum nulla sed consectetur."
    },

  ]

  const firstHalfs = specIcons.slice(0, 3);
  const secondHalfs = specIcons.slice(3, 6);

  return (
    <section className="newApp">
      <div className="newAppHeader">
        <div className="socialIcons">
          {socialIcons.map((icon, index) => (
            <div className="socialIcon" key={index}>
              <a href={icon.link}>
                <img src={icon.src} alt="socialIcon" className="hover" />
              </a>
            </div>
          ))}
        </div>
        <span className="subtitle">Social Media option</span>
      </div>
      <div className="description">
        <h3><span className="light">Check Our</span> New App .</h3>
        <p className="paragraph">Aenean lacinia bibendum nulla sed consectetur. Donec sed
          odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className="appSpecs">
        <div className="specBlock">
          {firstHalfs.map((half, index) => (
            <div className="specItemL" key={index}>
              <div className="specTitleL">
                <img src={half.src} alt="icon28" />
                <a href={half.link} className="specLink">{half.label}</a>
              </div>
              <p>{half.descr}</p>
            </div>
          ))}
        </div>
        <div className="specBlock">
          <img src="./images/image_190px_1.png" alt="" />
        </div>
        <div className="specBlock">
          {secondHalfs.map((half, index) => (
            <div className="specItemR" key={index}>
              <div className="specTitleR">
                <img src={half.src} alt="icon28" />
                <a href={half.link} className="specLink">{half.label}</a>
              </div>
              <p>{half.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default NewApp;