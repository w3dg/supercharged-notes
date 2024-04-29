import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 py-3 items-center">
      <span>
        <Link href={"/"}>
          <h2 className="text-lg">SuperchargedTodos</h2>
        </Link>
      </span>
      <nav>
        <ul className="flex gap-4">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
