import data from "../../data.json";
import { PageType } from "../types/types";
type DataType = typeof data;
type PageTvvvvype = DataType[Pages] extends Array<infer T>
  ? T | undefined
  : never;
type Pages = keyof DataType;

export function getPage(key: Pages) {
  const page = data[key];

  if (!page) {
    throw `page ${key} does not exist`;
  }

  return page;
}

export function getPageData<T extends keyof typeof data>(
  key: T,
  pageName: string
): PageType<T> | undefined {
  const type = data[key];

  if (!type) {
    throw `page ${key} does not exist`;
  }

  pageName = pageName.toLowerCase();

  const page = type.find((page) => page.name.toLowerCase() === pageName);
  return page;
}
