import Link from "next/link";

const linkStyle = {
  color: "#AAA",
  "text-align": "center",
  "font-family": "Open Sans",
  width: "100%"
};

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <footer>
    <Link href="/contact">
      <a style={linkStyle}>Contact Us</a>
    </Link>
    <p style={linkStyle}>© {getYear()} You Mad Labs Inc.</p>
    <style jsx>
      {`
        a {
          display: inline-block;
          text-align: center;
        }
        footer {
          position: absolute;
          width: 100%;
          bottom: 0;
        }
      `}
    </style>
  </footer>
);

export default Footer;
