import OmeletteImage from "../assets/images/image-omelette.png";

const Header = () => {
  return (
    <>
      <img
        className="custom-border-radius mt-4"
        src={OmeletteImage}
        alt="Omelette"
        title="Omelette"
      />
      <h1 className="pt-3">Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </>
  );
};

export default Header;
