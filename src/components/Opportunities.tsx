import "./Opportunities.css";
import type { OppItemsProps } from "../types/OppItemsProps";



const Opportunities = () => {
  const oppItems: OppItemsProps[] = [
    {
      src: "./images/image_124px_1.png",
      link: "#",
      firstLabel: "Template",
      secondLabel: " Builder .",
      descr: "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "./images/image_124px_2.png",
      link: "#",
      firstLabel: "Change",
      secondLabel: "Colours .",
      descr: "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "./images/image_124px_3.png",
      link: "#",
      firstLabel: "Export",
      secondLabel: "Layout",
      descr: "Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ]

  return (
    <section className="opportunities">
      <div className="oppBlock">
        {oppItems.map((item, index) => (
          <div className="items" key={index}>
            <a href={item.link}>
              <img src={item.src} alt={item.firstLabel} />
            </a>
            <h4><span className="light">{item.firstLabel}</span>{item.secondLabel}</h4>
            <p>{item.descr}</p>
            <div className="itemsBtn">
              <a href={item.link}>
                <span className="primaryBtn">View more</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="messageBlock">
        <h3 className="h3"><span className="light">Important</span> Message .</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        <span className="subtitle">Egestas Dolor Venenatis Amet</span>
      </div>
    </section>
  );
}
export default Opportunities;