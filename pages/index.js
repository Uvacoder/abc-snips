import React from "react";
import Link from "next/link";
import Spacer from "components/spacer";
import Card from "components/card";
import Padding from "components/padding";
import { getSnippets } from "lib/get-snippets";

const Home = ({ links, ...props }) => {
  return (
    <>
      <section className="container-boundaries">
        <h1>Snips</h1>
        <p>
          Code Snippets
          <br />
          <br />
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </section>

      <section className="container-boundaries">
        <ul className="snippet-links">
          {links.map((linkItem, index) => {
            return (
              <React.Fragment key={index}>
                <li>
                  <Link href={linkItem.url}>
                    <a>
                      <Card hover>
                        <div className="flex align-center">
                          {linkItem.title}
                        </div>
                      </Card>
                      <Spacer y={2} />
                    </a>
                  </Link>
                </li>
                <Spacer y={2} />
              </React.Fragment>
            );
          })}
        </ul>
      </section>

      <style jsx>
        {`
          .snippet-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0px;
            margin: 0px;
          }

          .snippet-links li {
            list-style-type: none;
            width: 100%;
          }

          .snippet-links a {
            width: 100%;
            text-decoration: none;
            font-size: 16px;
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const snippetCollection = await getSnippets();
  return {
    props: {
      links: snippetCollection,
    },
  };
}

export default Home;
