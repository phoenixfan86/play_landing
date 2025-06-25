import "./Screenshot.css";
import type { ScreenShotItemsProps } from "../types/ScreenShotItemsProps";


const Screenshot = () => {
  const screenshotItems: ScreenShotItemsProps[] = [
    {
      link: "#",
      src: "./images/image_185px_1.jpg",
      label: "Screenshot 1"
    },
    {
      link: "#",
      src: "./images/image_185px_2.jpg",
      label: "Screenshot 2"
    },
    {
      link: "#",
      src: "./images/image_185px_3.jpg",
      label: "Screenshot 3"
    },
  ]

  return (
    <section className="screenshot">
      <div className="galleryBlock">
        <h3><span className="light">The best</span> Screenshots .</h3>
        <div className="galleryItem">
          {screenshotItems.map((item, index) => (
            <div className="itemImg" key={index}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="testBlock">
        <div className="testImg"><img src="./images/image_300px_1.png" alt="test" /></div>
        <div className="testDescr">
          <h3><span className="light">Litmus</span> Tested.</h3>
          <p>Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam.</p>
          <div className="testBtn">
            <a href="#">
              <span className="primaryBtn">See it here</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Screenshot;