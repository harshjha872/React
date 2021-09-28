import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <Route path="/">
      <header className="w-full flex flex-row fixed bg-gray-900 items-center justify-between px-14 py-5 shadow border-b-2 border-gray-800">
        <div className="text-white flex flex-row">
          {/* <Link
            className="hover:text-gray-300 text-md px-5 font-light antialiased tracking-tighter font-monst"
            to="/"
          >
            HOME
          </Link>
          <Link
            className="hover:text-gray-300 text-md px-5 font-normal antialiased tracking-tighter font-monst"
            to="/addItem"
          >
            ADD
          </Link> */}

          <Link to="/add" className="hover:text-gray-200 px-4 inline">
            <svg
              className="inline"
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
          <Link to="/cart" className="hover:text-gray-200 px-4 inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
        </div>
        <div className="h-15 text-gray-50">
          <Link to="/">
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-shop-window"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
            </svg>
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-gray-200  text-gray-50 text-lg px-6 font-light antialiased tracking-tighter font-monst"
            to="/signup"
          >
            Signup
          </Link>
          <Link
            className="text-white hover:bg-yellow-600 text-lg px-6 py-3 rounded-lg shadow-lg font-light antialiased tracking-tighter bg-yellow-500 font-monst"
            to="/login"
          >
            Signin
          </Link>
        </div>
      </header>
    </Route>
  );
};

export default Navbar;
