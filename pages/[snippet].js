import { useRouter } from "next/router";

import Code from "components/code";

const Snippet = (props) => {
  const router = useRouter();
  let snippetName;
  let code;
  if (router.query.snippet) {
    const snippet = router.query.snippet.toLowerCase();
    const snipModule = require(`../snippets/${snippet}`).default;
    snippetName = snipModule.title;
    code = snipModule.code;
  }

  if (!code) {
    return <></>;
  }

  return (
    <>
      <Code code={code} name={snippetName} />
    </>
  );
};

export default Snippet;
