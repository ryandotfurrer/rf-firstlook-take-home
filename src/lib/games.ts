// Import all game images
import fortniteImg from "@/assets/images/fortnite.jpg";
import minecraftImg from "@/assets/images/minecraft.jpg";
import codImg from "@/assets/images/call-of-duty.jpg";
import valorantImg from "@/assets/images/valorant.jpg";
import lolImg from "@/assets/images/league-of-legends.jpeg";
import apexImg from "@/assets/images/apex-legends.png";

export interface Game {
  id: string;
  title: string;
}

export const gameImages: Record<string, string> = {
  fortnite: fortniteImg.src,
  minecraft: minecraftImg.src,
  "call-of-duty": codImg.src,
  valorant: valorantImg.src,
  "league-of-legends": lolImg.src,
  "apex-legends": apexImg.src,
};

export const games: Game[] = [
  {
    id: "fortnite",
    title: "Fortnite",
  },
  {
    id: "minecraft",
    title: "Minecraft",
  },
  {
    id: "call-of-duty",
    title: "Call of Duty",
  },
  {
    id: "valorant",
    title: "Valorant",
  },
  {
    id: "league-of-legends",
    title: "League of Legends",
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
  },
];
