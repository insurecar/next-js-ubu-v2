import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default function Post() {
  const router = useRouter();
  console.log(router.query.postid);
  return (
    <MainLayout>
      <h1>Post: {router.query.postid}</h1>
    </MainLayout>
  );
}
