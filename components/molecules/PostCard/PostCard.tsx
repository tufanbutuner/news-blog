import { ContentInfo, PostCardStyle } from "./styles";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {
  const { title, slug, thumbnail, author, categories } = post.fields;
  return (
    <PostCardStyle>
      <ContentInfo>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />

        <h3>{title}</h3>
        <p>{author}</p>
        <span>{categories}</span>
        <div className="actions">
          <Link href={`/posts/${slug}`}>Read more</Link>
        </div>
      </ContentInfo>
    </PostCardStyle>
  );
}
