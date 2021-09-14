import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
import ShowComments from "../components/comments";
import AddComments from "../components/addComments";

const DetailQuote = () => {
  const params = useParams();
  const allQuote = useSelector((state) => state.allquotes);
  const currentQuote = allQuote.find((ele) => ele.id === params.quoteId);

  const comments = currentQuote.comments;
  const [Iscomments, setIscomments] = useState(null);
  const content = comments.map((ele) => <ShowComments comment={ele} />);

  const loadComments = () => {
    setIscomments(true);
  };

  return (
    <Fragment>
      <h1>{currentQuote.quote}</h1>
      <div>{currentQuote.Author}</div>
      {comments.length && <button onClick={loadComments}>load comments</button>}
      {!comments.length && <div>No Comments yet</div>}
      {Iscomments && content}
      <AddComments quote={currentQuote} />
    </Fragment>
  );
};

export default DetailQuote;
