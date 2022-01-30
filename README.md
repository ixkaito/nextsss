<div align="center">
  <p><img width="480" alt="NextSSS Logo" src="https://user-images.githubusercontent.com/5457539/151701924-cbdf9ff8-3e9b-4e5c-b036-43e1ec0bbbef.png"></p>
</div>

NextSSS is a [Next.js](https://nextjs.org/) starter template especially for static site including full setup for TypeScript, Tailwind CSS, Google Analytics, Next SEO, active link component, etc.

## How to Use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the template:

```bash
npx create-next-app --example https://github.com/ixkaito/nextsss
```
or
```bash
yarn create next-app --example https://github.com/ixkaito/nextsss
```

### Google Analytics

Edit `GA_TRACKING_ID` in `/lib/gtag.ts`.

Example:

```ts
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'
```

### Active `className` on a link

Example:

```ts
import Link from '../components/ActiveLink'

const Nav: React.FC = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about/">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Nav
```

This will dynamically add the `active` class name to each links. You can also change the `activeClassName` like this:

```ts
import Link from '../components/ActiveLink'

const Nav: React.FC = () => {
  return (
    <nav>
      <Link href="/" activeClassName="current">
        <a>Home</a>
      </Link>
      <Link href="/about/" activeClassName="current">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Nav
```

### Image Component

You can use the same syntax of [next/image](https://nextjs.org/docs/api-reference/next/image) with static export.

Example:

```ts
import Image from '../components/Image'
import example1 from '../public/example1.png'

const Home: React.FC = () => {
  return (
    <Image src={example} alt="Example 1" />
    <Image src="/example2.png" width={600} height={400} alt="Example 2" />
  )
}

export default Home
```

Note: If you want to deploy the project to Vercel, remove the custom loader from `next.config.js` and `components/Image.tsx`.

`next.config.js`

```diff
 ...
-  images: {
-    loader: 'custom',
-    path: '/',
-  },
 ...
```

`components/Image.tsx`

```diff
 ...
-const customLoader = ({ src }: { src: string }) => {
-  return src
-}

 const Image = (props: ImageProps) => {
-  return <NextImage {...props} loader={customLoader} />
+  return <NextImage {...props} />
 }
 ...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## License

MIT
