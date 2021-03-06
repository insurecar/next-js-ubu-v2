import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="javascript, next, nextJS, react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <h1>NAVIGATION</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            background: coral;
            top: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          nav a {
            color: white;
            text-decoration: none;
          }

          main {
             {
              /* margin-top: 60px; */
            }
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
}
