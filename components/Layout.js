import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Tufan's</span>
              <span>MMA BLOG</span>
            </h1>
            <h2>Next.js is pretty cool</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>&copy; 2021 MMA Blog</p>
      </footer>
    </div>
  );
}
