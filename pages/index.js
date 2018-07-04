import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My cool blog</h1>
    <ul>
      <PostLink id="hello" title="Hello N.js"/>
      <PostLink id="learning" title="Learning Hello N.js"/>
      <PostLink id="number" title="Number 3"/>
    </ul>
  </Layout>
)

export default Index
