# Hospital Food Delivery Management System

## Assignment Link
https://www.heliverse.com/assignment/hospital-food-management

## Overview

The Hospital Food Delivery Management System is a comprehensive solution for managing hospital food services, including meal preparation, delivery tracking, and dietary management. The system serves three main user roles: managers, pantry staff, and delivery personnel.

## Table of Contents

1. [Backend Architecture](#backend-architecture)
2. [Features](#features)
3. [User Roles](#user-roles)
4. [API Documentation](#api-documentation)
5. [Database Schema](#database-schema)
6. [Frontend Documentation](#frontend-documentation)
7. [Setup Guide](#setup-guide)

## Backend Architecture

### Tech Stack

- Backend: Node.js with Express
- Database: MongoDB with Mongoose
- Authentication: JWT-based with cookie storage
- TypeScript for type safety
- RESTful API architecture

### Key Components

- Authentication System
- Role-based Access Control
- Real-time Analytics
- Task Management System
- Inventory Management
- Delivery Tracking

## Features

### Core Functionality

1. User Management
2. Patient Management
3. Diet Chart Management
4. Meal Preparation Tracking
5. Delivery Management
6. Inventory Control
7. Analytics Dashboard

### Security Features

- JWT-based Authentication
- Role-based Authorization
- Secure Cookie Usage
- Input Validation
- Error Handling

## User Roles

### Manager

- System administration
- Patient management
- Diet chart creation
- Staff management
- Analytics access
- Inventory oversight

### Pantry Staff

- Meal preparation
- Inventory management
- Task management
- Delivery assignment
- Stock monitoring

### Delivery Personnel

- Delivery management
- Status updates
- Route optimization
- Delivery confirmation
- Performance tracking

## API Documentation

### Authentication Endpoints

#### POST /api/auth/login

Login endpoint for all users.

Request:
\`\`\`json
{
"email": "string",
"password": "string"
}
\`\`\`

Response:
\`\`\`json
{
"user": {
"id": "string",
"name": "string",
"role": "manager" | "pantry" | "delivery"
}
}
\`\`\`

#### POST /api/auth/register

Register new users (manager access only).

Request:
\`\`\`json
{
"name": "string",
"email": "string",
"password": "string",
"role": "manager" | "pantry" | "delivery",
"contactInfo": {
"phone": "string",
"address": "string"
}
}
\`\`\`

### Manager Endpoints

#### Patient Management

- GET /api/patients - List all patients
- POST /api/patients - Create new patient
- GET /api/patients/:id - Get patient details
- PUT /api/patients/:id - Update patient
- DELETE /api/patients/:id - Delete patient

#### Diet Chart Management

- GET /api/diet-charts - List all diet charts
- POST /api/diet-charts - Create new diet chart
- GET /api/diet-charts/:id - Get diet chart details
- PUT /api/diet-charts/:id - Update diet chart
- DELETE /api/diet-charts/:id - Delete diet chart

### Pantry Endpoints

#### Task Management

- GET /api/pantry/tasks - Get assigned tasks
- PUT /api/pantry/tasks/:id/status - Update task status
- GET /api/pantry/inventory - Get inventory status
- PUT /api/pantry/inventory - Update inventory

#### Inventory Management

- GET /api/pantry/inventory/low-stock - Get low stock items
- GET /api/pantry/inventory/expiring - Get expiring items
- POST /api/pantry/inventory - Add new inventory item
- DELETE /api/pantry/inventory/:id - Remove inventory item

### Delivery Endpoints

#### Delivery Management

- GET /api/delivery/assigned - Get assigned deliveries
- PUT /api/delivery/:id/status - Update delivery status
- PUT /api/delivery/availability - Update availability status
- GET /api/delivery/history - Get delivery history

#### Analytics Endpoints

- GET /api/analytics/delivery/stats - Get delivery statistics
- GET /api/analytics/delivery/current - Get current deliveries
- GET /api/analytics/delivery/history - Get delivery history
- GET /api/analytics/delivery/performance - Get performance metrics

## Database Schema

### User Schema

\`\`\`typescript
{
name: string;
email: string;
password: string;
role: 'manager' | 'pantry' | 'delivery';
contactInfo: {
phone: string;
address: string;
};
deliveryStatus?: 'available' | 'busy' | 'offline';
currentAssignments?: number;
maxAssignments?: number;
rating?: number;
}
\`\`\`

### Patient Schema

\`\`\`typescript
{
name: string;
age: number;
gender: string;
contactInfo: {
phone: string;
emergencyContact: string;
};
roomDetails: {
roomNumber: number;
bedNumber: number;
floorNumber: number;
};
medicalDetails: {
diseases: string[];
allergies: string[];
};
otherDetails: {
admissionDate: Date;
dietaryRestrictions: string[];
};
}
\`\`\`

### MealBox Schema

\`\`\`typescript
{
taskId: ObjectId;
patientId: ObjectId;
dietChartId: ObjectId;
deliveryPersonnelId?: ObjectId;
mealType: 'morning' | 'afternoon' | 'night';
status: 'preparing' | 'ready' | 'assigned' | 'in-transit' | 'delivered';
preparationNotes?: string;
deliveryNotes?: string;
deliveryTime?: Date;
specialInstructions?: string;
}
\`\`\`

## Frontend Documentation

### Tech Stack

- Next.js (React framework)
- TypeScript
- Tailwind CSS for styling
- shadcn/ui for UI components
- Recharts for data visualization

### Key Components

#### Authentication Context

- Manages user authentication state
- Provides login, logout, and registration functions
- Stores user information and JWT token

#### Theme Provider

- Manages application theme (light/dark mode)
- Provides theme toggle functionality

#### Layout Components

- Navbar: Top navigation bar with user menu and theme toggle
- Sidebar: Role-based navigation menu
- DashboardLayout: Wrapper component for authenticated pages

#### Role-based Dashboards

1. Manager Dashboard

   - Overview of hospital food service operations
   - Charts for delivery statistics, patient statistics, meal distribution, and dietary restrictions
   - Quick access to patient management, diet charts, and task management

2. Pantry Dashboard

   - Inventory levels chart
   - Meal preparation trend chart
   - Task completion rate chart
   - Access to meal preparation tasks and delivery personnel management

3. Delivery Dashboard
   - Personal delivery statistics
   - Performance metrics
   - Current deliveries list
   - Delivery history

#### Reusable Components

- ChartContainer: Wrapper for responsive and theme-aware charts
- TaskList: Reusable list component for various tasks
- PatientCard: Display component for patient information
- MealBoxList: List component for meal boxes with assignment and status update functionality

### Page Structure

- /login: User login page
- /register: User registration page (manager access only)
- /dashboard: Role-based dashboard redirect
- /dashboard/manager: Manager dashboard
- /dashboard/manager/patients: Patient management
- /dashboard/manager/diet-charts: Diet chart management
- /dashboard/manager/tasks: Task management
- /dashboard/pantry: Pantry dashboard
- /dashboard/pantry/preparation-tasks: Meal preparation task list
- /dashboard/pantry/meal-boxes: Meal box management
- /dashboard/pantry/delivery-personnel: Delivery personnel management
- /dashboard/delivery: Delivery personnel dashboard
- /dashboard/delivery/assigned: Current assigned deliveries
- /dashboard/delivery/history: Delivery history
- /profile: User profile page

### State Management

- React Context API for global state (auth, theme)
- React Query for server state management and caching
- Local state with useState for component-specific state

### Styling

- Tailwind CSS for utility-first styling
- Dark mode support using shadcn/ui components
- Responsive design for mobile, tablet, and desktop views

### Data Fetching

- Axios for API requests
- Custom hooks for data fetching and mutation (e.g., usePatients, useMealTasks)

### Error Handling

- Toast notifications for user feedback
- Error boundaries for catching and displaying runtime errors
- Form validation using react-hook-form

## Setup Guide

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```env
PORT=3000
MONGODB_URI=
JWT_SECRET=
NEXT_PUBLIC_API_URL=
```

4. Build the project:

```bash
npm run build
```

5. Start the server:

```bash
npm start
```

### Development

- Run backend in development mode: `cd server && npm run dev`
- Run frontend in development mode: `cd client && npm run dev`
- Run tests: `npm test`
- Run linting: `npm run lint`
