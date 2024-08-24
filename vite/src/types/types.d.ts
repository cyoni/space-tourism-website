import data from "../../data.json";

type ImageUrls = {
  png: string;
  webp: string;
};

type Destination = {
  name: string;
  images: ImageUrls;
  description: string;
  distance: string;
  travel: string;
};

type CrewMember = {
  name: string;
  images: ImageUrls;
  role: string;
  bio: string;
};

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

type SpaceTravelData = {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
};

type DataType = keyof typeof data;
type PageType<T> = T extends keyof typeof data ? (typeof data[T][number]) : never;

//type PageType<T> = typeof data[T]
