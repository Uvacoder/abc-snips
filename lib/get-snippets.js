import fsCB, { promises as fs } from "fs";
import path from "path";

const { resolve, join } = path;
const { existsSync } = fsCB;
export const getSnippets = async () => {
  const snippetPath = join(process.cwd(), "snippets");
  const snippetFiles = await fs.readdir(snippetPath);

  const snippetDefinitions = snippetFiles
    .map((file) => {
      const snip = require(`../snippets/${file}`).default;
      if (snip && snip.title && snip.code) {
        return {
          title: snip.title,
          code: snip.code,
          url: file.replace(/\.js$/, ""),
        };
      }
    })
    .filter((x) => x);
  return snippetDefinitions.sort(sortByCategory);
};

const sortByCategory = (a, b) => {
  const categoryOfA = a.title.split("|")[0];
  const categoryOfB = b.title.split("|")[0];
  if (categoryOfA < categoryOfB) {
    return -1;
  }
  if (categoryOfA > categoryOfB) {
    return 1;
  }
  return 0;
};
