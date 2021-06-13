import { useRouter } from 'next/router'

import Code from 'components/code'

const Snippet = (props) => {
  const router = useRouter()
  let snippetName
  let code
  if (router.query.snippet) {
    snippetName = router.query.snippet
    const snippet = router.query.snippet.toLowerCase()
    code = require(`../snippets/${snippet}`).default
  }

  if (!code) {
    return <></>
  }

  return (
    <>
      <Code code={code} name={snippetName} />
    </>
  )
}

export default Snippet
