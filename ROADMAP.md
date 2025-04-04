# durumim UI - Roadmap and Technical Decisions

This document explains some of the technical choices made in the development of durumim UI and future planning.

## Icons

**Current Version (V1):** We are using the `react-icons` library as the base for our icons. This allows us to:
- Start quickly with a wide variety of known icons
- Provide a good immediate development experience
- Abstract the implementation through our `Icon` component

**Future Plans:**
- Development of our own icon library, aligned with our visual identity
- Gradual replacement of `react-icons` with exclusive durumim icons
- Maintain the same API to ensure compatibility in updates

## Theme and Appearance

**Current Version (V1):** Components are being developed primarily with dark mode.

**Future Plans:**
- Complete implementation of light mode
- Customizable theme system
- Design tokens specific to each theme
- Smooth transitions between themes

## Tests

**Current Version (V1):** Focusing on component implementation and documentation.

**Future Plans:**
- Implementation of unit tests for all components
- Integration tests to verify interaction between components
- Accessibility tests (a11y)
- Visual regression testing
- Test coverage of at least 80%

## Accessibility

**Current Version (V1):** Basic accessibility implementation.

**Future Plans:**
- Full compliance with WCAG 2.1 AA
- Automated accessibility testing
- Detailed accessibility documentation for each component

## React Native

**Current Version (V1):** Focused only on web components.

**Future Plans:**
- Development of component versions for React Native
- Sharing design tokens across platforms
- Consistent development experience between web and mobile

## Next Components (V2)

- Modal/Dialog
- Toast/Notifications
- Carousel
- Tabs
- Accordion
- DatePicker
- Select (Autocomplete)
- Dropdown
- Menu

---

This roadmap is a living document and will be updated as the project evolves and new priorities emerge. Contributions and suggestions are always welcome!