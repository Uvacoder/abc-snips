import { useRouter } from "next/router";

import Code from "components/code";

export default (props) => {
  const router = useRouter();
  let snippetName;
  let code;
  if (router.query.snippet) {
    snippetName = router.query.snippet;
    const snippet = router.query.snippet.toLowerCase();
    code = require(`../snippets/${snippet}`).default;
  }

  if (!code) {
    return <></>;
  }

  return (
    <>
      <h3 className="title">{snippetName}</h3>
      <Code code={code}></Code>
      <style>
        {`
          .title{
            text-transform:capitalize;
            }
        `}
      </style>
    </>
  );
};
