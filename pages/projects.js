import { withRouter } from "next/router";
import Layout from "../components/MyLayout";
import Link from "next/link";

function getProjects() {
  return [
    { id: "vividseats", title: "Vivid Seats", image: "" },
    { id: "salesforce", title: "Salesforce", image: "" }
  ];
}

const ProjectSection = ({ project }) => (
  <li>
    <Link as={`/projects/${project.id}`} href={`/project?title=${project.id}`}>
      <a>{project.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 50px 0;
      }

      a {
        text-decoration: none;
      }
    `}</style>
  </li>
);

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <ul>
      {getProjects().map(project => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </ul>
    <style jsx>{`
      .markdown {
        font-family: "Open Sans";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
