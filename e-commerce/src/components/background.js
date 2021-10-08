import { Fragment } from "react/cjs/react.production.min";
import Categories from "./categories";
import Mainsection from "./mainsection";

const Background = () => {
  return (
    <Fragment>
      <div className="bg-gray-100 h-auto flex flex-row w-full">
        <div className="w-1/4">
          <Categories />
        </div>
        <div className="flex flex-col h-full w-3/4">
          <Mainsection />
        </div>
      </div>
    </Fragment>
  );
};

export default Background;
