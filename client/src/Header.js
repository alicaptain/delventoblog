import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav2>
        <Link to="/login">login</Link>
        <Link to="/getin">get in</Link>
      </nav2>
      <Link to="/" className="logo">
        ali del vento
      </Link>
      <nav1>
        <Link to="/login">login</Link>
        <Link to="/getin">get in</Link>
      </nav1>
    </header>
  );
}
