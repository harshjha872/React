import { useState } from "react";
import { useDispatch } from "react-redux";
import { QuoteActions } from "../store/quoteStore";

const AddQuote = () => {
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const dispatch = useDispatch();

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (author && quote) {
      dispatch(
        QuoteActions.addQuote({
          Author: author,
          quote: quote,
          comments: [],
          id: "q3",
        })
      );
      setQuote("");
      setAuthor("");
    } else {
      setError("Invalid input");
    }
  };

  const quoteOnchangeHandler = (e) => {
    setQuote(e.target.value);
  };

  const authorOnchangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={onsubmitHandler}>
      <label> quote</label>
      <input type="text" onChange={quoteOnchangeHandler} value={quote} />
      <label> Author</label>
      <input type="text" onChange={authorOnchangeHandler} value={author} />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default AddQuote;
