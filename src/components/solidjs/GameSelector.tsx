import { cn } from "@/lib/utils";
import type { Game } from "@/lib/games";

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
        "relative aspect-[4/5] cursor-pointer rounded-lg saturate-50 transition-all duration-200 hover:scale-105 hover:saturate-100",
        props.game.color,
        props.isSelected && "ring-primary ring-4 saturate-100",
      )}
      onClick={handleClick}
    >
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
            ? "bg-primary border-primary"
            : "border-white/40 bg-white/20 backdrop-blur-sm",
        )}
      >
        {props.isSelected ? (
          <svg
            class="text-background size-4"
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
