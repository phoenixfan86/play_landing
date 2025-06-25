import "./Header.css";
import type { NavItemsProps } from "../types/NavItemsProps";

const Header = () => {
  const navItems: NavItemsProps[] = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "Features",
      link: "#",
    },
  ]

  return (
    <header>
      <nav className="nav">
        <ul className="navMenu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="navLink white">{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="logo">
          <a href="#">
            <img src="./images/logo.png" alt="Logo" className="hover" />
          </a>
        </div>
        <div className="none">
          <a href="#" className="navLink primary">Get it Now</a>
        </div>
      </nav>
      <div className="promote">
        <h2 className="white"><span className="light">Promote your</span> New App !</h2>
        <span className="subtitle">new software in the app store</span>
        <p className="paragraph white">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum
          id ligula porta felis euismod semper.</p>
        <div className="promoteBtn">
          <a href="#">
            <span className="primaryBtn">
              Buy Now
            </span>
          </a>
        </div>
      </div>
      <img src="./images/image_600px_1.png" alt="PromoteImg" />
    </header>
  );
}
export default Header;