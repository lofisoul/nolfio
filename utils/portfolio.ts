export interface PortfolioItem {
  title: string;
  url: string;
  id: string;
  subtitle: string;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Vibe Tribe",
    url: "https://dreamy-curie-33497a.netlify.app/",
    id: "reduxAudio",
    subtitle: `Soundcloud app that generates a random playlist based on a user's favorites.`,
    tags: ["react", "redux", "styled-components", "Soundcloud API"],
  },
  {
    title: "Jamie XX Album Cover",
    url: "https://codepen.io/lofisoul/pen/wOZGab",
    id: "jamiexxImg",
    subtitle: "JS Canvas design of In Rainbows album cover",
    tags: ["canvas", "javascript"],
  },
  {
    title: "The Shining Elevator",
    url: "https://codepen.io/lofisoul/pen/GRvEzXB",
    id: "shiningImg",
    subtitle:
      "Spooky Code pen challenge. The blood usually gets off on the second floor.",
    tags: ["CSS"],
  },
  {
    title: "Diamond Kings Background",
    url: "https://codepen.io/lofisoul/pen/JzVXGr",
    id: "tartabullImg",
    subtitle:
      "Randomly generated pattern on canvs, inspired by a Donruss baseball card.",
    tags: ["canvas", "javascript"],
  },
  {
    title: "Mood Mash",
    url: "https://mood-mash.herokuapp.com/",
    id: "moodmashImg",
    subtitle: "Group project that builds Spotify playlists based on mood.",
    tags: ["node", "express", "Spotify API", "Bands In Town API", "SCSS"],
  },
  {
    title: "AWS Upload Utility",
    url: "https://github.com/lofisoul/aws-upload-utility",
    id: "githubWork",
    subtitle: "Simple task runner for deploying code to AWS S3 buckets.",
    tags: ["node", "aws"],
  },
  {
    title: "NBA Trivia",
    url: "https://nba-trivia.herokuapp.com/",
    id: "NBAImg",
    subtitle: "Simple NBA trivia app.",
    tags: ["javascript", "Giphy API"],
  },
];
