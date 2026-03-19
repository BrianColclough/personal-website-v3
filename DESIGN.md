# Design System Document

## 1. Overview & Creative North Star
### The Creative North Star: "The Analog Tech Enthusiast"
This design system is a high-energy collision between rigorous engineering logic and the raw, tactile spontaneity of a personal scrapbook. It moves away from the sterile, "perfect" digital interfaces of the modern web, opting instead for a **Neo-Brutalist Editorial** aesthetic. 

The system breaks the traditional "template" look through **intentional asymmetry**, where elements appear to be physically placed or "stuck" onto the canvas. By utilizing "broken grids," overlapping layers, and grainy textures, we create a signature visual identity that feels both premium and human. It is designed to feel as vibrant as a runner’s high and as structured as a clean codebase.

---

## 2. Colors & Textures
The palette is built on high-contrast vibrance, utilizing deep purples, neon greens, and striking pinks to categorize content "moods."

### The "No-Line" Rule for Sectioning
While individual components may use hand-drawn borders, **global sectioning must never use 1px solid horizontal lines.** Boundaries are defined by transitions in background tokens. Use `surface-container-low` for secondary sections sitting on a `surface` background to create a clear but borderless structural change.

### Surface Hierarchy & Nesting
Depth is achieved through the physical stacking of tones.
- **Layer 0 (Base):** `surface` (#f5f7f9).
- **Layer 1 (Sub-sectioning):** `surface-container` (#e5e9eb).
- **Layer 2 (Interactive Cards):** `surface-container-lowest` (#ffffff).
- **Layer 3 (Modals/Overlays):** `surface-bright` with 80% opacity and a 12px backdrop blur.

### The "Glass & Gradient" Rule
To add "soul," primary CTAs and hero containers should utilize subtle gradients transitioning from `primary` (#702ddc) to `primary-container` (#b28cff). For a premium feel, floating navigation or "sticker" overlays should use **Glassmorphism**: semi-transparent surfaces with a `backdrop-blur` to allow the "grainy" background texture to bleed through.

### Grainy Textures
Apply a subtle, monochromatic noise overlay (3-5% opacity) across the `background` and `primary` surfaces. This eliminates the "flatness" of digital HEX codes and mimics high-end print photography.

---

## 3. Typography
The typography system relies on the tension between a bold, expressive serif-hybrid and a technical, high-legibility sans-serif.

*   **Display & Headlines (Epilogue):** Used for maximalist impact. Headlines should feel "loud" and command the space. This represents the "Photography" and "Creative" side of the brand.
*   **Body Text (Manrope):** A clean, geometric sans-serif that ensures long-form engineering posts remain readable. 
*   **Labels & Metadata (Space Grotesk):** This monospace-leaning font represents the "Code" and "Engineering" aspect. It is the voice of the data.

**Typography Hierarchy:**
- **Display LG:** 3.5rem (Epilogue) - Reserved for Hero Titles.
- **Headline MD:** 1.75rem (Epilogue) - Section headers.
- **Title LG:** 1.375rem (Manrope) - Card titles.
- **Label MD:** 0.75rem (Space Grotesk) - "Sticker" labels and tags.

---

## 4. Elevation & Depth
In this system, depth is not a shadow; it is an **offset.**

### The Layering Principle
Rather than using standard Material shadows, stack surfaces. Place a `surface-container-lowest` card atop a `surface-container-low` background. This creates a "soft lift" that feels architectural rather than digital.

### Offset "Sticker" Shadows
When a component needs to "pop," use a **hard offset shadow** rather than a blur. 
- **Offset:** 4px 4px or 8px 8px.
- **Color:** `on-primary-fixed-variant` at 20% opacity.
- **Effect:** This mimics the look of a physical sticker or a layered scrap of paper.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use the "Ghost Border": the `outline-variant` token at **15% opacity**. Never use 100% opaque borders for structural containers.

---

## 5. Components

### Buttons: The "Tape" Style
- **Primary:** `primary` background with `on-primary` text. Features a `secondary` offset shadow (4px).
- **Secondary:** `surface-container-highest` with a hand-drawn `outline` (Ghost Border).
- **Interactions:** On hover, the button should "sink" into its shadow (translate Y: 2px, X: 2px).

### "Sticker" Labels (Tags)
- **Visuals:** Use `secondary_container` (Green) for Fitness, `tertiary_container` (Pink) for Photography, and `primary_container` (Purple) for Tech.
- **Style:** Small `label-md` text, slightly rotated (+/- 2 degrees) to break the grid.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Card Styling:** Cards use `surface-container-lowest`. They must feature a hand-drawn, variable-width border (simulated via SVG or masking) to maintain the "quirky" engineering notebook feel. 
- **Spacing:** Use `spacing-8` (2.75rem) between cards to let the asymmetrical layout breathe.

### Inputs & Fields
- **State:** Active inputs use a `primary` ghost border (20% opacity) and a slight `primary_container` glow.
- **Error:** Use `error` text with a `error_container` background "sticker" to highlight the message.

---

## 6. Do's and Don'ts

### Do:
- **Do** lean into asymmetry. If three cards are in a row, offset the middle card by `spacing-2` vertically.
- **Do** use "hand-drawn" icons and arrows to point to key CTAs.
- **Do** use color "Moods" to theme entire pages (e.g., a "Running" blog post should use a `secondary` (green) accent theme).

### Don't:
- **Don't** use standard 90-degree perfectly aligned grids for image galleries. Overlap photos like a physical mood board.
- **Don't** use heavy, black drop shadows. They kill the vibrant, energetic "high-contrast" vibe.
- **Don't** use 1px solid black borders. If a border is needed, give it a slight "wiggle" or use the Ghost Border method.
- **Don't** use default system fonts. The interplay between Epilogue and Manrope is non-negotiable for the brand’s signature feel.