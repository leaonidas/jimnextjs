import DetailPost from 'components/global/DetailPost';
import glob from 'glob';
const { loadPost } = require('loader.ts');

function Obras(props) {
  const { post } = props;
  return <DetailPost post={post} />;
}

export const getStaticPaths = () => {
  const obras = glob.sync('./md/obras/*.md');
  const slugs = obras.map(file => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid obras path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map(slug => `/obras/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const post = await loadPost(`obras/${params.slug}.md`);
  return { props: { post } };
};

export default Obras;
