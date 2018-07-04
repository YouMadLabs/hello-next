import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My cool blog</h1>
    <ul>
      <PostLink title="Hello N.js"/>
      <PostLink title="Learning Hello N.js"/>
      <PostLink title="Number 3"/>
    </ul>
  </Layout>
)

export default Index
