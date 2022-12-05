import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Link to = '/'>
      <h1 class="font-extrabold text-3xl m-4">Soundtionary 🎶</h1>
    </Link>
  );
};

export default Navbar;
