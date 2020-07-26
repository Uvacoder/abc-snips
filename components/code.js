import Link from "next/link";

import Button from "components/button";
import Padding from "components/padding";
import Spacer from "components/spacer";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/ultramin";
import ToastService from "lib/toast";

export default ({ code }) => {
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
      <Padding all={2}>
        <Link href="/">
          <a href="">Home</a>
        </Link>
        <Spacer x={1} inline></Spacer>
        <Button onClick={handleCopyClick}>Copy</Button>
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
    </>
  );
};
