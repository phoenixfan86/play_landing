import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="callToAction">
      <div className="callToBlock">
        <h2><span className="light">a Call to Action</span> Banner .</h2>
        <span className="subtitle">new software in the app store</span>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum
          id ligula porta felis euismod semper.</p>
      </div>
      <div className="callToBtn">
        <a href="">
          <span className="primaryBtn">Checkit Out</span>
        </a>
      </div>
    </section>
  );
}
export default CallToAction;