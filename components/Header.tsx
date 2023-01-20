import Link from './ActiveLink'

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 px-4">
      <nav>
        <ul className="flex justify-center gap-8">
          {[
            {
              label: 'Home',
              href: '/',
            },
            {
              label: 'About',
              href: '/about/',
            },
          ].map(({ href, label }, i) => {
            return (
              <li key={i}>
                <Link
                  className="text-gray-500 inline-block hover:text-black pt-[1em] px-[0.1em] pb-[0.75em]"
                  activeClassName="text-black border-b-2 border-solid border-black"
                  href={href}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
