import { MainLayout } from "../../components/MainLayout";
import Router from "next/router";

export default function About() {
  return (
    <MainLayout title="About Page">
      <h1>About page</h1>

      <button onClick={() => Router.push("/")}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go back to Posts</button>
    </MainLayout>
  );
}
