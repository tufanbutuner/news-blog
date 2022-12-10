import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
}

export default function PostDetails({ post }) {
  const {
    title,
    slug,
    featuredImage,
    author,
    categories,
    postContent,
  } = post.fields;
  // console.log(post);
  return (
    <div className="banner">
      <Image
        src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width}
        height={featuredImage.fields.file.details.image.height}
      />
      <h2>{title}</h2>
      <div className="info">
        <div>{documentToReactComponents(postContent)}</div>
      </div>
    </div>
  );
}
