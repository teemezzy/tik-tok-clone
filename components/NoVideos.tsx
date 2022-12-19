import type { NextComponentType, NextPageContext } from "next";

interface Props {
  text: string
}

const NoVideos = ({ text }: Props) => {
  return (
    <div>No Post Here!</div>
  )
}

export default NoVideos