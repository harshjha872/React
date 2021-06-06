import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentsDetail from './commentDetail';
import AgreeOrReject from './AgreeOrReject';

function timeFunction() {
  return `Yesterday at 3:00 PM`
}


const App = () => {
  return (
    <div className="ui container comments">
      <AgreeOrReject >
        <CommentsDetail Auth="sam" imageOfuser={faker.image.avatar()} time="Today at 6:00 AM" comment="great bro" />
      </AgreeOrReject>

      <AgreeOrReject >
        <CommentsDetail Auth="simons" imageOfuser={faker.image.avatar()} time={timeFunction()} comment="Nice!!" />
      </AgreeOrReject>

      <AgreeOrReject >
        <CommentsDetail Auth="raj" imageOfuser={faker.image.avatar()} time="2 days ago" comment="Awesome" />
      </AgreeOrReject>

      <AgreeOrReject >
        <div>
          <h4>Warning!</h4>
          Are you sure you wanna quit?
        </div>
      </AgreeOrReject>
    </div>
  );
}
ReactDOM.render(<App />, document.querySelector('#root'));