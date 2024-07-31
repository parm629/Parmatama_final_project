# Property E-Commerce Project

- Student Name: Parmatma Singh
- Student Number: 8901246
- Date: July , 31,  2024

## Technology Stack

- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Database**: MongoDB (Atlas) with Mongoose

## Project Setup

1. **Project Initialization**:
    - Initialized a Git repository and pushed the project to GitHub.

2. **Frontend Setup**:
    - Organized the project structure following Next.js conventions.
    - Created directories for components, pages, and styles.

3. **Backend Setup**:
    - Configured Next.js API Routes to handle server-side logic.
    - Set up connection to MongoDB Atlas using the official MongoDB Node.js driver.

## Database Schema Design

### Products Schema
- name: String
- description: String
- price: Number
- category: String
- stock: Number
- imageUrl: String

### Users Schema 
- username: String
- password: String
- email: String

### Orders Schema
- userId: ObjectId
- products: Array of ObjectIds
- totalAmount: Number
- status: String
- createdAt: Date

### Cart Schema
- userId: ObjectId
- products: Array of {productId: ObjectId, quantity: Number}
