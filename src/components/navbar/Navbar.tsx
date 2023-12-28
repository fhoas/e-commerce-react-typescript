import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between bg-primaryWhite text-primaryBlack items-center p-4 font-primary">
      <div className="text-heading">
        <Link to={"/"}>Favicon</Link>
      </div>
      <div>
        <NavLinks />
      </div>
      <div>
        <Link to={"/cart"}>
          <FaCartShopping size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
