import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex justify-center items-center gap-8 text-large">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
};

export default NavLinks;
