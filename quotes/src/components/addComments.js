import { Fragment, useState } from "react";
import { QuoteActions } from "../store/quoteStore";
import { useDispatch } from "react-redux";

const AddComments = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null);
  const [OnAddCommentClicked, setOnAddCommentClicked] = useState(false);

  const enterComment = () => {
    setOnAddCommentClicked(true);
  };

  const inputCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      QuoteActions.addComment({
        comment: comment,
        id: props.quote.id,
      })
    );
    setComment("");
  };

  return (
    <Fragment>
      <button onClick={enterComment}>Add comment</button>
      {OnAddCommentClicked && (
        <form onSubmit={OnSubmitHandler}>
          <input onChange={inputCommentHandler} type="text" value={comment} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Fragment>
  );
};

export default AddComments;
