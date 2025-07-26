# Artisan Canvas Studio - Full Stack Web Application

## Overview

This is a full-stack web application for "Artisan Canvas," an art studio that offers creative workshops and classes. The application features a modern, artistic design with a contact form system and comprehensive UI components. It's built as a single-page application with a focus on showcasing the studio's offerings and enabling visitor engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system featuring warm, artistic color palette
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript throughout the stack
- **API Design**: REST API with JSON responses
- **Middleware**: Built-in request logging and error handling
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Abstraction**: Interface-based storage layer with memory implementation for development

## Key Components

### Core Application Structure
- **Shared Schema**: Common type definitions and validation schemas using Zod
- **Component Library**: Complete UI component system based on shadcn/ui
- **Page Components**: Modular sections (Hero, About, Gallery, Services, Testimonials, Contact)
- **Responsive Design**: Mobile-first approach with comprehensive breakpoint coverage

### Database Schema
```typescript
// Users table for potential future authentication
users: {
  id: UUID (primary key)
  username: text (unique)
  password: text
}

// Contact submissions from the website
contact_submissions: {
  id: UUID (primary key)
  firstName: text
  lastName: text
  email: text
  interest: text
  message: text
  createdAt: timestamp
}
```

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin functionality)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - React Query mutation sends POST request to backend
   - Express route validates and stores submission
   - Success/error feedback via toast notifications

2. **Data Validation**:
   - Shared Zod schemas ensure consistent validation between frontend and backend
   - Type safety maintained throughout the stack with TypeScript

3. **State Management**:
   - TanStack Query handles server state caching and synchronization
   - Local form state managed with React hooks
   - Toast notifications for user feedback

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component primitives
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React icons and React Icons for social media
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL driver
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Storage**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin and Replit integration
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (inferred from setup)

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Backend Integration**: Express server with Vite middleware integration
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Deployment**: Single server deployment serving both API and static files
- **Environment**: NODE_ENV-based configuration switching

### Key Configuration
- **TypeScript**: Monorepo structure with shared types between client/server
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Asset Handling**: Static file serving with proper routing
- **Error Handling**: Comprehensive error boundaries and API error responses

The application follows modern full-stack development practices with a focus on type safety, developer experience, and artistic presentation suitable for a creative studio's web presence.