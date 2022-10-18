import { Link } from "react-router-dom";
import { navLinks } from "services";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 sm:px-16">
      <Link to="/">
        <img src="/img/Logo.png" className="w-9" />
      </Link>
      <ul className="flex items-center justify-center text-primary-200 text-base font-normal gap-8">
        {navLinks.map(({ path, name, Icon }) => (
          <li
            key={path}
            className="flex items-center justify-center gap-2 hover:cursor-pointer"
          >
            <Icon size={20} />
            <Link to={path} className="text-sm tracking-wide hover:underline">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
