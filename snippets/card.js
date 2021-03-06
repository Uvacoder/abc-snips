const code = `
import cx from "classnames"

export default ({ children, className,...props }) => {
  const classNames = cx('card',className);
  return (
    <>
      <div  className={classNames}  {...props} >{children}</div>
      <style jsx>{\`
        .card {
          background: #fff;
          border: 2px solid rgba(12,12,13,0.1);
          border-radius: 4px;
        }
      \`}</style>
    </>
  );
};
`;

const snippet = {
  title: "React Component | Card ",
  code,
};

export default snippet;
