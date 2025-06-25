import "./Advantages.css"
import type { AdvantageItemsProps } from "../types/AdvantageItemsProps";

const Advantages = () => {
  const advanItems: AdvantageItemsProps[] = [
    {
      src: "./images/icons/icon_31px_1.png",
      link: "#",
      firstLabel: "Pro",
      secondLabel: "Quality",
      descr: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      subtitle: "Egestas Dolor",
    },
    {
      src: "./images/icons/icon_31px_2.png",
      link: "#",
      firstLabel: "Low",
      secondLabel: "Prices",
      descr: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      subtitle: "Egestas Dolor",
    },
    {
      src: "./images/icons/icon_31px_3.png",
      link: "#",
      firstLabel: "Modern",
      secondLabel: "Style",
      descr: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      subtitle: "Egestas Dolor",
    },
    {
      src: "./images/icons/icon_31px_4.png",
      link: "#",
      firstLabel: "24/7",
      secondLabel: "Support",
      descr: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
      subtitle: "Egestas Dolor",
    },
  ]

  return (
    <section className="advantage">
      {advanItems.map((item, index) => (
        <div className="advanWrapper">
          <div className="advanItem" key={index}>
            <div className="advanTitle">
              <img src={item.src} alt={item.subtitle} />
              <span className="label-1">
                <span className="light">{item.firstLabel} </span>
                {item.secondLabel}
              </span>
            </div>
            <p>{item.descr}</p>
            <span className="subtitle">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Advantages;