import { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import AddQuote from "./pages/addquote";
import ShowAllquotes from "./components/allquotes";
import { useSelector } from "react-redux";
import DetailQuote from "./pages/detailQuote";

const App = () => {
  const allQuotes = useSelector((state) => state.allquotes);

  const content = allQuotes.map((ele) => (
    <ShowAllquotes
      quote={ele.quote}
      comments={ele.comments}
      Author={ele.Author}
      id={ele.id}
    />
  ));

  return (
    <Fragment>
      <Link to="/allquotes">All Quotes</Link>
      <Link to="/addquotes">Add Quotes</Link>
      <Route path="/allquotes">{content}</Route>
      <Route path="/addquotes">
        <AddQuote />
      </Route>
      <Route path="/quote/:quoteId">
        <DetailQuote />
      </Route>
    </Fragment>
  );
};

export default App;
