import "./Footer.css";
import type { FooterLinkProps } from "../types/FooterLinkProps";

const Footer = () => {
  const footerLinks: FooterLinkProps[] = [
    {
      link: "#",
      label: "Website",
    },
    {
      link: "#",
      label: "Features",
    },
    {
      link: "#",
      label: "Appstore",
    },
    {
      link: "#",
      label: "Unsubscribe",
    },
  ]

  return (
    <footer>
      <div className="footerBlock">
        <div className="footerInfo">
          <div className="footerLogo">
            <a href="#">
              <img src="./images/footer_logo.png" alt="Logo" />
            </a>
          </div>
          <p>Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna.</p>
        </div>
        <div className="footerBody">
          <nav className="footerMenu">
            <span>Info</span>
            <ul className="footerMenuItem">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="contact">
            <span>Contact</span>
            <p>300 Boylstone AVE,
              Seattle WA 98102
              888 234 567 8900</p>
            <a href="mailto:info@play.com">info@play.com</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright DynamicXX 2016 - All Rights Reserved</p>
        <div className="footerIcon">
          <div className="icomimg">
            <img src="/public/images/icons/social_icon_19px_1.png" alt="socialIcon2" />
          </div>
          <div className="icomimg">
            <img src="/public/images/icons/social_icon_19px_2.png" alt="socialIcon3" />
          </div>
          <div className="icomimg">
            <img src="/public/images/icons/social_icon_19px_3.png" alt="socialIcon4" />
          </div>
          <div className="icomimg">
            <img src="/public/images/icons/social_icon_19px_4.png" alt="socialIcon5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;