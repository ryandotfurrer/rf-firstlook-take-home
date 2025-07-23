import { cn } from "@/lib/utils";
import type { Game } from "@/lib/games";
import { gameImages } from "@/lib/games";

interface GameSelectorProps {
  game: Game;
  isSelected: boolean;
  onToggle: (gameId: string) => void;
}

export default function GameSelector(props: GameSelectorProps) {
  const handleClick = () => {
    props.onToggle(props.game.id);
  };

  return (
    <div
      class={cn(
        "relative aspect-[2/3] cursor-pointer overflow-hidden rounded-lg saturate-50 transition-all duration-200 hover:scale-105 hover:saturate-100",
        props.isSelected && "ring-primary ring-4 saturate-100",
      )}
      onClick={handleClick}
    >
      {/* Game Image */}
      <img
        src={gameImages[props.game.id]}
        alt={props.game.title}
        class="h-full w-full object-cover"
      />

      {/* Overlay gradient for better text legebility of Game Title */}
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Game Title */}
      <div class="absolute right-0 bottom-0 left-0 p-3">
        <h3 class="text-sm font-semibold text-white drop-shadow-lg">
          {props.game.title}
        </h3>
      </div>

      {/* Checkbox */}
      <div
        class={cn(
          "absolute right-3 bottom-3 flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all duration-200",
          props.isSelected
            ? "border-white bg-white"
            : "border-white/40 bg-white/20 backdrop-blur-sm",
        )}
      >
        {props.isSelected ? (
          <svg
            class="size-4 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : null}
      </div>
    </div>
  );
}
