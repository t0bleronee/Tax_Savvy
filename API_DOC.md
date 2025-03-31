# TaxSavvy API Documentation

## Introduction
The TaxSavvy API provides a suite of endpoints designed to help users manage their finances and taxes efficiently. The key functionalities include:
- **User Authentication**: User registration and login.
- **Tax Calculations**: Compute taxes for both old and new tax regimes based on user input.
- **Budget Insights**: Generate personalized budget reports and financial tips.
- **Scheme Finder**: Recommend government schemes based on user profiles and income.
- **AI Chatbot**: AI-powered chatbot to answer tax-related queries.

## Base URL
```
http://localhost:5000
```

---
## Authentication Endpoints

### 1. Signup
**Endpoint:** `POST /auth/signup`

**Request Body:**
```json
{
  "name": "JohnDoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Responses:**
- **Success:**
```json
{
 "success": true,
 "message": "User registered successfully"
}
```
- **User Already Exists:**
```json
{
  "success": false,
  "message": "User already exists"
}
```
- **Internal Server Error:**
```json
{
  "success": false,
  "message": "Error registering user"
}
```

### 2. Login
**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Responses:**
- **Success:**
```json
{
  "success": true,
  "message": "Login successful"
}
```
- **User Not Found:**
```json
{
  "success": false,
  "message": "User not found"
}
```
- **Incorrect Password:**
```json
{
  "success": false,
  "message": "Incorrect password"
}
```
- **Internal Server Error:**
```json
{
  "success": false,
  "message": "Error logging in"
}
```

---
## Tax Calculation API

### 1. Save Tax Data
**Endpoint:** `POST /tax/save`

**Request Body:**
```json
{
    "email": "user@example.com",
    "age": 30,
    "salary": 500000,
    "interestIncome": 10000,
    "rentalIncome": 20000,
    "digitalAssetsIncome": 5000,
    "deductions80C": 150000,
    "medicalInsurance80D": 25000,
    "npsEmployer80CCD2": 50000,
    "otherDeductions": 5000
}
```

**Response:**
```json
{
    "success": true,
    "oldRegime": { "taxPayable": 25000, "netIncomeAfterTax": 525000, "effectiveTaxRate": "4.55%" },
    "newRegime": { "taxPayable": 35000, "netIncomeAfterTax": 515000, "effectiveTaxRate": "6.36%" }
}
```

### 2. Get Tax Data
**Endpoint:** `GET /tax/{email}`

**Response:**
```json
{
    "success": true,
    "data": {
        "email": "user@example.com",
        "age": 30,
        "oldRegime": {...},
        "newRegime": {...},
        "createdAt": "2025-03-30T15:00:00Z"
    }
}
```

### 3. Update Tax Data
**Endpoint:** `PUT /tax/{id}`

**Request Body:**
```json
{
    "age": 31,
    "salary": 550000,
    "interestIncome": 15000,
    "otherIncome": 7000,
    "deductions80C": 160000
}
```

**Response:**
```json
{
    "success": true,
    "message": "Tax data updated successfully"
}
```

---
## Financial Tips API

### Get Financial Tips
**Endpoint:** `GET /financial-tips/{email}`

**Response:**
```json
{
  "success": true,
  "email": "user@gmail.com",
  "tips": [
    "Increase investments under Section 80C up to ₹1.5 lakh.",
    "Consider increasing health insurance premium under Section 80D to ₹25,000."
  ],
  "count": 2,
  "lastUpdated": "2025-03-30T12:45:00.000Z"
}
```

---
## Budget Report API

**Base URL:** `https://api.taxsavvy.com`

### Fetch Budget Report
**Endpoint:** `GET /api/budget-report?profession={profession}&ageGroup={ageGroup}&email={email}`

**Response:**
```json
{
  "status": "success",
  "data": {
    "financialImpact": {
      "taxSavings": 25000,
      "Tax payable": 30000
    },
    "socialImpact": "Your tax savings contribute to infrastructure projects."
  }
}
```

---
## AI Chatbot API

### 1. Chat with AI
**Endpoint:** `POST /chat`

**Request Body:**
```json
{
  "message": "What is the standard deduction?"
}
```

**Response:**
```json
{
  "response": "The standard deduction for salaried employees is Rs. 50,000."
}
```

### 2. Get Chat History
**Endpoint:** `GET /history`

**Response:**
```json
{
  "chat_history": [
    {
      "text": "What is the standard deduction?",
      "sender": "user"
    },
    {
      "text": "The standard deduction is Rs. 50,000.",
      "sender": "bot"
    }
  ]
}
```

---
## Budget Features API

### Fetch Financial Tips
**Endpoint:** `GET /api/tips`

**Response:**
```json
[
  { "id": 1, "title": "Save Money", "description": "Cut unnecessary expenses." },
  { "id": 2, "title": "Invest Wisely", "description": "Diversify investments." }
]
```

**Error:** `500 - Failed to load tips.json`

---
## Authentication & Security
- In production, authentication should use token-based security.
- Ensure `.env` contains a valid `GEMINI_API_KEY` for AI-based responses.

---
## Errors & Status Codes
- `200 OK` - Successful response.
- `400 Bad Request` - Invalid input.
- `401 Unauthorized` - Authentication required.
- `404 Not Found` - Data not available.
- `500 Internal Server Error` - Server-side failure.

This documentation provides an overview of the API functionality, endpoints, and expected request/response structures.

