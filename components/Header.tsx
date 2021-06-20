import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav>
        <style jsx>{`
          a {
            @apply hover:text-blue-500;
          }

          .active {
            border-bottom: 1px solid;
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
