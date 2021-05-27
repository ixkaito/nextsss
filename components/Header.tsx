import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4">
      <nav>
        <style jsx>{`
          .active {
            border-bottom: 1px solid #000;
          }
        `}</style>
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

export default Header
