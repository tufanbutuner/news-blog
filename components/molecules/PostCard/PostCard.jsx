import Image from "next/image";
import Link from "next/link";
import { PostCardStyle } from "./styles";

export default function PostCard({ post }) {
  const { title, slug, thumbnail, author, categories } = post.fields;
  return (
    <PostCardStyle>
      <div className="thumbnail">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content-info">
        <div className="info">
          <h2>{title}</h2>
          <p>By {author}</p>
          <span>{categories}</span>
          <div className="actions">
            <Link href={`/posts/${slug}`}>Read more</Link>
          </div>
        </div>
      </div>
    </PostCardStyle>
  );
}
