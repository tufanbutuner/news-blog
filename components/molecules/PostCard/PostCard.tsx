import { ContentInfo, ImageStyle, PostCardStyle, ReadMore } from "./styles";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {
  const { title, slug, thumbnail, author, categories } = post.fields;
  return (
    <PostCardStyle>
      <ContentInfo>
        <ImageStyle
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />

        <h3>{title}</h3>
        <p>{author}</p>
        <div className="tag-list">
          {categories.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span>{categories}</span>
        <ReadMore>
          <Link href={`/posts/${slug}`}>Read more</Link>
        </ReadMore>
      </ContentInfo>
    </PostCardStyle>
  );
}
