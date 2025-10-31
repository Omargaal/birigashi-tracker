# BiriGashi Investment Tracker

A comprehensive property investment dashboard for tracking multiple properties, payment schedules, and investor contributions across the BiriGashi portfolio.

## Features

- **Investment Overview**: Track 5 properties with detailed payment schedules
- **Upcoming Payments**: Visual alerts for payments due within 30 days
- **Payment Status Chart**: Pie chart showing overall paid vs remaining amounts
- **Investor Tracking**: Individual investor cards showing amounts owed and properties
- **Property Details**: Expandable tables with complete payment history per property
- **GitHub Publishing**: One-click publishing to create a GitHub repository

## Properties Tracked

1. **Kindaruma Homes** - One-Bed+StudyRoom (B301) - $66,747
2. **Alina Ridge** - Two-Bed (E703) - $91,963
3. **Finsbury Heights** - Two-Bed (12xx) - $65,000
4. **Super-Westbury** - One-Bed+Balcony (1704) - $55,642
5. **TSavorite Gardens** - Two-Bed (C1502) - $74,200

## Investors

- **AA** - Ashok Ashok
- **HH** - Hassan Hussein
- **MY** - Mohamed Yassin
- **OG** - Omar Gamal

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn/ui, Lucide Icons
- **Charting**: HTML5 Canvas
- **Integration**: GitHub API (Octokit)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Publishing to GitHub

1. Click the "Publish to GitHub" button in the dashboard header
2. Enter a repository name (default: `birigashi-tracker`)
3. Optionally add a description
4. Choose public or private repository
5. Click "Publish" to create the repository and push your code

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utility functions
├── server/              # Backend Express server
│   ├── routes.ts        # API routes
│   └── github.ts        # GitHub integration
├── shared/              # Shared types and data
│   ├── types.ts         # TypeScript interfaces
│   └── investmentData.ts # Investment property data
```

## Data Model

Each property contains:
- Property details (name, unit, total investment)
- List of investors
- Payment schedule with:
  - Payment type and amount
  - Due date and status
  - Individual investor payment tracking

## License

MIT

## Author

Created for the BiriGashi investment group
