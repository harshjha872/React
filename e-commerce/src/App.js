import "./index.css";
import Navbar from "./components/navbar";
import { Fragment } from "react/cjs/react.production.min";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemCard />
    </Fragment>
  );
}

export default App;
