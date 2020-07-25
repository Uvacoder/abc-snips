import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { MDXProvider } from "@mdx-js/react";

import Code from "components/code";

const components = {
  pre: (props) => <div {...props} />,
  code: Code,
};

export default (props) => {
  const router = useRouter();
  let snippetName;
  let Component;
  if (router.query.snippet) {
    snippetName = router.query.snippet;
    const snippet = router.query.snippet.toLowerCase();
    Component = dynamic(() => import(`../snippets/${snippet}.mdx`));
  }
  if (!Component) {
    return <></>;
  }

  return (
    <>
      <h3 className="title">{snippetName}</h3>
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>
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
