import Image from "./PostCard";
import Link from "next/dist/client/link";
import styled from "styled-components";

export const PostCardStyle = styled.div`
  background: #082032;
  border-radius: 25px;
  width: 100%;

  display: grid;
  grid-template-rows: 50% 50%;

  h3,
  p {
    margin-left: 4px;
  }

  h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 6px;
    color: #fff;
  }

  p {
    color: #f0a500;
    margin-top: 6px;
    font-size: 1.25rem;
  }

  span {
    background: yellow;
    border-radius: 10px;
    padding: 6px;
    font-size: 0.8rem;
    margin-left: 4px;
  }
`;
PostCardStyle.displayName = "PostCardStyle";

export const ImageStyle = styled.img`
  margin: auto;
  object-fit: cover;
  border-radius: 25px;
  max-height: 260px;
  width: calc(100% - 0px);
`;
ImageStyle.displayName = "ImageStyle";

export const BlogPostsList = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 30px;
`;
BlogPostsList.displayName = "BlogPostsList";

export const ContentInfo = styled.div`
  padding: 10px;
`;
ContentInfo.displayName = "ContentInfo";

export const ReadMore = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 8px;
`;
ReadMore.displayName = "ReadMore";
