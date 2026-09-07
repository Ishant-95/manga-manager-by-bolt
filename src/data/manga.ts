export type MangaStatus = "Ongoing" | "Completed" | "Hiatus";

export type MangaCategory =
  | "All"
  | "Trending"
  | "Popular"
  | "Completed"
  | "Ongoing";

export type CoverGradient =
  | "cover-moss"
  | "cover-cobalt"
  | "cover-moon"
  | "cover-ember"
  | "cover-coral"
  | "cover-ink";

export interface Manga {
  id: number;
  title: string;
  cover: string;
  secondaryCover: string;
  tertiaryCover: string;
  coverGradient: CoverGradient;
  rear1Gradient: CoverGradient;
  rear2Gradient: CoverGradient;
  genres: string[];
  status: MangaStatus;
  rating: number;
  chapters: number;
  categories: MangaCategory[];
}

export const mangaList: Manga[] = [
  {
    id: 1,
    title: "Iron Orchard",
    cover:
      "https://images.pexels.com/photos/34418430/pexels-photo-34418430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/34622355/pexels-photo-34622355.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/29433729/pexels-photo-29433729.png?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-moss",
    rear1Gradient: "cover-coral",
    rear2Gradient: "cover-ink",
    genres: ["Action", "Dark Fantasy"],
    status: "Ongoing",
    rating: 4.7,
    chapters: 142,
    categories: ["Trending", "Popular", "Ongoing"],
  },
  {
    id: 2,
    title: "Salt & Static",
    cover:
      "https://images.pexels.com/photos/31265562/pexels-photo-31265562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/20584069/pexels-photo-20584069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108553/pexels-photo-8108553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-cobalt",
    rear1Gradient: "cover-moss",
    rear2Gradient: "cover-moon",
    genres: ["Sci-Fi", "Drama"],
    status: "Ongoing",
    rating: 4.5,
    chapters: 67,
    categories: ["Trending", "Ongoing"],
  },
  {
    id: 3,
    title: "Nocturne Draft",
    cover:
      "https://images.pexels.com/photos/31403466/pexels-photo-31403466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/21316136/pexels-photo-21316136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108305/pexels-photo-8108305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-ink",
    rear1Gradient: "cover-ember",
    rear2Gradient: "cover-cobalt",
    genres: ["Mystery", "Supernatural"],
    status: "Completed",
    rating: 4.9,
    chapters: 210,
    categories: ["Popular", "Completed"],
  },
  {
    id: 4,
    title: "Paper Coyote",
    cover:
      "https://images.pexels.com/photos/17800015/pexels-photo-17800015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/8671511/pexels-photo-8671511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108429/pexels-photo-8108429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-ember",
    rear1Gradient: "cover-ink",
    rear2Gradient: "cover-coral",
    genres: ["Adventure", "Comedy"],
    status: "Ongoing",
    rating: 4.2,
    chapters: 34,
    categories: ["Trending", "Ongoing"],
  },
  {
    id: 5,
    title: "Low Tide Choir",
    cover:
      "https://images.pexels.com/photos/37112720/pexels-photo-37112720.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/17589611/pexels-photo-17589611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8107856/pexels-photo-8107856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-coral",
    rear1Gradient: "cover-moon",
    rear2Gradient: "cover-ember",
    genres: ["Slice of Life", "Music"],
    status: "Hiatus",
    rating: 4.3,
    chapters: 88,
    categories: ["Popular"],
  },
  {
    id: 6,
    title: "Second Rain",
    cover:
      "https://images.pexels.com/photos/37267973/pexels-photo-37267973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/2505314/pexels-photo-2505314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108415/pexels-photo-8108415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-moon",
    rear1Gradient: "cover-cobalt",
    rear2Gradient: "cover-moss",
    genres: ["Romance", "Drama"],
    status: "Ongoing",
    rating: 4.6,
    chapters: 156,
    categories: ["Trending", "Popular", "Ongoing"],
  },
  {
    id: 7,
    title: "Amber Circuit",
    cover:
      "https://images.pexels.com/photos/29355063/pexels-photo-29355063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/17938034/pexels-photo-17938034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108356/pexels-photo-8108356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-cobalt",
    rear1Gradient: "cover-moss",
    rear2Gradient: "cover-ink",
    genres: ["Cyberpunk", "Action"],
    status: "Ongoing",
    rating: 4.4,
    chapters: 19,
    categories: ["Trending", "Ongoing"],
  },
  {
    id: 8,
    title: "Marrow Season",
    cover:
      "https://images.pexels.com/photos/38961347/pexels-photo-38961347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/14991299/pexels-photo-14991299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8107897/pexels-photo-8107897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-ink",
    rear1Gradient: "cover-ember",
    rear2Gradient: "cover-coral",
    genres: ["Horror", "Mystery"],
    status: "Completed",
    rating: 4.8,
    chapters: 301,
    categories: ["Popular", "Completed"],
  },
  {
    id: 9,
    title: "Velvet Threshold",
    cover:
      "https://images.pexels.com/photos/36946507/pexels-photo-36946507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/29666773/pexels-photo-29666773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108560/pexels-photo-8108560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-ember",
    rear1Gradient: "cover-coral",
    rear2Gradient: "cover-moon",
    genres: ["Fantasy", "Adventure"],
    status: "Ongoing",
    rating: 4.5,
    chapters: 73,
    categories: ["Trending", "Ongoing"],
  },
  {
    id: 10,
    title: "Hollow Bloom",
    cover:
      "https://images.pexels.com/photos/39060864/pexels-photo-39060864.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/14697730/pexels-photo-14697730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8107952/pexels-photo-8107952.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-coral",
    rear1Gradient: "cover-ink",
    rear2Gradient: "cover-moss",
    genres: ["Supernatural", "Romance"],
    status: "Ongoing",
    rating: 4.1,
    chapters: 45,
    categories: ["Ongoing"],
  },
  {
    id: 11,
    title: "Crimson Ledger",
    cover:
      "https://images.pexels.com/photos/19231449/pexels-photo-19231449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/35964821/pexels-photo-35964821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8107857/pexels-photo-8107857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-ember",
    rear1Gradient: "cover-moon",
    rear2Gradient: "cover-cobalt",
    genres: ["Thriller", "Drama"],
    status: "Completed",
    rating: 4.7,
    chapters: 178,
    categories: ["Popular", "Completed"],
  },
  {
    id: 12,
    title: "Static Garden",
    cover:
      "https://images.pexels.com/photos/32700040/pexels-photo-32700040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    secondaryCover:
      "https://images.pexels.com/photos/33681521/pexels-photo-33681521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    tertiaryCover:
      "https://images.pexels.com/photos/8108406/pexels-photo-8108406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    coverGradient: "cover-moss",
    rear1Gradient: "cover-cobalt",
    rear2Gradient: "cover-ink",
    genres: ["Slice of Life", "Comedy"],
    status: "Ongoing",
    rating: 4.3,
    chapters: 52,
    categories: ["Trending", "Ongoing"],
  },
];

export const categories: MangaCategory[] = [
  "All",
  "Trending",
  "Popular",
  "Completed",
  "Ongoing",
];
