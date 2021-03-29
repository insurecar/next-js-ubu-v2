import Link from "next/link";

export default function Index() {
  return (
    <>
      <h1>Next.JS</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>Lorem ipsum</p>
    </>
  );
}
