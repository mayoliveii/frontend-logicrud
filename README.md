# Frontend LogiCRUD
![Frontend img](./public/images/frontend-img.png)

## Description 
This project is a CRUD (Create, Read, Update, Delete) application for efficient management of cargo transportation vehicles. It provides a user-friendly interface for handling vehicle information, including registration, updates, and removal. 

## Features

- **Vehicle Listing Screen:** Displays a comprehensive list of registered vehicle categories.
- **Vehicle Management:** Allows users to effortlessly add, update, or delete vehicle category records.
- **Search Functionality:** Includes a search bar on the vehicle category listing screen for filtering vehicles by title or ID.
- **Date Filter:** Enables filtering vehicle categories based on creation date, allowing users to view categories within specific date ranges.

## Image Storage
The images used in this application are stored in Amazon S3.

## Application Structure
The project structure follows a modular approach for better organization and scalability.

```
frontend-logicrud/
|-- src/
|   |-- public/
|-- src/
|   |-- apiServices/
|   |-- components/
|   |-- helpers/
|   |-- main.tsx
|-- tsconfig.json
|-- .env
|-- package.json
|-- ..others configurations
```

- apiServices/: Manages API requests using Axios.
- components/: Contains React components for the application.
- main.tsx: Main application component.

## Run the project
Clone the repository:
```
git clone https://github.com/editaraqui
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the browser and navigate to:
```
http://localhost:5173/
```

## Deploy on Vercel
This project can also be accessed through the Vercel deployment at:
> TODO: colocar link aqui

## Backend Integration
- The application communicates with a [backend](https://github.com/mayoliveii/backend-logicrud) to perform category-related operations.
- Backend endpoints handle user creation, retrieval, updating, and deletion.
- Backend queries support searching users by title, id and filtering by creation date.
