import PostCard from "../components/molecules/PostCard";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Recipes({ posts }) {
  console.log(posts);
  return (
    <div className="recipe-list">
      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
}
