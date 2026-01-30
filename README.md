# Lendsqr Dashboard

A frontend dashboard application built as part of the Lendsqr Frontend Engineering assessment.  
The app replicates the Lendsqr-fe-test figma screens which are the dashboard, users page, users-details page and the login page with users flow, users listing, user details view, responsive layout, and state management to store users data globally with zustand.

---

## 🚀 Live Preview

https://praise-elijah-lendsqr-fe-test.vercel.app/

---

## 🛠️ Tech Stack

- **Next.js** – React framework for routing, performance, and scalability
- **TypeScript** – Type safety and better developer experience
- **SCSS Modules** – Scoped, maintainable styling
- **Zustand** – Lightweight global state management
- **/ Fetch API** – API consumption
- **ESLint & Prettier** – Code consistency and quality

---

## 📁 Project Structure

src/
│── app/ # App router (Next.js)
|
---(auth)
---(root)
---(api)
│── components/ # Reusable UI components
│── store/ # Zustand stores
│── styles/ # Global styles, variables & mixins
│── lib/ # Helpers, API functions
│── types/ # Shared TypeScript types

This structure follows a **feature-first approach** to keep the codebase scalable and easy to maintain as the application grows.

---

## 🧠 Architectural Decisions

### 1️⃣ Why Zustand for State Management

Zustand was chosen over alternatives like local storage and indexDb because:

- **Security Reasons** – Sensitive data should never be stored in local storage as it is easily accessible and vulnerable to attacks.
- **Easy to access and manage** – The users data, updating the user data and managing the data is much more modern in ZUSTAND. since it deals with slice of the data stored in the state.
- **Minimal boilerplate** – simple, readable store definitions
- **Excellent performance** – only components that use a slice re-render
- **No provider hell** – stores work without wrapping the app
- **Scales well** for medium-sized dashboards like this one

---

### 2️⃣ Why Store Client Data in Zustand Instead of Local Storage

While `localStorage` is useful, it was **intentionally avoided** for client data storage in this project for the following reasons:

#### ❌ Problems with Local Storage

- Data is **always stringified**
- No reactivity — UI does not automatically update when data changes
- Risk of **stale or unsynced state**
- Not available during **server-side rendering**
- Can easily lead to logic duplication and bugs

#### ✅ Benefits of Zustand

- Reactive state updates
- Centralized source of truth
- Cleaner logic for user selection and details
- Works seamlessly with Next.js rendering flow
- Easier to persist later if needed (via middleware)

**Zustand manages UI state** — which keeps responsibilities clear and the app predictable.

---

## 🔌 API Integration

### API Provider – MockAPI.io

This project uses **MockAPI.io** as the backend data source for user information.

MockAPI was chosen because:

- It allows rapid creation of RESTful endpoints
- It allows creating data fields for the users similar to a real product backend according to the types i am recieving and working with
- No backend setup is required
- It is suitable for frontend-focused assessments and prototyping

---

### 📊 User Data Limitation (Free Plan)

MockAPI’s free plan limits the number of records (100) returned per resource.  
As a result, **only 100 users** were created and consumed in this application.

This limitation influenced:

- Pagination expectations
- Table performance considerations
- Overall data handling strategy

The application is built in a way that can easily scale if the API plan or backend changes.

---

### 🔐 API Security & Request Handling

To avoid exposing the backend API directly to the client:

- The MockAPI base URL is stored in **environment variables** (`.env`)
- The API URL is **never hardcoded** in client components
- All external requests are proxied through a **Next.js route handler**

This ensures better security and mirrors real-world backend communication patterns.

---

### 🧭 Next.js Route Handler (`route.ts`)

Instead of calling MockAPI directly from the browser, a custom API route was created using next route handler.

Responsibilities of this route:

- Acts as a middle layer between the frontend and MockAPI
- Handles all outgoing requests to the external API
- Prevents direct exposure of the backend API URL
- Makes future authentication or request transformation easy to add

This approach improves maintainability and security.

---

### 🗂️ Environment Variables

The MockAPI base URL is stored in:

- .env file which is kept away from the code base on commits and only exposed to the hosting provider (vercel) on build.
- .env example: MOCK_API_BASE_URL=https://mockapi.io/your-endpoint....

## 👥 Users Feature

- Users are fetched from the provided API
- Data is displayed in a responsive table
- Selecting a user stores the selected user in Zustand
- User details page consumes Zustand state directly

This avoids unnecessary refetching and improves perceived performance.

---

## 🎨 Styling Approach

- **SCSS Modules** for component-level styling
- Global variables and mixins for:
  - Colors
  - Spacing
  - Typography
  - Breakpoints
- Layout built with Flexbox
- Fully responsive across desktop, tablet, and mobile

---

## ⚙️ Build & Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Holardeeps/lendsqr-fe-test
cd lendsqr-fe-test


npm install
# or
yarn install

npm run dev
# or
yarn dev

## 1️ The app would be available at:
 http://localhost:3000


## To preview the production build
npm run start


🧪 Testing Considerations

.      *    Components were built to be easily testable
.        *   Business logic is separated from UI where possible
.       *Zustand stores can be tested independently


📌 Assumptions & Limitations

.       **  Backend authentication is mocked

        ** API responses are assumed to be stable

        ** No role-based access control implemented

.       ** Focus is on frontend architecture and UX


🧑‍💻 Author

Praise Elijah
Frontend Engineer
 .  GitHub : https://github.com/Holardeeps

 • LinkedIn : https://linkedin.com/in/praise-elijah

📄 License

This project is for assessment and educational purposes.
```
