# Nabeel Zaidi — Urdu Typography & Graphic Design

A minimal, editorial-style portfolio focused on **Urdu typography, Nastaliq composition, and graphic design**.

This portfolio was created to showcase my understanding of Urdu script, Nastaliq typography, visual composition, and poster design.

> **"Because a good verse deserves better than a default font."**

---

## ✦ About the Project

This is a personal portfolio website for **Nabeel Zaidi**, an emerging designer interested in Urdu typography and graphic design.

The portfolio focuses on giving Urdu poetry a strong visual identity while keeping the typography readable, authentic, and respectful of the Nastaliq script.

The work showcased on the website consists of **self-initiated poster designs rather than client projects**. :chatgpt-content-reference{index="1"}

---

## ✦ Design Philosophy

The portfolio follows three main principles:

### 1. Nastaliq set as Nastaliq

Urdu is presented using a proper Nastaliq typeface rather than treating it as ordinary Arabic/Naskh text.

The design preserves the natural diagonal flow and joining behavior of the script.

### 2. Breaks that follow the verse

Poetry is intentionally broken into lines according to its rhythm and reading flow rather than simply allowing the container width to determine line breaks.

### 3. Legibility over decoration

The artwork supports the poetry rather than competing with it.

Typography, contrast, spacing, and scale are designed so that the **verse remains the primary visual element**.

These principles are directly reflected in the portfolio's "My approach to Urdu type" section. :chatgpt-content-reference{index="2"}

---

## ✦ Features

- Responsive single-page portfolio
- Urdu / Nastaliq typography
- RTL Urdu text support
- Editorial-inspired visual design
- Responsive poster gallery
- Interactive full-screen poster viewer
- Previous / Next poster navigation
- Keyboard navigation
- Smooth animations
- Reduced-motion accessibility support
- Responsive layout for desktop and mobile
- Contact section with email and phone
- Self-contained HTML implementation

The site includes dedicated sections for:

- **Work**
- **Approach**
- **About**
- **Contact** :chatgpt-content-reference{index="3"}

---

## ✦ Tech Stack

This project intentionally keeps the implementation lightweight.

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript

### Typography

- Noto Nastaliq Urdu
- Cormorant Garamond

### External Resource

Google Fonts is used for typography:

- `Noto Nastaliq Urdu`
- `Cormorant Garamond`

The site defines dedicated Urdu and Latin typography stacks to preserve the visual distinction between Urdu poetry and English interface text. :chatgpt-content-reference{index="4"}

---

## ✦ Visual Design

The visual identity uses a restrained editorial palette:

| Token | Color |
|---|---|
| Ivory | `#F6EFE0` |
| Wine | `#4B1526` |
| Soft Wine | `#6A4752` |
| Gold | `#8A6D32` |
| Light Gold | `#D2AE66` |

The overall aesthetic combines:

- Traditional Urdu literary culture
- Editorial typography
- Minimal graphic design
- Contemporary web layout
- Warm paper-like tones
- Burgundy / wine accents
- Muted gold details

The design tokens and typography variables are defined directly in the stylesheet. :chatgpt-content-reference{index="5"}

---

## ✦ Interactive Poster Gallery

The Work section presents the poster designs in a responsive gallery.

On desktop, the gallery switches to a two-column layout, while smaller screens use a single-column presentation.

Clicking a poster opens an interactive viewer where users can:

- View the poster at a larger size
- Read the associated Urdu verse
- View the poet's name
- Navigate to previous / next work
- Close the viewer
- Navigate using keyboard arrow keys

The poster viewer is implemented using the native HTML `<dialog>` element and vanilla JavaScript. :chatgpt-content-reference{index="6"}

---

## ✦ Responsive Design

The layout is designed around responsive breakpoints rather than a fixed desktop-only composition.

The hero section transitions into a multi-column layout on larger screens, while the gallery adapts between one and two columns depending on viewport width. :chatgpt-content-reference{index="7"}

The project also respects the user's system preference for reduced motion.

```css
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{
    animation:none!important;
    transition:none!important
  }

  html{
    scroll-behavior:auto
  }
}
