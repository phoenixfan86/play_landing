import "./Responsive.css"

const Responsive = () => {
  return (
    <section className="responsive">
      <div className="responseBlock">
        <div className="responseInfo">
          <h3><span className="light">100% </span>Responsive .</h3>
          <p>Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.</p>
          <div className="responsiveBtn">
            <a href="#">
              <span className="primaryBtn">Visit Website</span>
            </a>
          </div>
        </div>
        <div className="responseImg">
          <img src="/public/images/image_300px_2.png" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Responsive;