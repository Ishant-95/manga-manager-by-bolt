# Manga Browse — Interactive Drawer Card Concept

## 1. Core Idea

The Browse section uses a **physical drawer/file-folder metaphor** instead of a normal card hover animation.

Each manga item contains a small **drawer-like container** with four thumbnail cards stored inside it.

When the user is not interacting, the cards are compressed inside the container.

When the user moves the cursor upward over the manga item, the drawer opens outward and the cards progressively pop up **one behind another**.

The important point is:

> The cards do **not** simply slide vertically upward.

They should look as if they are being **pulled outward/upward from a drawer**, with depth and separation between each card.

---

# 2. The Drawer Container

The drawer/container is an important part of the visual. It should not look like a plain rectangular CSS box.

It should look like a **small physical storage tray or document drawer** in which the manga thumbnails are kept.

### Closed appearance

The container has:

- A solid bottom/base.
- Two side walls.
- A visible front lip.
- Rounded corners.
- A slightly raised border/frame.
- Subtle inner shadow.
- A small amount of depth.
- The cards partially hidden behind the front lip.
- Two fixed attachment/pivot points near the bottom corners.

Conceptually:

```text
             CARDS STORED INSIDE
        ┌─────────────────────────┐
        │    ┌───────────────┐     │
        │    │   CARD STACK  │     │
        │    │               │     │
        │    └───────────────┘     │
        │                          │
        ├──────────────────────────┤
        │       FRONT LIP          │
        └──────────────────────────┘
          ●                      ●
       fixed point           fixed point
```

The **front lip** is important because it establishes why the lower part of the cards is clipped.

The user should feel that the cards are physically sitting **inside** the drawer rather than floating on top of the page.

---

# 3. Drawer Depth

The container should have a slight 3D/depth treatment.

Use:

- Inner shadow inside the drawer.
- Outer shadow beneath the drawer.
- Subtle side-wall thickness.
- Slight highlight along the upper edges.
- Darker interior behind the cards.

Do not make it excessively realistic or skeuomorphic.

The goal is a **stylized physical manga-library object** that matches the application's existing visual language.

---

# 4. Four Cards Inside the Drawer

There are exactly **four layers**.

### Card 1 — Top

The primary visible manga thumbnail.

### Card 2 — Middle/BW

A second thumbnail, initially hidden behind Card 1.

### Card 3 — Bottom

A third thumbnail, initially hidden behind Card 2.

### Card 4 — Blurred Empty Card

A blurred/empty backing card.

It should:

- Be visually softer.
- Remain blurred.
- Not look like another manga.
- Complete the depth of the stack.

Conceptually:

```text
          CARD 1
        ┌───────────┐
        │           │
        └───────────┘
             CARD 2
           ┌───────────┐
           │           │
           └───────────┘
                CARD 3
              ┌───────────┐
              │           │
              └───────────┘
                   CARD 4
                 ┌───────────┐
                 │  BLURRED  │
                 └───────────┘
```

---

# 5. Closed / Idle State

When the cursor is outside the item:

- The drawer is closed.
- All four cards are stored inside the drawer.
- The cards are tightly stacked.
- Only the first/top card is clearly visible.
- The other cards are mostly hidden behind it and the drawer's front lip.
- The bottom of the cards is clipped by the container.
- The strap is tied around the stack.

The visual should feel like:

> A closed drawer containing a neatly stored bundle of manga cards.

---

# 6. Fixed Bottom Points

Assume two fixed attachment points at the bottom left and bottom right of the drawer.

These points establish the base/pivot of the physical mechanism.

```text
┌─────────────────────────┐
│       CARD STACK        │
│                         │
├─────────────────────────┤
│       DRAWER LIP        │
└─────────────────────────┘
  ●                     ●
  ↑                     ↑
fixed                 fixed
```

The cards should move relative to these points.

The fixed points themselves should **not travel upward with the cards**.

They can be subtle decorative/structural elements rather than prominent UI controls.

---

# 7. Drawer Opening Direction

This is the most important part of the interaction.

The cards should behave as if the drawer is **opening outward toward the user**, rather than simply translating upward.

Think of the card stack as being mounted inside a shallow drawer.

### Closed

```text
SIDE CONCEPT

┌──────────────┐
│  CARD STACK  │
└──────────────┘
████████████████
   DRAWER
```

### Opening

```text
SIDE CONCEPT

       ╱ CARD 1
      ╱
     ╱ CARD 2
    ╱
   ╱ CARD 3
  ╱
 ╱ CARD 4
┌──────────────┐
│    DRAWER    │
└──────────────┘
```

The cards should have a **rising + outward + slightly angled** movement.

The exact perspective can be adjusted during implementation.

---

# 8. Cursor-Controlled Progressive Reveal

The cursor's **vertical position** inside the Browse item determines the reveal state.

This should use discrete states rather than 1:1 cursor tracking.

The cursor should effectively act like the user's hand pulling the drawer farther open.

---

## State 0 — Closed

Cursor is outside the item.

```text
┌─────────────────┐
│                 │
│     CARD 1      │
│                 │
├─────────────────┤
│     DRAWER      │
└─────────────────┘
```

Cards 2–4 remain stored behind Card 1.

---

## State 1 — Cursor Reaches the Card

As the cursor first moves onto the manga item:

- The strap begins to release.
- The drawer starts opening outward.
- Card 1 remains dominant.
- Card 2 begins to emerge.

This should be subtle.

---

## State 2 — Cursor Is Over the Second Card

When the cursor reaches the vertical area corresponding to Card 2:

**Card 2 pops up and becomes approximately 60% visible.**

This is a distinct state.

The important behavior is:

```text
Cursor ↓

        CARD 1
     ┌───────────┐
     │           │
     └───────────┘

        CARD 2
      ┌───────────┐
      │  ~60%     │
      │  VISIBLE  │
      └───────────┘

     ┌─────────────┐
     │   DRAWER    │
     └─────────────┘
```

Card 2 should appear **behind Card 1**, not beside it.

---

# 9. Moving Up to Card 3

When the cursor moves upward past Card 2:

Card 2 should **return toward its previous position**.

At the same time:

**Card 3 becomes the newly revealed card.**

This is important.

The interaction is **not cumulative expansion** where Card 2 stays fully pulled out and Card 3 simply appears above it.

Instead, the active/revealed card changes as the cursor moves upward.

Conceptually:

```text
CURSOR ON CARD 2

       CARD 1
      ┌───────┐
      └───────┘
       CARD 2
      ┌───────┐
      │ ~60%  │
      └───────┘
       CARD 3
      mostly stored
```

Then:

```text
CURSOR MOVES UP TO CARD 3

       CARD 1
      ┌───────┐
      └───────┘

       CARD 2
      ┌───────┐
      │back   │
      └───────┘

       CARD 3
      ┌───────┐
      │ ~50%  │
      │visible│
      └───────┘
```

Card 2 goes back toward the same position it had before, while Card 3 takes the active reveal position.

---

# 10. One-at-a-Time Pop-Up Behavior

The key interaction rule is:

> **Only the card corresponding to the cursor's current vertical level should perform the prominent pop-up.**

The previous card should settle back.

Example:

```text
Cursor low
    ↓
Card 1 active

Cursor moves up
    ↓
Card 2 pops up ~60%

Cursor moves further up
    ↓
Card 2 settles back
Card 3 pops up ~50–60%

Cursor moves further up
    ↓
Card 3 settles back
Card 4 pops up
```

This creates the sensation of browsing through physical files one at a time.

---

# 11. Card 3 Reveal

When the cursor moves upward into Card 3's interaction zone:

- Card 2 returns toward its normal stored position.
- Card 3 emerges from the drawer.
- Card 3 should be approximately **50% visible** initially.
- It remains behind Card 1 in depth order.
- Its movement should have a small outward/rising component.

The card should feel as though it is being pulled from behind the previous card.

---

# 12. Card 4 Reveal

The fourth card is the blurred/empty layer.

When the cursor reaches its upper interaction zone:

- Card 3 settles back.
- Card 4 becomes visible.
- Card 4 remains blurred.
- Card 4 should use the same drawer-opening mechanism.
- It should not suddenly appear as a normal manga cover.

This provides a visual endpoint for the stack.

---

# 13. Maximum Opening

At the highest cursor position:

- The drawer reaches its maximum opening position.
- The active card is the fourth/blurred layer.
- The cards are arranged one behind another.
- The overall stack is approximately **60% exposed**.
- The bottom portion remains clipped by the drawer.
- The fixed bottom points remain fixed.

The final state should look like a bundle of files pulled partially out of a drawer.

---

# 14. The Stripe / Strap

There is **one single stripe** holding the cards.

Do not combine this with the previous corner-pin system.

The strap is the primary physical fastener.

---

# 15. Strap Position

The stripe should be positioned approximately:

**25% below the vertical midline of the card stack.**

It should wrap around/through the stack rather than appear as a flat horizontal divider.

A small portion should remain visible from the side.

---

# 16. Strap — Idle

When untouched:

- The strap is tied.
- It has a small folded/looped shape.
- It visibly holds the cards together.
- The side portion remains visible.
- It has subtle depth.
- It casts a small contact shadow.

The tied shape should be compact.

Do not make it resemble a large decorative bow.

The metaphor should be:

> A bundle of documents secured with a strap.

---

# 17. Strap — Opening

When the cursor begins interacting:

1. The strap loosens.
2. The tied portion starts to unfold.
3. The strap becomes straight.
4. A subtle shadow emphasizes the released strap.
5. The drawer/card mechanism begins opening.
6. The strap continues to visually connect to the stack.

The untie should happen as part of the physical sequence rather than as a simple opacity change.

---

# 18. Strap Should Not Simply Follow the Cards

The strap needs its own animation.

Do not apply exactly the same transform to the strap and the thumbnails.

The cards:

```text
rise + move outward
```

The strap:

```text
unties
→ straightens
→ remains connected
→ follows the opened stack
```

This distinction is important for the physical illusion.

---

# 19. Strap Shadow

When the strap becomes untied:

- Add a soft shadow below/behind it.
- Add subtle contact shadow against the cards.
- Increase depth slightly during the released state.
- Reduce the shadow when it returns to the tied state.

The shadow should be subtle.

Avoid neon/glow effects.

---

# 20. Returning to Closed State

When the cursor leaves the Browse item:

```text
Active card settles
       ↓
Drawer closes
       ↓
Cards return into the drawer
       ↓
Stack compresses
       ↓
Strap returns around stack
       ↓
Strap ties itself
       ↓
Closed state
```

The animation should reverse smoothly.

No abrupt snapping.

---

# 21. Drawer Should Remain Visually Fixed

Although the drawer mechanism opens, the Browse grid itself must not move.

The drawer should occupy the same grid position.

Expanded cards can visually extend beyond the normal card area, but:

- Do not push neighboring manga cards.
- Do not change grid row heights.
- Do not cause layout reflow.
- Use positioned/overflow techniques where necessary.

Only the interacted manga item should animate.

---

# 22. Visual Layering

Use clear depth ordering:

```text
Front
  ↓
Card 1
  ↓
Card 2
  ↓
Card 3
  ↓
Card 4 / blurred
  ↓
Drawer interior
  ↓
Drawer base
```

The active card should appear slightly elevated relative to the cards behind it.

Use:

- `z-index`
- subtle shadows
- small scale changes if needed
- controlled perspective
- consistent card borders

Avoid excessive 3D effects.

---

# 23. Interaction Zones

The vertical interaction area can be divided into generous zones.

Conceptually:

```text
┌─────────────────────┐
│  Zone 4 → Card 4    │
├─────────────────────┤
│  Zone 3 → Card 3    │
├─────────────────────┤
│  Zone 2 → Card 2    │
├─────────────────────┤
│  Zone 1 → Card 1    │
└─────────────────────┘
```

The thresholds should overlap slightly or include hysteresis so that tiny cursor movements near a boundary do not rapidly switch states.

This prevents flickering.

---

# 24. Cursor Movement Direction

The important direction is:

**Cursor moves upward → progressively access cards deeper in the stack.**

It should feel as though the user is pulling the contents of the drawer outward by moving upward.

Moving downward should naturally return toward the previous card/state.

---

# 25. Touch / Mobile

Touch devices do not have hover or vertical pointer position in the same way.

Use a simplified interaction:

- Tap once → open/reveal.
- Tap again or outside → close.

The desktop cursor-driven interaction remains the primary experience.

---

# 26. Accessibility

Support:

- Keyboard focus.
- Focus-visible state.
- Reduced motion.
- Touch interaction.

When `prefers-reduced-motion` is enabled:

- Keep the different reveal states.
- Remove or significantly reduce the physical animation.
- Preserve usability.

---

# 27. Theme Integration

The drawer, strap, shadows, borders, and physical details should follow the application's theme/settings system.

Do not hard-code the visual to one palette.

Use existing theme variables where possible.

Potential variables:

```css
--folder-drawer
--folder-drawer-inner
--folder-drawer-border
--folder-stripe
--folder-stripe-shadow
--folder-card-shadow
--folder-fastener
```

If the application already has a theme system, reuse it rather than creating a separate one.

---

# 28. Visual Personality

The physical metaphor should be **subtle and premium**.

Avoid making it look like:

- A literal office filing cabinet.
- A playing-card game.
- A generic carousel.
- A stack of cards simply translated upward.

Instead, it should look like:

> A stylized manga card stored inside a small drawer/tray, with several related thumbnail sheets held together by a strap.

The physical mechanism should support the manga content rather than overpower it.

---

# 29. Complete Interaction Example

### Stage 1 — Idle

```text
       ┌───────────────┐
       │    CARD 1     │
       │               │
       ├───────────────┤
       │  cards hidden │
       ├───────────────┤
       │   DRAWER LIP  │
       └───────────────┘
         ╲── STRAP ──╱
```

### Stage 2 — Cursor reaches Card 2

```text
       ┌───────────────┐
       │    CARD 1     │
       └───────────────┘
          ┌───────────────┐
          │    CARD 2     │
          │    ~60%       │
          └───────────────┘
       ┌─────────────────┐
       │     DRAWER      │
       └─────────────────┘

            STRAP
          straightened
```

### Stage 3 — Cursor moves to Card 3

```text
       ┌───────────────┐
       │    CARD 1     │
       └───────────────┘

       ┌───────────────┐
       │    CARD 2     │
       │   settled     │
       └───────────────┘

         ┌───────────────┐
         │    CARD 3     │
         │     ~50%      │
         └───────────────┘

             DRAWER
```

### Stage 4 — Cursor reaches Card 4

```text
       ┌───────────────┐
       │    CARD 1     │
       └───────────────┘

       ┌───────────────┐
       │    CARD 2     │
       └───────────────┘

       ┌───────────────┐
       │    CARD 3     │
       └───────────────┘

       ┌───────────────┐
       │    BLURRED    │
       │     CARD 4    │
       └───────────────┘

          DRAWER OPEN
          STRAP STRAIGHT
```

---

# 30. Final Design Principle

The interaction should communicate a simple physical sequence:

**Stored → Strap releases → Drawer opens → Card 2 pops up → Move upward → Card 2 settles → Card 3 pops up → Move upward → Card 3 settles → Card 4 appears → Maximum reveal → Move down/leave → Everything returns to the drawer and the strap ties again.**

The defining feature is not "cards moving upward."

The defining feature is:

> **A drawer opening outward and allowing the user to browse the cards inside one layer at a time by moving the cursor upward.**
