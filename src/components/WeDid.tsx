import type { WeDidProps } from "../types/WeDidProps";
import "./WeDid.css"

const WeDid = () => {

  const weDidItems: WeDidProps[] = [
    {
      src: "./images/icons/icon_36px_1.png",
      count: "3893",
      label: "Lines of code"
    },
    {
      src: "./images/icons/icon_36px_2.png",
      count: "281",
      label: "cups of coffee"
    },
    {
      src: "./images/icons/icon_36px_3.png",
      count: "534",
      label: "friendly Likes"
    },
    {
      src: "./images/icons/icon_36px_4.png",
      count: "277",
      label: "finished projects"
    },
  ]
  return (
    <section className="weDid">
      <div className="weDidBlock">
        {weDidItems.map((item, index) => (
          <div className="weDidItem" key={index}>
            <div className="weDidImg">
              <img src={item.src} alt={item.label} className="hover" />
            </div>
            <span className="count">{item.count}</span>
            <span className="subtitle">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WeDid;