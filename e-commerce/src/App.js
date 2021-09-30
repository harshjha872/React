import "./index.css";
import Navbar from "./components/navbar";
import { Fragment } from "react/cjs/react.production.min";
import Background from "./components/background";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Background />
    </Fragment>
  );
}

export default App;
