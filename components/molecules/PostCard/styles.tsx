import Image from "./PostCard";
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
    margin-top: 10px;
    margin-bottom: 6px;
    color: #fff;
  }

  p {
    color: #f0a500;
    margin-top: 6px;
    font-size: 1.25rem;
  }
`;
PostCardStyle.displayName = "PostCardStyle";

export const BlogPostsList = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 30px;
`;
BlogPostsList.displayName = "BlogPostsList";

export const ContentInfo = styled.div`
  padding: 10px;
  margin: auto;

  img {
    border-radius: 25px;
  }
`;
ContentInfo.displayName = "ContentInfo";
