import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center relative z-10 items-center bg-black text-white p-5">
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
