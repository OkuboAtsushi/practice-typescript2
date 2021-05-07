import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  console.log(color);
  console.log(fontSize);
  return <p style={{ color, fontSize }}>テキストです</p>;
};
