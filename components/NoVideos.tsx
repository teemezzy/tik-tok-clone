import type { NextComponentType, NextPageContext } from "next";

interface Props {
  text: "No Post Found"
}

const NoVideos: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
 <div></div>
  )
}

export default NoVideos