# BiriGashi Investment Tracker

## Overview

The BiriGashi Investment Tracker is a comprehensive property investment dashboard application designed to track multiple real estate properties, payment schedules, and investor contributions across a portfolio. The application provides visual insights into payment statuses, upcoming obligations, and individual investor commitments across five properties (Kindaruma Homes, Alina Ridge, Finsbury Heights, Super-Westbury, and TSavorite Gardens) with four investors (AA, HH, MY, OG).

The system is built as a full-stack web application with a React-based frontend for rich UI interactions and an Express.js backend for API services, including GitHub repository publishing capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript for type safety and component-based architecture.

**Routing**: Wouter is used for client-side routing, providing a lightweight alternative to React Router.

**State Management**: TanStack Query (React Query) handles server state management, caching, and data synchronization. The application uses a custom query client configured with specific behaviors for API requests and error handling.

**UI Component System**: The application leverages shadcn/ui, a collection of Radix UI primitives with Tailwind CSS styling. Components follow a "New York" style variant and are designed for data-dense financial dashboards.

**Styling Approach**: Tailwind CSS with a custom design system emphasizing:
- Material Design principles adapted for financial data density
- Clear information hierarchy and scannable data patterns
- Monospace fonts (Roboto Mono) for financial figures to enable easy comparison
- Inter font family for general typography
- Custom color tokens for payment statuses (paid, pending, overdue)

**Design Philosophy**: Data-first dashboard system prioritizing information density with breathing room, trustworthy presentation of financial data, and progressive disclosure for complex information.

### Backend Architecture

**Framework**: Express.js running on Node.js with TypeScript for type safety.

**API Structure**: RESTful API endpoints registered through a centralized route registration system. The primary implemented endpoint is `/api/publish-to-github` for GitHub integration.

**Request Processing**: 
- JSON body parsing with raw body capture for webhook verification
- Request/response logging middleware that captures method, path, status, duration, and JSON responses
- Logging limited to API routes (paths starting with `/api`)

**Development Server**: Custom Vite integration in middleware mode for hot module replacement during development, with separate production build output.

### Data Storage

**In-Memory Storage**: Currently implements an in-memory storage layer (`MemStorage`) for user management with interfaces designed to accommodate future database integration.

**Database Schema**: Drizzle ORM is configured with PostgreSQL support, though the current implementation uses in-memory storage. The schema defines a `users` table with username/password authentication.

**Data Model**: Investment data (properties, payments, investors) is currently stored as static TypeScript data structures in `shared/investmentData.ts`, making it easily shareable between frontend and backend.

**Rationale**: The in-memory approach allows rapid prototyping and deployment without database dependencies, while the Drizzle configuration provides a clear migration path to persistent storage when needed.

### Authentication & Authorization

**Current State**: Basic user schema exists with username/password fields, but authentication is not currently implemented in the application flow.

**Storage Interface**: Designed to support user CRUD operations (getUser, getUserByUsername, createUser) with UUID-based identifiers.

### External Dependencies

**GitHub Integration**:
- **Octokit REST API Client**: Used for programmatic GitHub repository creation and management
- **Authentication**: Leverages Replit's connector system to obtain GitHub OAuth access tokens
- **Token Management**: Implements token caching with expiration checking to minimize API calls
- **Functionality**: Creates repositories, initializes git, commits code, and pushes to remote
- **Git Operations**: Uses Node.js child_process for git commands (init, add, commit, push)

**Replit Platform Integration**:
- **Connectors API**: Fetches GitHub connection settings and OAuth credentials from Replit's connector hostname
- **Identity Tokens**: Uses REPL_IDENTITY or WEB_REPL_RENEWAL environment variables for authentication
- **Development Plugins**: 
  - Runtime error overlay for improved debugging
  - Cartographer for code navigation (dev only)
  - Dev banner for development environment indicator (dev only)

**UI Component Libraries**:
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives including dialogs, popovers, accordions, tooltips, dropdowns, and form controls
- **Lucide Icons**: Icon library for consistent iconography
- **class-variance-authority**: Type-safe variant management for component styling
- **date-fns**: Date manipulation and formatting

**Build & Development Tools**:
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Static typing across the entire codebase
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **esbuild**: Fast JavaScript bundler for server-side code

**Database & ORM** (configured but not actively used):
- **Drizzle ORM**: TypeScript ORM with Zod schema validation
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-zod**: Schema validation integration

**Quality of Life**:
- **Wouter**: Lightweight routing library
- **TanStack Query**: Powerful async state management
- **React Hook Form**: Form state management with resolver support

### Key Architectural Decisions

**Monorepo Structure**: The codebase is organized with clear separation between client, server, and shared code, enabling type sharing and reducing duplication.

**Type-Safe Sharing**: TypeScript types and data structures are defined in a `shared` directory, allowing both frontend and backend to import the same definitions for properties, payments, and investors.

**Static Site Generation Compatibility**: The frontend build outputs to `dist/public`, enabling deployment as static assets with API routes served separately.

**Canvas-Based Charts**: Payment status visualization uses HTML5 Canvas for lightweight, customizable rendering without heavy charting library dependencies.

**Progressive Enhancement**: The application is designed mobile-first with responsive breakpoints and touch-friendly interactions.

**Extensibility**: Storage interfaces and route registration are designed for easy extension, allowing new features to be added without major refactoring.