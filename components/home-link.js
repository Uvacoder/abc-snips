import Link from 'next/link'

const HomeLink = () => {
  return (
    <>
      <Link href='/'>
        <a className='link'>Home</a>
      </Link>
      <style jsx>
        {`
          .link {
            font-size: 16px;
          }
        `}
      </style>
    </>
  )
}

export default HomeLink
