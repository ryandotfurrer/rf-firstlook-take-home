export interface Game {
  id: string;
  title: string;
  color: string;
}

export const games: Game[] = [
  {
    id: "fortnite",
    title: "Fortnite",
    color: "bg-gradient-to-br from-blue-500 to-purple-600"
  },
  {
    id: "minecraft",
    title: "Minecraft",
    color: "bg-gradient-to-br from-green-500 to-teal-600"
  },
  {
    id: "call-of-duty",
    title: "Call of Duty",
    color: "bg-gradient-to-br from-red-500 to-pink-600"
  },
  {
    id: "valorant",
    title: "Valorant",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600"
  },
  {
    id: "league-of-legends",
    title: "League of Legends",
    color: "bg-gradient-to-br from-indigo-500 to-blue-600"
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    color: "bg-gradient-to-br from-purple-500 to-pink-600"
  }
];
