import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Bok Sports</span>
            </h1>
            <h2>Daily dose of Sports</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>2022 &copy; Tufan Butuner</p>
      </footer>
    </div>
  );
}
