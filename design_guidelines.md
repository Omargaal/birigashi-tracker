# BiriGashi Investment Dashboard - Design Guidelines

## Design Approach: Data-First Dashboard System

**Selected Approach:** Design System (Material Design principles adapted for financial data density)

**Justification:** This is a utility-focused investment tracking application requiring clear data hierarchy, efficient scanning, and trustworthy presentation of financial information. The design prioritizes readability, quick comprehension, and confident decision-making over visual flair.

**Core Principles:**
- Information density with breathing room
- Scannable data patterns
- Trust through clarity and consistency
- Progressive disclosure for complex data

---

## Typography System

**Font Family:**
- Primary: Inter (via Google Fonts CDN)
- Monospace (for financial figures): 'Roboto Mono'

**Type Scale:**
- Page Title: text-2xl (24px), font-bold
- Section Headers: text-lg (18px), font-semibold
- Card Headers: text-sm (14px), font-semibold
- Body Text: text-sm (14px), font-normal
- Data Labels: text-xs (12px), font-medium
- Secondary Info: text-xs (12px), font-normal
- Financial Figures: text-base (16px) or text-sm (14px), font-mono, font-semibold

**Hierarchy Rules:**
- Property names use larger, bold typography
- Payment amounts always use monospace font for easy comparison
- Investor names displayed consistently at text-sm, font-medium

---

## Layout System

**Spacing Units (Tailwind):**
- Use units: 2, 3, 4, 6, 8 for consistent rhythm
- Component padding: p-4, p-6
- Section spacing: space-y-6, space-y-8
- Card spacing: gap-4, gap-6
- Tight groupings: space-y-2, gap-2

**Grid Structure:**
- Main container: max-w-7xl mx-auto px-4 md:px-6
- Responsive breakpoints: mobile-first, md: (768px), lg: (1024px)
- Dashboard cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Property tables: Full-width within container, overflow-x-auto for mobile

**Section Architecture:**
1. **Header Bar:** Sticky top-0, full-width with brand, title, and alert icon
2. **Upcoming Payments Section:** Horizontal scroll on mobile, grid on desktop
3. **Status Overview:** Pie chart + summary cards in 2-column or stacked layout
4. **Property Tables:** Stacked sections with accordion-style expansion if needed

---

## Component Library

### A. Navigation & Headers
- **App Header:** Sticky, shadow-sm, with logo/title left, alerts/actions right
- **Section Headers:** Flex with icon + text, mb-4 spacing
- **Breadcrumbs:** Not needed for single-page dashboard

### B. Data Display Cards

**Investor Summary Cards:**
- Structure: White background, border, rounded-lg, p-4
- Content: Investor name + icon (top), amount (right-aligned, bold), property list (bottom, text-xs)
- Hover: subtle shadow lift (hover:shadow-md transition)

**Property Cards:**
- White background, border, rounded-lg, p-6
- Header: Property name + unit in two-line layout
- Subheader: Total investment amount, monospace font
- Content: Payment table embedded

**Status Indicators:**
- "Fully Paid": Pill badge with checkmark icon
- "Paid": Standard badge
- "Pending": Outlined badge
- "Partially Paid": Split indicator showing fraction

### C. Tables

**Payment Tables:**
- Structure: Responsive table with overflow-x-auto wrapper
- Headers: Sticky, background, text-xs font-semibold uppercase tracking-wide
- Rows: Border-b, hover:bg-gray-50, py-3 px-4
- Columns: Payment Type | Month/Date | Amount | Status | Per Investor breakdown
- Mobile: Stack or horizontal scroll with min-w-max

**Investor Columns:**
- Checkmark icons for paid
- Dollar amounts for partial payments
- Empty/dash for unpaid
- Use icon library (Heroicons) for check/x marks

### D. Charts & Visualizations

**Pie Chart:**
- Embedded in card, h-48 or h-56
- Library: Chart.js or Recharts
- Two segments: Paid vs Remaining
- Legend below chart
- Total amount displayed prominently

**Progress Bars (if used):**
- Height: h-2, rounded-full
- Background: bg-gray-200
- Fill: bg-green-500 or bg-blue-500
- Show percentage label

### E. Forms & Inputs (if added later)
- Input fields: border, rounded-md, p-2, focus:ring-2 focus:ring-blue-500
- Buttons: Primary (bg-blue-600 text-white), Secondary (border bg-white)
- Select dropdowns: Styled consistently with inputs

### F. Icons
- **Library:** Heroicons (via CDN)
- **Usage:**
  - Home icon for header
  - Alert/bell icons for upcoming payments
  - User icons for investor names
  - Check/X for payment status
  - Calendar for due dates
- **Size:** w-4 h-4 for inline, w-5 h-5 for headers

---

## Status & Feedback Patterns

**Payment Status Colors:**
- Fully Paid: Green accent (border-green-500, text-green-700, bg-green-50)
- Paid: Blue accent (border-blue-500, text-blue-700, bg-blue-50)
- Pending: Yellow accent (border-yellow-500, text-yellow-700, bg-yellow-50)
- Overdue: Red accent (border-red-500, text-red-700, bg-red-50)

**Alert Indicators:**
- Upcoming within 7 days: Yellow badge
- Overdue: Red badge with pulse animation
- No alerts: Gray/neutral state

**Empty States:**
- Centered text with icon
- Helpful message: "No upcoming payments" with calendar icon

---

## Responsive Behavior

**Mobile (< 768px):**
- Stack all sections vertically
- Investor cards in horizontal scroll container
- Tables use overflow-x-auto with shadows to indicate scroll
- Pie chart maintains aspect ratio, reduces to h-40

**Tablet (768px - 1024px):**
- Two-column layouts where appropriate
- Property cards can go 2-up
- Tables remain full-width

**Desktop (> 1024px):**
- Full dashboard layout with sidebars if expanded
- 4-column investor card grid
- Tables show all columns without scroll

---

## Animation & Transitions

**Minimal Animations:**
- Card hover: transition-shadow duration-200
- Table row hover: transition-colors duration-150
- Chart rendering: Default Chart.js animations (500ms)
- No page transitions or elaborate effects

---

## Accessibility

- Semantic HTML: `<table>`, `<thead>`, `<tbody>` for data tables
- ARIA labels for status indicators and icons
- Sufficient contrast ratios (WCAG AA minimum)
- Keyboard navigation for interactive elements
- Focus indicators: ring-2 ring-blue-500

---

## Images

**No hero images** - This is a data dashboard, not a marketing page. Visual focus should remain on data clarity and functional elements.

---

## Special Considerations

**Data Density Balance:**
- Use whitespace strategically (p-4, p-6) to prevent overwhelming users
- Group related data in cards with clear boundaries
- Limit table rows per view, implement pagination if needed

**Financial Data Treatment:**
- Always use monospace fonts for dollar amounts
- Right-align numerical columns in tables
- Use thousand separators: `$12,345.67`
- Highlight large amounts (> $10K) with subtle bold treatment

**Multi-Investor Display:**
- Show investor initials consistently
- Use color-coding only for status, not investors (avoid confusion)
- Provide clear breakdown of who paid what in detailed views