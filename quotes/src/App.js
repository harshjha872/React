import { Fragment, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import ShowAllquotes from './allquotes';
// import Quote from './quote';

const App = () => {

  const [quotes,setQuoates] = useState([
    {
      quote: "This is the quote 1",
      comments:["very nice","excellent"]
    }
  ]);

  const content = quotes.map(ele => <ShowAllquotes quote={ele.quote} comments={ele.comments}/>);

  return (
    <Fragment>
    <Link to='/allquotes'>
     All Quotes
   </Link>
   <Route path='/allquotes'>
    {content}
   </Route>
    </Fragment>
   
  );
}

export default App;
