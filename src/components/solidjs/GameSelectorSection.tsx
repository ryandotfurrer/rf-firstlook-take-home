import { createSignal, For } from "solid-js";
import { games } from "@/lib/games";
import GameSelector from "./GameSelector";
import Button from "./Button";

export default function GameSelectorSection() {
  const [selectedGames, setSelectedGames] = createSignal<Set<string>>(
    new Set(),
  );

  const toggleGame = (gameId: string) => {
    setSelectedGames((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(gameId)) {
        newSet.delete(gameId);
      } else {
        newSet.add(gameId);
      }
      return newSet;
    });
  };

  const handleNext = () => {
    const selectedGameTitles = games
      .filter((game) => selectedGames().has(game.id))
      .map((game) => game.title);

    console.log("Selected games:", selectedGameTitles);
  };

  const hasSelectedGames = () => selectedGames().size > 0;

  return (
    <section class="mx-auto max-w-screen-lg space-y-8 rounded-2xl border px-12 py-6">
      <h2 class="mb-[.5em] text-center">Which of these games do you like?</h2>
      <p class="text-muted-foreground text-center">
        Please select at least one game.
      </p>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <For each={games}>
          {(game) => (
            <GameSelector
              game={game}
              isSelected={selectedGames().has(game.id)}
              onToggle={toggleGame}
            />
          )}
        </For>
      </div>

      <div class="flex justify-center">
        <Button
          onClick={handleNext}
          disabled={!hasSelectedGames()}
          class={!hasSelectedGames() ? "" : ""}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
