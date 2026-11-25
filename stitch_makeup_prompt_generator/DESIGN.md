---
name: Luminous Editorial Cosmetics
colors:
  surface: '#fff8f6'
  surface-dim: '#edd5ce'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ed'
  surface-container: '#ffe9e3'
  surface-container-high: '#fbe3dc'
  surface-container-highest: '#f5ddd7'
  on-surface: '#251915'
  on-surface-variant: '#514440'
  inverse-surface: '#3b2d29'
  inverse-on-surface: '#ffede8'
  outline: '#83746f'
  outline-variant: '#d5c3bd'
  surface-tint: '#7c5547'
  primary: '#7c5547'
  on-primary: '#ffffff'
  primary-container: '#d4a392'
  on-primary-container: '#5c392c'
  inverse-primary: '#eebba9'
  secondary: '#745b26'
  on-secondary: '#ffffff'
  secondary-container: '#ffdb9a'
  on-secondary-container: '#795f2a'
  tertiary: '#73584e'
  on-tertiary: '#ffffff'
  tertiary-container: '#c8a79b'
  on-tertiary-container: '#543c33'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#eebba9'
  on-primary-fixed: '#2f1409'
  on-primary-fixed-variant: '#623e31'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e4c283'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5a4310'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#e2bfb2'
  on-tertiary-fixed: '#2a170f'
  on-tertiary-fixed-variant: '#5a4138'
  background: '#fff8f6'
  on-background: '#251915'
  surface-variant: '#f5ddd7'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-sm: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an intimate, sensorial, and effortlessly polished beauty experience. It marries modern editorial refinement with tactile warmth—balancing the unhurried elegance of prestige luxury beauty houses with the clean, dewy accessibility of modern direct-to-consumer skincare and makeup. 

The aesthetic is characterized by an ethereal interplay of editorial white space, organic warmth, delicate micro-borders, and tactile cream surfaces. It creates an elevated sanctuary that feels reassuring, gentle, and decadent. Interactions are fluid, featherlight, and deliberate, evoking the sensory pleasure of sweeping an emulsion across the skin.

## Colors

The palette establishes an organic luxury tone through tinted foundational neutrals and warm blush-infused accents:

- **Canvas Foundation**: The overall background rests on `#FAF7F5` (warm whipped cream), avoiding sterile pure whites.
- **Card Containers**: Raised surfaces, product tiles, and modals use `#FFFFFF` to provide clean separation from the cream canvas.
- **Structural Lines & Micro-Borders**: Subdued division lines use `#EFE8E2` to structure layouts without visual clutter.
- **Typography & Structural Contrast**: Primary text is anchored by `#2B1E1A` (deep roasted espresso), providing high-contrast legibility with greater warmth than harsh black.
- **Primary & Accent Tones**: `#D4A392` (warm sculpted rose) acts as the primary interactive tone, supported by `#E8C5B8` (soft petal blush) for tinted badges, hover states, and gentle washes.
- **Champagne Highlights**: `#E5C384` and `#D4AF37` provide radiant champagne gold accents reserved for star ratings, curated highlights, VIP badges, and subtle callouts.

## Typography

Typography pairs high-fashion editorial presence with modern digital clarity:

- **Display & Headings**: Built on **Playfair Display**. Headings use regular or medium weights with generous line heights to preserve editorial pacing. Letter-spacing is gently tightened on display scales to create typographic density.
- **Body & Interface Labels**: Set in **Plus Jakarta Sans**. Its rounded geometric curves offer high legibility across small sizes without feeling sterile or technical.
- **Labels & Microcopy**: Rendered in uppercase with tracked spacing (`0.06em` to `0.08em`) to lend an atelier-inspired tag aesthetic to product shades, categories, and ingredients.

## Layout & Spacing

The spatial architecture prioritizes generous breathing room and calculated asymmetry reminiscent of editorial lookbooks:

- **Grid Structure**: A 12-column responsive fluid grid on desktop (`>1024px`) with `1.5rem` gutters and outer canvas margins of `3rem`. Downscales to an 8-column layout on tablet (`768px-1023px`) with `1.5rem` gutters and `2rem` margins, and a 4-column layout on mobile (`<768px`) with `1rem` gutters and `1.25rem` margins.
- **Component Cadence**: Use `space-xs` (4px) and `space-sm` (8px) for tightly coupled metadata (e.g., shade dot and name). Use `space-md` (16px) for intra-component padding, `space-lg` (24px) for card body padding, and `space-xl` (40px) for layout stack separations.
- **Editorial White Space**: Hero showcases and product spotlight modules embrace deliberate negative space, often utilizing offset 2-to-3 column spans rather than edge-to-edge content.

## Elevation & Depth

Visual hierarchy uses warm, diffuse illumination rather than abrupt drop shadows:

- **Tonal Layering**: Depth is achieved primarily by placing crisp pure white (`#FFFFFF`) cards and floating sheets over the warm whipped cream canvas (`#FAF7F5`).
- **Micro-Borders**: Surfaces use a 1px delicate outline (`#EFE8E2`), giving each container structured definition without harsh cutoffs.
- **Soft Diffusion Shadows**: Floating elements (such as cart drawers, quick-add flyouts, and active cards) leverage an ultra-diffused, warm shadow tinted with roasted espresso tones:
  - *Resting Card*: `0 2px 8px -2px rgba(43, 30, 26, 0.04), 0 1px 4px -1px rgba(43, 30, 26, 0.02)`
  - *Floating Dialog / Hovered Product*: `0 16px 32px -8px rgba(43, 30, 26, 0.08), 0 4px 12px -2px rgba(43, 30, 26, 0.03)`
- **Glass Accents**: Sticky navigation bars and floating shade pickers use a translucent base (`rgba(250, 247, 245, 0.85)`) coupled with a `16px` backdrop blur for a frosted, dewy finish.

## Shapes

The design system incorporates intentional 12px rounded geometry (`roundedness: 2`), reflecting the sleek, sculpted curves of beauty packaging (such as soft-touch compacts and cylindrical lip oils):

- **Core Elements**: Standard cards, text fields, dialogue sheets, and toast notifications carry a uniform `12px` (`0.75rem`) border radius.
- **Pill Form Factors**: Interactive pills, shade-swatch chips, and quick-add actions scale to fully rounded pill ends (`9999px`) to emphasize touch-friendliness and organic ergonomics.

## Components

### Buttons
- **Primary**: Solid deep espresso (`#2B1E1A`) with cream typography (`#FAF7F5`), 12px radius, and subtle hover transition to a warm rose-espresso (`#3D2A25`). Height is 48px with generous horizontal padding (`1.5rem`).
- **Secondary / Soft**: Delicate blush background (`#E8C5B8` at 40% opacity) with `#2B1E1A` text and a 1px border in `#D4A392`.
- **Tertiary / Ghost**: Transparent base, `#2B1E1A` text with an underline offset of 4px that animates smoothly on hover.

### Product & Editorial Cards
- Constructed with `#FFFFFF` background, 12px corner radius, 1px `#EFE8E2` border, and low-intensity ambient diffusion shadow.
- Photography within cards uses a muted cream underlay with an `aspect-ratio: 4/5` or `1/1`, maintaining clean edge alignment with `space-md` internal padding.

### Chips & Swatches
- **Category Chips**: 32px pill-shaped buttons with 1px `#EFE8E2` borders on `#FAF7F5`. When active, fills with `#2B1E1A` and inverted text.
- **Color Swatches**: 24px circular discs wrapped in a 1px border. Selected swatches show a 2px offset ring in champagne gold (`#D4AF37`).

### Input Fields & Controls
- **Inputs**: 48px height, 12px corner radius, crisp `#FFFFFF` fill, and `#EFE8E2` micro-border. Focus states smoothly transition border color to `#D4A392` with an ambient blush outer glow (`0 0 0 3px rgba(212, 163, 146, 0.2)`).
- **Checkboxes & Radios**: Custom 18px rounded controls styled with `#EFE8E2` outlines; active state fills with `#2B1E1A` housing a crisp white check or center pip.

### Shade Selectors & Dewy Sliders
- Dedicated interactive elements for finish (matte, dewy, radiant) featuring fluid horizontal scroll wrappers and haptic pill feedback.