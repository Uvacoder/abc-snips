import Link from "next/link";

export default () => {
  return (
    <>
      <Link href="/">
        <a className="link">Home</a>
      </Link>
      <style jsx>
        {`
          .link {
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
};
