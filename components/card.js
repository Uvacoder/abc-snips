import cx from "classnames";

const Card = ({ children, className, hover, ...props }) => {
  const classNames = cx("card", className, { hover });
  return (
    <>
      <div className={classNames} {...props}>
        {children}
      </div>
      <style jsx>
        {`
          .card {
            background: #fff;
            transition: background, color 0.25s linear;
          }

          .card.hover:hover {
            text-decoration: underline;
            text-underline-offset: 8px;
          }
        `}
      </style>
    </>
  );
};

export default Card;
