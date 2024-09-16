import avatarSrc4 from "./ui/images/alan.png";
import avatarSrc2 from "./ui/images/frieren.png";
import avatarSrc3 from "./ui/images/harry.png";
import avatarSrc1 from "./ui/images/makima.png";

export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: 1,
    name: "Makima",
    rating: 2973,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "Frieren",
    rating: "kys",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Harrier Dubois",
    rating: "drunk",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Alan Wake",
    rating: 1892,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
