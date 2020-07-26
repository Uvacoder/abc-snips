import Link from "next/link";

const links = [
  {
    name: "Button",
    url: "button",
  },
  {
    name: "Input",
    url: "input",
  },
  {
    name: "Card",
    url: "card",
  },
  {
    name: "Padding",
    url: "padding",
  },
  {
    name: "Spacer",
    url: "spacer",
  },
];

export default (props) => {
  return (
    <>
      <h1 align="center">Snips</h1>
      <p align="center">
        React Component snippets
        <br />
        <br />
        <Link href="about">
          <a>About</a>
        </Link>
      </p>
      <hr />
      <ul>
        {links.map((linkItem, index) => {
          return (
            <li key={index}>
              <Link href={linkItem.url}>
                <a>{linkItem.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
