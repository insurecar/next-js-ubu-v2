import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  console.log(router.query.postid);
  return (
    <>
      <h1>Post: {router.query.postid}</h1>
    </>
  );
}
