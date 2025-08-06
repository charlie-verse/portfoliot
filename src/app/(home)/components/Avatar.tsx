import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='https://www.linkedin.com/in/kushal-c-99028b250/' target='_blank'>
      <Picture
        src='/space.jpeg'
        fallback="A"
        size='6'
        radius='full'
      />
    </Link>
  )
}

export default Avatar