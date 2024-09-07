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

type Crew = {
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
