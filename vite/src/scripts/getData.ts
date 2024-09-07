import data from "../../data.json";

type DataType = typeof data;
type Pages = keyof DataType;

export function getPage(key: Pages) {
  const page = data[key];

  if (!page) {
    throw `page ${key} does not exist`;
  }

  return page;
}

export function getPageData<T extends "destinations" | "crew" | "technology">(
  key: T,
  pageName: string
) {
  if (!pageName) return null;

  const type = data[key];

  if (!type) {
    throw `page ${key} does not exist`;
  }

  pageName = pageName.toLowerCase();

  const page = type.find((page) => page.name.toLowerCase() === pageName);
  return page;
}
