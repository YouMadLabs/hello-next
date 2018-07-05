import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  padding: 20
};

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
    <style jsx global>{`
      body {
        background: #333;
        background-size: cover;
      }
      h1,
      a,
      p {
        font-family: "Open Sans";
        color: white;
        text-align: center;
      }
      a {
        color: #aaa;
      }
      a:hover {
        opacity: 0.6;
      }
      ul {
        margin: 0 0 0 0;
      }
    `}</style>
  </div>
);

export default Layout;
