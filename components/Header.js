import Link from "next/link";

const linkStyle = {
  color: "#AAA",
  float: "right",
  marginRight: 20
};

const headerStyle = {
  marginBottom: 50
};

const Header = () => (
  <div style={headerStyle}>
    <Link href="/contact">
      <a style={linkStyle}>Contact Us</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Header;
