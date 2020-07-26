import Link from "next/link";

import Button from "components/button";
import Padding from "components/padding";
import Spacer from "components/spacer";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/ultramin";
import ToastService from "lib/toast";

export default ({ code, name }) => {
  function handleCopyClick() {
    copyToClipboard(code);
    ToastService.success("Copied to Clipboard");
    return;
  }

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  return (
    <>
      <r-grid columns="3">
        <r-cell></r-cell>
        <r-cell>
          <h2 className="title" align="center">
            {name}
          </h2>
          <Padding all={2}>
            <div className="flex align-end justify-between">
              <Link href="/">
                <a className="link-button" href="">
                  Home
                </a>
              </Link>
              <Spacer x={1} inline></Spacer>
              <Button onClick={handleCopyClick}>Copy</Button>
            </div>
            <Highlight
              {...defaultProps}
              theme={theme}
              code={code}
              language="javascript"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={className}
                  style={{ ...style, borderRadius: "4px", padding: "10px" }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </Padding>
        </r-cell>
        <r-cell></r-cell>
      </r-grid>
      <style jsx>
        {`
          .link-button {
            width: auto;
            font-size: 16px;
          }

          .title {
            text-transform: capitalize;
          }
        `}
      </style>
    </>
  );
};
