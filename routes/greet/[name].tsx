import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div className={"flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"}>Hello {props.params.name}</div>;
}