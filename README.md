# TaxSavvy

## Description
Taxsavvyy is a project designed to provide various features related to tax savings, budgeting, and financial insights. It includes:

- A backend server for handling requests.
- A frontend application for user interaction.
- An AI chatbot for answering tax-related queries.

## Installation

### Prerequisites
- Node.js (for frontend & backend)
- Python (for AI chatbot)
- MySQL (for database)
- MongoDB (for user and tax data storage)

### Clone the Repository
Run the following command to clone the project:

bash
git clone (repo link)
cd Taxsavvyy


### Backend Setup
Navigate to the Backend directory:

bash
cd Backend


Install dependencies:

bash
npm install


Download the TaxSavvy.sql file from the repository.

Create a MySQL database named TaxSavvy:

sql
CREATE DATABASE TaxSavvy;


Import the database structure:

bash
mysql -u username -p TaxSavvy < path/to/TaxSavvy.sql


Create a .env file in the Backend directory and add the following:

ini
DATABASE_URL=your_database_connection_string
API_KEY=your_api_key


### MongoDB Setup
1. Install MongoDB on your machine.
2. Create a new database named TaxSavvyDB.
3. Update your .env file with the MongoDB connection string:

ini
MONGODB_URL=your_mongodb_connection_string


### Frontend Setup
Navigate to the Frontend directory:

bash
cd frontend


Install dependencies:

bash
npm install


## Usage

### Running the Backend
Navigate to the Backend directory:

bash
cd Backend


Start the backend server:

bash
node server.js


To run the AI chatbot:

bash
python AIchatbot/app.py


### Running the Frontend
Navigate to the Frontend directory:

bash
cd frontend


Start the frontend application:

bash
npm start


Open your browser and visit:


http://localhost:3000


## Environment Variables
Ensure the following environment variables are set:

ini
DATABASE_URL=your_database_connection_string
API_KEY=your_api_key
MONGODB_URL=your_mongodb_connection_string


Replace your_database_connection_string with your MySQL connection string.

Replace your_api_key with the necessary API key.

Replace your_mongodb_connection_string with your MongoDB connection string.
