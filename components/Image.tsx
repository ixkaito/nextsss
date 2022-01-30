import NextImage, { ImageProps } from 'next/image'

const customLoader = ({ src }: { src: string }) => {
  return src
}

const Image = (props: ImageProps) => {
  return <NextImage {...props} loader={customLoader} />
}

export default Image
