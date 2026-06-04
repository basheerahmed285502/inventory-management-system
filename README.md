# Inventory Management System

## Overview

A backend inventory management system built using:

- Node.js
- Express.js
- TypeScript
- SQLite
- Zod

## Features

### Product Management

- Create products
- Unique SKU validation
- Price validation
- Stock validation

### Product Listing

- Get all products

### Sales Management

- Record product sales
- Prevent overselling
- Automatically update stock

### Inventory Summary

- Total products
- Total stock units
- Total inventory value

## Setup Instructions

1. Clone the repository
2. Run npm install
3. Run npm run dev
4. Use Thunder Client or Postman to test the APIs

## API Endpoints

### Create Product

POST /products

### Get Products

GET /products

### Record Sale

POST /sales

### Inventory Summary

GET /summary

## Database

SQLite

Database file:

inventory.db

## Design Decisions

- TypeScript for type safety
- SQLite for easy setup
- Zod for request validation
- Express for API development

## Architecture

The application follows a simple controller-based architecture:

routes → controllers → database

This approach was chosen to keep the codebase simple and maintainable for a small assessment project.

## Database Choice

SQLite was chosen because:

- No separate database server is required
- Easy for reviewers to run locally
- Suitable for small inventory applications

## Trade-offs

- Focused on backend functionality instead of building a frontend

## AI Usage Disclosure

AI tools were used for learning, code review, and implementation guidance. All code was reviewed, tested, and understood before submission.