This file is a list of the progress I made and how long I spent doing each one.

[GitHub Repo](https://github.com/ryandotfurrer/rf-firstlook-take-home)

[Live Site](https://rf-firstlook.netlify.app/)

## wip: initial commmit | 45 minutes

- [x] create new project with astro, solidjs, and tailwind css
- [x] setup file structure
- [x] install clsx and tailwind-merge
- [x] create css variables and base styles
- [x] create BaseLayout
- [x] create Moddetoggle component and enable light/dark/system theme modes
- [x] create basic start of project to get an idea of how I'd like to tackle it

## wip: continued setup | 5 minutes

- [x] create progress.md to keep track for Robert and Rene @ FirstLook
- [x] add prettier and prettier-tailwind plugin
  - this plugin will ensure that tailwind classes are sorted propeerly according to Tailwind's rules and so there are no specificity issues
- [x] deployed to Netlify

## wip: create rough draft | 30 minutes

- [x] decide what components are needed for project
- [x] add alias to tsconfig for better DX
- [x] create files
  - Section.astro
  - Button.tsx
  - Checkbox.tsx
  - GameSelector.tsx
  - GameSelectorSection.tsx
- [x] build out Button.tsx component

## wip: implement game selector functionality | 60 minutes

- [x] enhance Button.tsx with proper variants, sizes, and styling
- [x] create games.ts data file with game interface and sample data
- [x] implement GameSelector.tsx component with:
  - clickable game cards with gradient backgrounds
  - hover effects and selection states
  - built-in checkbox indicator
  - responsive design
- [x] build GameSelectorSection.tsx with:
  - state management for selected games using SolidJS signals
  - grid layout for game cards
  - Next button that's disabled until at least one game is selected
  - console logging of selected games for testing
- [x] update index.astro to use the new GameSelectorSection component
- [x] implement proper styling with Tailwind CSS classes

## wip: add game images and visual improvements | 25 minutes

- [x] source and add actual game images for all 6 games
  - fortnite.jpg, minecraft.jpg, call-of-duty.jpg, valorant.jpg, league-of-legends.jpeg, apex-legends.png
- [x] update games.ts to import and manage game images
  - removed gradient color backgrounds in favor of actual images
  - created gameImages object to map game IDs to image sources
- [x] enhance GameSelector.tsx component with:
  - actual game images as backgrounds instead of gradient colors
  - overlay gradient for better text legability
  - change aspect ratio (2/3 instead of 4/5) based on sourced images
  - updated checkbox styling with white background when selected for better contrast
- [x] improved visual hierarchy and accessibility with proper image alt tags
