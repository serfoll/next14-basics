/** @format */
import Link from "next/link";
import Links from "./links/Link";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
