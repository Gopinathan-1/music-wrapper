---
name: EchoDNA
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bccbb9'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#869585'
  outline-variant: '#3d4a3d'
  surface-tint: '#53e076'
  primary: '#53e076'
  on-primary: '#003914'
  primary-container: '#1db954'
  on-primary-container: '#004118'
  inverse-primary: '#006e2d'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#ecb2ff'
  on-tertiary: '#520071'
  tertiary-container: '#d879ff'
  on-tertiary-container: '#5d0080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72fe8f'
  primary-fixed-dim: '#53e076'
  on-primary-fixed: '#002108'
  on-primary-fixed-variant: '#005320'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#f8d8ff'
  tertiary-fixed-dim: '#ecb2ff'
  on-tertiary-fixed: '#320047'
  on-tertiary-fixed-variant: '#74009f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  section-gap: 48px
  element-gap: 12px
---

## Brand & Style

This design system is built on the concept of **Data-Kineticism**—the idea that personal data is a living, breathing entity. The brand personality is unapologetically bold, futuristic, and cinematic, designed to make every user feel like the protagonist of their own musical odyssey. It targets a Gen Z demographic that values aesthetic curation and digital status.

The style is a fusion of **Glassmorphism** and **Vaporwave-Futurism**. It utilizes high-contrast interfaces where data is housed in translucent, frosted containers that appear to float over an atmospheric "aurora" of light. The emotional response is one of discovery and awe, transforming mundane listening statistics into a premium, hyper-personalized visual trophy.

## Colors

The palette is anchored in a "Deep Space" charcoal—near black but with enough depth to support complex shadow work. The primary **Neon Green** acts as a tether to the Spotify ecosystem, while the **Electric Blue** and **Hyper-Purple** introduce a cinematic, AI-driven aesthetic. 

Gradients are used aggressively to represent "Mood States." These are not static; they should feel like shifting gasses or liquid light. The neutral tones are strictly cool-toned to ensure the vibrant accents "pop" with maximum luminance.

## Typography

This design system utilizes a high-contrast typographic pairing. **Space Grotesk** is the voice of the machine: technical, geometric, and forward-looking. It is used for all "Data Reveals" and headings. For high-impact moments, negative letter spacing is applied to create a tight, editorial feel.

**Inter** provides the functional balance. It is used for body copy and descriptions to ensure maximum legibility against complex, blurred backgrounds. The "Label-Caps" style is specifically designed for metadata and small UI signifiers, utilizing Space Grotesk to maintain the futuristic character even at micro-scales.

## Layout & Spacing

The layout follows a **Fluid Cinematic** model. Content is organized in a centered column that prioritizes mobile shareability (9:16 aspect ratio considerations). On larger screens, the design system utilizes wide margins to keep the focus on the central "Glass" artifacts.

Spacing is generous to allow the "Aurora" glow effects and floating particles to breathe between elements. We use a 4px base grid, but layout-level spacing is intentionally "airy" to prevent the interface from feeling cramped or utilitarian. Elements should feel like they are floating in an abyss rather than being locked into a rigid grid.

## Elevation & Depth

Depth is conveyed through **Optical Refraction** rather than traditional shadows. 
1. **Base Layer:** The Deep Charcoal background with moving "Aurora" blobs (gradients with 80px+ blur).
2. **Particle Layer:** Subdued floating nodes that respond to gyroscope or cursor movement.
3. **Glass Layer:** This is the primary UI surface. It uses a 10% white fill with a 20px - 40px Backdrop Blur. A 1px semi-transparent white stroke (top-down gradient) defines the edges.
4. **Active Layer:** Elements that are currently "playing" or "analyzing" emit a soft outer glow (drop shadow with 0 offset, high spread, and primary color at 30% opacity).

## Shapes

The shape language is **"Architectural Softness."** We use a standard 0.5rem (8px) radius for smaller elements like inputs, but primary cards and containers use 1.5rem (24px) to create a premium, "held" feeling. 

Interactive elements like buttons use a hybrid approach: they are slightly more rounded than the cards they sit on to signify touchability. All geometric forms should feel intentional; circles are used strictly for profile avatars and "Pulse" animations to contrast against the rectangular glass containers.

## Components

### Buttons
Primary buttons are "Hyper-Glow" capsules. They feature a full gradient background (Plasma) with white text. Secondary buttons are "Ghost-Glass" with a 1px border and high backdrop blur. 

### Glass Cards
The signature component. These must have a `backdrop-filter: blur(20px)` and a subtle `linear-gradient` border. Content inside cards should be padded at 24px minimum.

### Audio-Reactive Visualizers
A custom component that renders real-time waveforms using the secondary and tertiary colors. These should be placed behind data points to "validate" the AI's analysis.

### DNA Chips
Small, capsule-shaped tags used for music genres or personality traits. These use a 20% opacity tint of the primary color with a solid 100% opacity text color for readability.

### Share Sheets
A specialized layout mode that strips away navigation and optimizes the visual hierarchy for Instagram/TikTok Stories, emphasizing the Display-XL typography and the user's Spotify Avatar.