# E-Commerce Application

This is a full-stack eCommerce application developed using the MERN stack. The application features a user-friendly interface, integrated payment processing with PayPal, and an admin dashboard for managing products, orders, and users.

## Features

- User authentication and authorization
- Product listing and details
- Shopping cart and checkout process
- Payment processing with PayPal
- Admin dashboard for managing products, orders, and users
- State management with Redux Toolkit and RTK Query

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecommerce-app.git
    cd ecommerce-app
    ```

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the `backend` directory with the following content:
    ```env
    PORT= 
    MONGO_URI=
    JWT_SECRET=
    ACCESS_TOKEN_SECRET=
    ACCESS_TOKEN_EXPIRY=
    REFRESH_TOKEN_SECRET=
    REFRESH_TOKEN_EXPIRY=
    PAYPAL_CLIENT_ID=
    ```

4. Start the backend server:
    ```bash
    npm run backend
    ```

### Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install the necessary packages:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage

Once both servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.


## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [PayPal](https://www.paypal.com/)
