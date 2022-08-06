import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
  activeClassName?: string
} & LinkProps

const ActiveLink: React.FC<Props> = ({
  children,
  className,
  activeClassName = 'active',
  ...props
}) => {
  const { asPath } = useRouter()

  // pages/index.tsx or pages/about.tsx will be matched via props.href
  // pages/[slug].js will be matched via props.as
  return (
    <Link
      {...props}
      className={clsx(
        className,
        (asPath === props.href || asPath === props.as) && activeClassName
      )}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
