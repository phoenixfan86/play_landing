import "./Features.css";
import type { FeatureItemProps } from "../types/FeatureItemProps";

const Features = () => {
  const featureItems: FeatureItemProps[] = [
    {
      src: "./images/icons/icon_52px_1.png",
      label: "Feature 1.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-0",
    },
    {
      src: "./images/icons/icon_52px_2.png",
      label: "Feature 2.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-1",
    },
    {
      src: "./images/icons/icon_52px_3.png",
      label: "Feature 3.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-2",
    },
    {
      src: "./images/icons/icon_52px_4.png",
      label: "Feature 4.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-3",
    },
    {
      src: "./images/icons/icon_52px_5.png",
      label: "Feature 5.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-1",
    },
    {
      src: "./images/icons/icon_52px_6.png",
      label: "Feature 6.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-2",
    },
    {
      src: "./images/icons/icon_52px_7.png",
      label: "Feature 7.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-3",
    },
    {
      src: "./images/icons/icon_52px_8.png",
      label: "Feature 8.",
      link: "#",
      descr: "Aenean lacinia bibendum nulla sed consectetur.",
      bgColor: "bg-4",
    },
  ]

  return (
    <section className="features">
      {featureItems.map((item, index) => (
        <div className={`featureItem ${item.bgColor}`} key={index}>
          <a href={item.link}>
            <img src={item.src} alt={item.label} className="hover" />
          </a>
          <span className="subtitle-2">{item.label}</span>
          <p>{item.descr}</p>
        </div>
      ))}
    </section>
  );
}
export default Features;