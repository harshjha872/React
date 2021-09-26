import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <Route path="/">
      <header className="w-screen flex bg-gray-100 items-center justify-between px-14 py-5 shadow-md">
        {/* <div className="text-blue-600 text-2xl">Links</div> */}
        <div className="text-gray-600">
          <Link
            className="hover:text-gray-800 text-lg px-5 font-light antialiased tracking-tighter font-monst"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-800 text-lg px-5 font-normal antialiased tracking-tighter font-monst"
            to="/addItem"
          >
            Add
          </Link>
          <Link
            className="hover:text-gray-800 text-lg px-5 font-light antialiased tracking-tighter font-monst"
            to="/cart"
          >
            Cart
          </Link>
        </div>
        <div className="h-15 text-gray-800">
          <img
            src="https://img.icons8.com/windows/32/000000/shop.png"
            alt="logo"
          />
        </div>
        <div>
          <Link
            className="hover:text-gray-800 text-gray-600 text-lg px-6 font-light antialiased tracking-tighter font-monst"
            to="/cart"
          >
            Signup
          </Link>
          <Link
            className="hover:text-gray-800 text-gray-600 text-lg px-6 font-light antialiased tracking-tighter font-monst"
            to="/cart"
          >
            Signin
          </Link>
        </div>
      </header>
    </Route>
  );
};

export default Navbar;
