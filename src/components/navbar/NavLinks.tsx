import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;

  const linkStyles = `text-large font-light ${
    isActive ? "text-deepPurple0" : ""
  }`;

  return (
    <Link to={to} className={linkStyles}>
      {children}
    </Link>
  );
};

const NavLinks: React.FC = () => {
  const location = useLocation();

  return (
    <div className="hidden justify-center items-center gap-8 text-large font-light lg:flex md:flex sm:flex">
      <NavLink to="/" currentPath={location.pathname}>
        Home
      </NavLink>
      <NavLink to="/products" currentPath={location.pathname}>
        Products
      </NavLink>
      <NavLink to="/cart" currentPath={location.pathname}>
        Cart
      </NavLink>
    </div>
  );
};

export default NavLinks;
