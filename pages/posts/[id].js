import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  <Layout>  
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
  </Layout>
}

export default async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  }
}

export default function getStaticPaths({ params }) {
  const postData = getPostData(params.id);
  
  return {
    props: {
      postData,
    },
  };

}





