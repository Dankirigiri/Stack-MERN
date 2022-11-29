import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-zinc-700 flex justify-between px-10">
      <Link to="/">
        <h1 className="text-white">Products Page</h1>
      </Link>
      <ul className="flex gap-x-2">
        <li>
          <Link to="/" className="bg-slate-200 px-2 py-1">Home</Link>
        </li>
        <li>
          <Link to="/productform" className="bg-purple-400 px-2 py-1">Create Product</Link>
        </li>
      </ul>
    </div>
  );
};
