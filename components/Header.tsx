import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 px-4">
      <nav>
        <style jsx>{`
          a {
            @apply text-gray-500 inline-block hover:text-black;
            padding: 1em 0.1em 0.75em;
          }

          .active {
            @apply text-black border-b-2 border-solid border-black;
          }
        `}</style>
        <ul className="flex justify-center gap-8">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about/">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
