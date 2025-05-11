# Cybersecurity Web App Project (Guide + Documentation)

This is a demo project for showcasing **3 common web vulnerabilities** and how to fix them. It includes:

- 🔓 Vulnerable login (SQL Injection)
- 🔓 Vulnerable comment box (XSS)
- 🔓 Insecure dashboard (Broken Authentication)

And their 🔐 **secured versions** to show how we fixed each one.

---

## 🧱 Project Folders

```
project-folder/
├── backend/        ← Node.js server (with insecure + secure 
├── frontend/       ← Next.js 15 frontend (App Router, no 
```

---

## ⚙️ 1. Requirements

Make sure this is installed:
- Node.js (https://nodejs.org)
- A browser (Chrome, Firefox, etc.)

---

## 🚀 2. Run the Backend

1. Open a terminal
2. Go to the backend folder:
   ```bash
   cd backend
   npm install
   npm run start
   ```
3. You should see:
   ```
   Server running on http://localhost:3001
   ```

---

## 💻 3. Run the Frontend

1. Open **another terminal**
2. Go to the frontend folder:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
3. Open your browser and go to:
   ```
   http://localhost:3000
   ```

---

## 🔎 4. Pages to Test

When the frontend is running, these are the routes to open:

| Route | Purpose |
|-------|---------|
| `/login` | Vulnerable login (SQL injection) |
| `/login/secure` | Fixed login |
| `/comment` | Vulnerable XSS |
| `/comment/secure` | Fixed comment |
| `/dashboard` | Unprotected dashboard |
| `/dashboard/secure` | Secure dashboard (cookie check) |
| `/register` | Register user (vulnerable) |
| `/logout` | Log out / clear cookie |

---

## 🧪 5. How to Demonstrate the Vulnerabilities

### 🔓 SQL Injection
- Go to: `http://localhost:3000/login`
- Use:
  ```
  username: ' OR '1'='1
  password: anything
  ```
- You’ll bypass the login.
- Go to: `/login/secure` and try the same — it will NOT work ✅

---

### 🔓 XSS (Cross-Site Scripting)
- Go to: `http://localhost:3000/comment`
- Enter:
  ```html
  <script>alert("XSS!")</script>
  ```
- The alert will pop up 😱
- Then go to: `/comment/secure` and try again — the script will be removed ✅

---

### 🔓 Broken Auth (Dashboard)
- Go to: `http://localhost:3000/dashboard` — even without login, you’ll see the page 😬
- Then go to: `/dashboard/secure` — if not logged in, it’ll show “Unauthorized” ✅

---

## 📸 6. What Screenshots to Take for the Report

1. SQL Injection:
   - Try `' OR '1'='1` on `/login` → show success
   - Try same on `/login/secure` → show rejection

2. XSS:
   - Submit `<script>alert()</script>` on `/comment` → show popup
   - Try again on `/comment/secure` → no popup

3. Broken Auth:
   - Go to `/dashboard` → show it opens
   - Try `/dashboard/secure` → shows "Unauthorized" unless logged in

---

## 📄 7. What to Write in the Report

**Introduction:**  
"This project demonstrates how common web vulnerabilities work and how to fix them. We show both insecure and secured versions."

**Architecture:**  
- Frontend: Next.js (App Router)
- Backend: Node.js (Express + SQLite)
- Routes grouped into secure and insecure

**Vulnerabilities:**
- SQLi: raw SQL queries replaced with prepared statements
- XSS: input sanitized using `sanitize-html`
- Auth: added cookie-based auth checking

**Testing Method:**  
Used manual input tests, observed popup alerts, API response codes, and browser console.

**Result:**  
All 3 vulnerabilities were successfully demonstrated and then fixed.

---

## ✅ 8. That's it!

Everything is ready. Just run the demo, take screenshots, and explain what happens in your report or presentation.

Let me know only if things really break — you won’t need to 😉



---

Let me know if you want this dropped into a file (`README.md`) and included in a final zip with the frontend and backend.

You’re ready for final submission now 🚀
