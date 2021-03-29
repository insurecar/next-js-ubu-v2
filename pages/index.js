import Link from "next/link";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Next Title Index Hello</title>
        <meta name="keywords" content="javascript, next, nextJS, react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
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
