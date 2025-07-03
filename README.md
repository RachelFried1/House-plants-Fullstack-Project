# 🌿 Fullstack Intern Assessment – House Plants Explorer

This project is my submission for the Fullstack Intern Assessment. It is a fullstack web application built with **FastAPI** (Python) on the backend and **React** (TypeScript) on the frontend. The app fetches live data from the [House Plants2 API](https://rapidapi.com/mnai01/api/house-plants2/) and allows users to browse, search, and view detailed information about house plants.

---

## ✅ Requirements Covered

### 🔹 Frontend
- Table listing plants with `Latin name`, `Family`, and `Category`
- Dropdown filter by `Category`
- Search bar filtering by `Latin name` or `Family`
- Detail page showing full plant info and image
- Navigation from table rows to detail page
- 404 page for unknown routes or plant IDs
- Loading indicators and error messages
- Responsive and accessible UI

### 🔹 Backend
- `/plants`: Returns simplified plant data for the table
- `/plants/{plant_id}`: Returns full details for a specific plant
- Robust error handling with status codes (`404`, `500`)
- CORS configuration for frontend integration
- Unit tests included for backend routes

---

## 🧠 How I Approached the Task

### Backend
- Built with **FastAPI** for speed, async support, and built-in API docs
- Designed minimal REST endpoints to match frontend requirements
- Handled inconsistent/missing fields from the RapidAPI response with data cleaning
- Added strict error handling for not-found plants and upstream API failures
- Enabled CORS using environment variables to allow frontend access
- Included a `mock_data.py` file for reference only — **not used** in the actual logic, as per recommended practice

### Frontend
- Built with **React + TypeScript** and bootstrapped using **Vite**
- Used **Redux Toolkit** for managing plant data, filters, loading, and error states
- Created reusable components for table rows, filters, search, and UI states
- Implemented page routing with **React Router v6**
- Styled the UI using **Tailwind CSS** and **Radix UI** for a clean, accessible layout
- Focused on UX polish: loading spinners, error messages, and 404 handling

---

## 📚 Resources Used

- Official documentation for:
  - [FastAPI](https://fastapi.tiangolo.com/)
  - [React](https://react.dev/)
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Radix UI](https://www.radix-ui.com/)
- GitHub Copilot and ChatGPT for implementation guidance and troubleshooting

---

## ⏱ Time Spent

The project was completed over several sessions across a few days. A significant portion of the time was spent handling inconsistent or missing data from the RapidAPI House Plants API to ensure the frontend receives clean, usable data.

---

## 🚀 How to Run the App

### Backend (FastAPI)
1. Install dependencies:
   ```bash
   pip install -r requirements.txt


2. Create a `.env` file or copy from the included `.env.example`:

   ```env
   RAPIDAPI_KEY=your_rapidapi_key
   FRONTEND_URL=http://localhost:3001
3. Start the Backend Development Server

    ```bash
    uvicorn main:app --reload

4. Visit the API docs: http://localhost:8000/docs

### 💻 Frontend (React)

1. Install dependencies:

   ```bash
   npm install
2. Start the Frontend Development Server

    ```bash
    npm run dev
3. Visit the app in your browser: [http://localhost:8080](http://localhost:8080)

> ⚠️ **Note:** Ensure the backend is running and accessible to the frontend at the configured base URL.

## 📝 Notes

- ✅ All requirements were fully implemented.
- 🔄 Data is always fetched live from the RapidAPI source — no local mock data is used.
- 🧪 A `mock_data.py` file is included in the backend for development reference, but it is **not used** in the actual API logic, following best practice recommendations.
- ⚙️ An `.env.example` file is provided to simplify setup.
- 💻 The UI is responsive, accessible, and styled with modern practices.

---
