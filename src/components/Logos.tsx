import "./Logos.css";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logocBlock">
        <h3><span className="light">Some Clients </span>Logos .</h3>
        <p>Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper.</p>
        <div className="logosGallery">
          <div className="logosImg">
            <img src="/public/images/clients_logo_120px_1.png" alt="Logo" />
          </div>
          <div className="logosImg">
            <img src="/public/images/clients_logo_120px_2.png" alt="Logo" />
          </div>
          <div className="logosImg">
            <img src="/public/images/clients_logo_120px_3.png" alt="Logo" />
          </div>
          <div className="logosImg">
            <img src="/public/images/clients_logo_120px_4.png" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Logos;