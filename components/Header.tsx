import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <header className="bg-gray-100 p-4">
      <nav>
        <ul className="flex justify-center gap-8">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
