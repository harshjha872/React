import { Fragment } from "react/cjs/react.production.min";
import image from "../Images/alejandro-luengo--c1-ZT-hLzM-unsplash.jpg";

const ImageCard = () => {
  return (
    <Fragment>
      <img
        src={image}
        alt="background Img"
        className="w-full h-screen object-center object-cover"
      />
    </Fragment>
  );
};

export default ImageCard;
