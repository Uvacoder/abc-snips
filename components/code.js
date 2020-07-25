import Link from "next/link";

import Padding from "components/padding";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/ultramin";

export default ({ children, className }) => {
  const language = className.replace(/language-/, "");
  return (
    <>
      <Padding all={2}>
        <Link href="/">
          <a href="">Home</a>
        </Link>
        <Highlight
          {...defaultProps}
          theme={theme}
          code={children}
          language={language}
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
