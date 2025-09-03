# 🚖 Ride Management System – Frontend

A production-grade, fully responsive, and role-based full-stack application for
a ride booking platform (similar to Uber or Pathao). This is the frontend
repository, built with React and Redux Toolkit, which interacts with a dedicated
Node.js/Express backend API.

---

# Live Link:

https://tm-ride.vercel.app/

# BackEnd Repository :

https://github.com/tarekmonowar/Ride-Management-BackEnd.git

## 📋 Project Overview

This project provides a complete and intuitive UI/UX for a ride booking system,
catering to **Riders**, **Drivers**, and **Admins** with distinct, tailored
experiences. The application is built to be a robust, polished, and performant
platform that handles state management, API integration, and user authentication
seamlessly.

---

## ✨ Core Features

### 1. **Responsive Design & Visual Consistency**

- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **Sticky Navigation:** A consistent navigation bar with at least 6 menu
  options and a dropdown for profile/settings.
- **Performance:** Implements lazy-loading and skeleton loaders for a smooth
  user experience.
- **Data-Driven UI:** Populated with realistic data instead of placeholder text.

### 2. **Public Landing Pages**

- **Homepage:** A landing page with at least 5 distinct sections, including a
  Hero Banner, How-it-works, and Testimonials.
- **Other Pages:** Dedicated pages for "About Us," "Features," "Contact," and
  "FAQ," accessible without authentication.

### 3. **Authentication & Authorization**

- **Role-Based Access:** JWT-based login and registration with specific roles
  (Rider, Driver, Admin).
- **Persistent State:** Maintains user authentication state across sessions.
- **Account Status Handling:** Users with a "blocked" or "suspended" status are
  redirected to a dedicated status page.
- **Driver Availability:** An "Offline" toggle for drivers that restricts access
  to ride-request-related features while still allowing access to other
  dashboard functionalities.

### 4. **Rider Features**

- **Ride Booking:** A user-friendly form for requesting a ride with fare
  estimation and payment method selection.
- **Live Tracking:** (Optional) Real-time ride tracking on a map.
- **Ride History:** A paginated list of past rides with search and filter
  options.
- **Profile Management:** Options to edit personal details and change the
  password.

### 5. **Driver Features**

- **Availability Toggle:** Simple "Online/Offline" switch to manage ride
  requests.
- **Active Ride Management:** A clear workflow to update a ride's status from
  `Accepted` to `Completed` or `Cancelled`.
- **Earnings Dashboard:** A visual breakdown of earnings with charts (daily,
  weekly, monthly).
- **Profile Management:** Manage vehicle and personal details.

### 6. **Admin Features**

- **User Management:** Tools to search, filter, and manage user accounts (block,
  unblock, suspend).
- **Ride Oversight:** A comprehensive view of all rides with advanced filtering
  capabilities.
- **Analytics:** A dashboard with data visualizations for key metrics like ride
  volume and revenue.

### 7. **General Enhancements**

- **SOS Button:** A floating SOS button visible during an active ride that
  allows users to notify emergency contacts or call for help.
- **Error Handling:** Strict form validation with clear error messages and
  user-friendly toast notifications for success and error states.
- **Data Visualization:** Dynamic charts and tables for earnings and analytics
  dashboards using libraries like `recharts`.

---

## 🛠️ Technology Stack

- **Frontend Framework:** React
- **Routing:** React Router
- **State Management:** Redux Toolkit, RTK Query
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend API:** Node.js/Express, MongoDB, JWT (not included in this repo)
- **Optional Libraries:**
  - `recharts` for data visualization.
  - `react-hot-toast` for notifications.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your
local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/tarekmonowar/Ride-Management-FrontEnd.git
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

## Contact Information

For any questions or support, reach out via email:

**Email:** [tarekmonowar353@gmail.com](mailto:tarekmonowar353@gmail.com)
