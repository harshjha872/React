import { Fragment } from "react";
import { Link } from "react-router-dom";

const ShowAllquotes = (props) => {
  const link = `/quote/${props.id}`;
  return (
    <Fragment>
      <br />
      <span>{props.quote}</span>
      <Link to={link}>clickme</Link>
      <p>{props.Author}</p>
    </Fragment>
  );
};

export default ShowAllquotes;
