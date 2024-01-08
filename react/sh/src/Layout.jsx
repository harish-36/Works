import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul class="flex flex-auto gap-8">
          <li class="bg-yellow-800">
            <Link to="/">Home</Link>
          </li>
          <li class="bg-green-800">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li class="bg-red-800">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;