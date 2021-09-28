import "./index.css";
import Navbar from "./components/navbar";
import { Fragment } from "react/cjs/react.production.min";
import ItemCard from "./components/ItemCard";
import ImageCard from "./components/image";
import Background from "./components/background";

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <ItemCard /> */}
      <Background />
    </Fragment>
  );
}

export default App;
