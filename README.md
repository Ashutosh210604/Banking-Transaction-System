# Bank Ledger & Transaction System


An enterprise-level banking backend system designed for high-consistency financial transactions. This system implements a robust ledger-based architecture to manage user accounts, secure fund transfers, and maintain an immutable audit trail.

## 🚀 Key Features

- **Double-Entry Bookkeeping:** Every transaction creates corresponding Debit and Credit entries in an immutable ledger.
- **ACID Transactions:** Utilizes MongoDB Sessions to ensure fund transfers are atomic (all-or-nothing).
- **Idempotency Protection:** Prevents duplicate processing of transactions using unique idempotency keys.
- **Real-time Balance Aggregation:** Balances are derived dynamically from the ledger to prevent race conditions and balance mismatch.
- **Security First:** 
    - JWT-based authentication with cookie support.
    - Token Blacklisting for secure session termination.
    - Role-based access control (RBAC) for System/Admin users.
- **Automated Notifications:** Secure email alerts via Nodemailer and OAuth2.

## 🏗 Architecture Overview

The system follows a controller-service-model pattern:
1. **User Model:** Manages credentials and system roles.
2. **Account Model:** Represents financial buckets (Savings, System, etc.).
3. **Ledger Model:** An immutable record of every movement of value.
4. **Transaction Model:** Tracks the lifecycle (Pending/Completed/Failed) of a transfer.



## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Security:** Bcrypt.js, JSON Web Tokens (JWT)
- **Email:** Nodemailer (Gmail OAuth2)

## 🚦 Getting Started

### Prerequisites
- Node.js v16+
- MongoDB Atlas or local instance (Replica Set required for Transactions)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Ashutosh210604/Banking-Transaction-System.git](https://github.com/Ashutosh210604/Banking-Transaction-System.git)

2. Install dependencies:
   ```bash
   npm install

3.Configure environment variables in a .env file:
 
    ```.env
    
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_key
        EMAIL_USER=your_email
        CLIENT_ID=google_oauth_client_id
        CLIENT_SECRET=google_oauth_client_secret
        REFRESH_TOKEN=google_oauth_refresh_token

4. Start the server:
    ```
   npm run dev

🛡 Security & Integrity
    Immutability: The ledger entries cannot be updated or deleted via the API (enforced by Mongoose hooks).

Validation: Strict schema validation for currency formats, email patterns, and non-negative transaction amounts.




    
