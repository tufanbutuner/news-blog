import Link from "next/link";

export default function PostCard({ post }) {
  const {
    title,
    slug,
    thumbnail,
    author,
    categories,
    postContent,
  } = post.fields;
  return (
    <div className="card">
      <div className="thumbnail"></div>
      <div className="content-info">
        <div className="info">
          <h2>{title}</h2>
          <p>By {author}</p>
          <span>{categories}</span>
          {/* <p>{postContent}</p> */}
          <div className="actions">
            <Link href={`/posts/${slug}`}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
