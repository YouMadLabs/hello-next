import { withRouter } from "next/router";
import Layout from "../components/MyLayout";
import Link from "next/link";
import AB from "../images/alexis_bittar/AB_2.png";

function getProjects() {
  return [
    {
      id: "salesforce-cpq",
      title: "CPQ App | Salesforce",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "freelance",
      title: "Freelance Work",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "ca",
      title: "Project Management App | CA Technologies",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "salesforce-approvals",
      title: "Approvals App | Salesforce",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "rewards",
      title: "Corporate Activity Tracking + Rewards App",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    },
    {
      id: "savings",
      title: "Savings App (iOS + Android)",
      subtitle:
        "Lorem ipsum dolor sit amet, idque mollis consetetur at vis, eam at sale\
      atqui. Sapientem qualisque reprehendunt eu his, ne sit oratio accusam. In\
      has ocurreret vulputate, etiam sadipscing ut per, his ad regione singulis\
      scriptorem. Sit an erroribus adipiscing. No amet ridens pri, duo persecuti\
      adolescens no. 1",
      image: ""
    }
  ];
}

const gridStyle = {
  display: "grid",
  "grid-template-columns": "repeat(2, 1fr)",
  "grid-gap": "100px",
};

const ProjectSection = ({ project }) => (
  <div>
    <Link as={`/projects/${project.id}`} href={`/project?title=${project.id}`}>
      <a> {project.title} </a>
    </Link>
    <p>{project.subtitle}</p>
    <img src={AB}/>
  </div>
);

const Content = withRouter(props => (
  <div>
    <h1>{props.router.query.title}</h1>

    <div style={gridStyle}>
      {getProjects().map(project => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </div>
  </div>
));

const Page = props => (
  <Layout>
    <Content />
  </Layout>
);

export default Page;
