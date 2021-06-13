import NextHead from 'next/head'

const Head = (props) => {
  return (
    <>
      <NextHead>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'
          rel='stylesheet'
        />

        <title>Snips</title>
      </NextHead>
    </>
  )
}

export default Head
