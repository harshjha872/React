import { Fragment } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <Fragment>
      <div className="w-full bg-gray-900 h-full flex flex-col text-yellow-500 p-4">
        <div className="text-yellow-500 bg-gray-800 font-bold rounded-lg pl-3 p-2 items-center flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <span className="pl-3">Categories</span>
        </div>
        <div className="text-white pt-3 pl-12">Echo And Alexa</div>
        <div className="text-white pt-3 pl-12">Kindle</div>
        <div className="text-white pt-3 pl-12">Books</div>
        <div className="text-white pt-3 pl-12">Electronics</div>
        <div className="text-white pt-3 pl-12">Home and garden</div>
        <div className="text-white pt-3 pl-12">Fashion</div>
        <div className="text-white pt-3 pl-12">Health and beauty</div>
        <div className="text-white pt-3 pl-12">Automotive</div>
        <div className="text-white pt-3 pl-12">Sport and tourism</div>
        <div className="text-white pt-3 pl-12">Games</div>
        <div className="text-white pt-3 pl-12">Film and Music</div>
        <div className="text-white pt-3 pl-12">Animals</div>
        <div className="text-white pt-3 pl-12">Hobby</div>
        <div className="text-white pt-3 pl-12 pb-3">Gift Cards</div>
        <div className="text-white hover:bg-gray-800 font-bold rounded-lg pl-3 p-2 pt-2 items-center flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="pl-3">Sell Product</span>
        </div>
        <Link
          to="/logout"
          className="text-white hover:bg-gray-800 font-bold rounded-lg pl-3 p-2 pt-2 items-center flex flex-row"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="pl-3">Logout</span>
        </Link>
      </div>
    </Fragment>
  );
};

export default Categories;
