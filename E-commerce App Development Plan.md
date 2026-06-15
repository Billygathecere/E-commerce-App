The message "document cannot be found" happens because the link I provided was a generic placeholder rather than a live link to your Google Drive.  
As an AI, I can draft the entire document for you directly here in our chat, but I can't automatically generate external web links or publish files to your personal Google account without a direct connection tool.  
To fix this, **I have written out the complete, structured Project Plan below.** You can simply copy and paste this text directly into a new Google Doc or text editor to save it.

# **E-commerce Project Implementation Plan**

## **1\. Technical Architecture Stack**

To build a scalable, highly performant application capable of handling real-time transactions, the following unified tech stack is selected:

* **Frontend & Backend Framework:** **Next.js (App Router)** – Provides server-side rendering (SSR) for fast product page loads, SEO optimization, and integrated API routes to handle backend logic.  
* **Authentication & User Management:** **Supabase** – Manages secure user registration, login sessions, password resets, and Role-Based Access Control (RBAC) separating buyers from admins.  
* **Primary Database:** **MongoDB** – A flexible NoSQL database to store collections for products, user profiles, orders, and product reviews.  
* **Payment Gateway Integration:** **M-Pesa Daraja API** – Safaricom’s integration to process local mobile money transactions, including STK Push (C2B) capabilities, validation, and callback handlers.  
* **Hosting & Deployment:** **Vercel** – Optimized platform for Next.js applications, offering seamless deployment, global CDN distribution, and serverless function hosting for API endpoints.

## **2\. Role-Based Project Structure & Requirements**

### **A. User / Buyer Flow**

The customer-facing application focuses on friction-free navigation and secure checkout operations:

1. **Authentication:** Sign up, log in, or browse as a guest.  
2. **Product Catalog:** Browse products by category, utilize search filters, view individual product descriptions, and read customer reviews.  
3. **Cart Management:** Add, update quantities, or remove products from a persistent shopping cart.  
4. **Checkout & Payment:** Input delivery details and initiate an M-Pesa STK Push payment request.  
5. **Order Tracking:** Access a dashboard to view order history, purchase invoices, and real-time fulfillment status (e.g., Pending, Dispatched, Delivered).

### **B. Admin / Seller Dashboard**

The administrative interface allows managing business logic, inventories, and processing financial transactions:

1. **Product Management (CRUD):** Create, Read, Update, and Delete product listings (including image uploads, pricing, and stock level controls).  
2. **Order Fulfillment:** View incoming orders, update processing status, and trigger customer delivery alerts.  
3. **User Oversight:** Monitor active accounts and handle customer service escalations.  
4. **Analytics & Reporting:** Track sales revenue, order volumes, and popular product trends.

## **3\. Core System Workflows**

### **Workflow 1: Checkout and M-Pesa Payment Processing**

This workflow outlines how a transaction moves from a user's cart to a confirmed order in the database.

\[Buyer: Click Checkout\]   
         │  
         ▼  
\[Next.js API: Request Access Token from Daraja API\]  
         │  
         ▼  
\[Next.js API: Initiate STK Push Request to Safaricom\]  
         │  
         ▼  
\[Buyer: Receives M-Pesa SIM PIN Prompt on Phone\] ──(Enters PIN)──► \[Safaricom Processes\]  
                                                                        │  
                                                                        ▼  
\[Next.js Webhook Endpoint: Receives Secure JSON Callback\] ◄─────────────┘  
         │  
         ├─── If Success ──► \[Update Order to 'Paid' in MongoDB\] ──► \[Clear Cart & Show Success Page\]  
         │  
         └─── If Fail    ──► \[Update Order to 'Cancelled' in MongoDB\] ──► \[Alert User of Failure\]

* **Step 1:** The user reviews their cart, provides a valid phone number, and clicks "Pay with M-Pesa".  
* **Step 2:** The Next.js backend contacts the Safaricom Daraja API using OAuth credentials to fetch a secure access token.  
* **Step 3:** The backend triggers an STK Push (LNMO \- Lipa Na M-Pesa Online) request to Safaricom, sending the amount, phone number, and a unique callback URL.  
* **Step 4:** Safaricom sends a push notification directly to the user’s mobile device. The user enters their secret M-Pesa PIN.  
* **Step 5:** Safaricom processes the funds and sends an asynchronous post-payment notification (JSON format) to the application's Next.js callback API route.  
* **Step 6:** The API route validates the response. If successful, the order status in MongoDB changes from Pending to Paid, inventory is adjusted, and a success screen is displayed to the user.

### **Workflow 2: Order Fulfillment**

* **Step 1:** Once payment is confirmed, the order appears on the Admin Dashboard as Awaiting Shipment.  
* **Step 2:** The admin packages the items and updates the status to Dispatched, appending any carrier tracking notes.  
* **Step 3:** The database changes update the user’s order page instantly, letting them track the delivery progress up to the final status of Delivered.

## **4\. Next.js Project Directory Blueprint**

The following file structure organizes your code logically according to modern Next.js development standards:

Plaintext  
my-ecommerce-app/  
├── src/  
│   ├── app/                        \# Next.js App Router (Pages & API Routes)  
│   │   ├── layout.tsx              \# Main layout containing global providers  
│   │   ├── page.tsx                \# E-commerce Homepage (Featured products)  
│   │   ├── auth/                   \# Authentication Pages  
│   │   │   ├── login/page.tsx      \# Sign-in UI  
│   │   │   └── signup/page.tsx     \# Account registration UI  
│   │   ├── products/               \# Product Discovery Routes  
│   │   │   ├── page.tsx            \# All products grid / Catalog  
│   │   │   └── \[id\]/page.tsx       \# Dynamic Single Product Detail view  
│   │   ├── cart/page.tsx           \# Shopping Cart Summary Page  
│   │   ├── checkout/page.tsx       \# Shipping information & payment trigger page  
│   │   ├── admin/                  \# Protected Admin Views  
│   │   │   ├── dashboard/page.tsx  \# Sales overview analytics  
│   │   │   └── products/page.tsx   \# Inventory management table  
│   │   └── api/                    \# Backend API Endpoints  
│   │       ├── products/route.ts   \# GET/POST handler for database items  
│   │       ├── payments/stk/route.ts\# Initiates M-Pesa Daraja STK Push  
│   │       └── payments/callback/route.ts \# Receives secure Safaricom payment receipts  
│   │  
│   ├── components/                 \# Reusable UI Elements  
│   │   ├── Navbar.tsx              \# Navigation bar with shopping cart badge  
│   │   ├── ProductCard.tsx         \# Standardized layout for item display  
│   │   ├── Footer.tsx              \# Site footer  
│   │   └── ui/                     \# Basic design atomic units (buttons, inputs)  
│   │  
│   ├── lib/                        \# Services & Core Utilities  
│   │   ├── mongodb.ts              \# MongoDB Mongoose database connection client  
│   │   ├── supabaseClient.ts       \# Supabase Client initialization for Auth middleware  
│   │   └── mpesa.ts                \# Helper functions to fetch Daraja tokens & calculate passwords  
│   │  
│   ├── models/                     \# MongoDB Database Schemas  
│   │   ├── Product.ts              \# Defines product properties, categories, and stock  
│   │   └── Order.ts                \# Defines transactional details, status, and buyer IDs  
│   │  
│   └── styles/  
│       └── globals.css             \# Tailwind CSS global styles directive  
│  
├── public/                         \# Public assets (logos, icons)  
├── .env.local                      \# Environment variables (API keys, DB URIs)  
├── package.json                    \# Dependencies listing  
└── tailwind.config.js              \# Configuration file for styling properties  
