import { createSignal, createEffect, onMount } from "solid-js";
import { cn } from "../../lib/utils";

const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ModeToggle() {
  const [theme, setTheme] = createSignal<"light" | "dark" | "system">("light");

  // Initialize theme on mount
  onMount(() => {
    const pref = getThemePreference();
    setTheme(pref === "dark" ? "dark" : "light");
  });

  // Apply theme changes
  createEffect(() => {
    const t = theme();
    const isDark =
      t === "dark" ||
      (t === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme", t);
    }
  });

  // Listen for system theme changes if "system" is selected
  onMount(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme() === "system") {
        document.documentElement.classList.toggle("dark", media.matches);
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  });

  return (
    <div class="bg-muted border rounded-full flex gap-x-4 w-fit py-1 px-2">
      <button
        aria-label="Light mode"
        onClick={() => setTheme("light")}
        class={cn(theme() === "light" ? "active" : "")}
      >
        ☀️
      </button>
      <button
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
        class={cn(theme() === "dark" ? "active" : "")}
      >
        🌙
      </button>
      <button
        aria-label="System mode"
        onClick={() => setTheme("system")}
        class={cn(theme() === "system" ? "active" : "")}
      >
        🖥️
      </button>
    </div>
  );
}
