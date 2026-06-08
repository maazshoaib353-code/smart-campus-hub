# 🎓 Smart Campus Hub

A modern React.js web portal for university students — combining class schedules, assignment reminders, notice board, study materials, and event announcements into one platform.

**Developed by:** Maaz (FA23-BSCS-0170) & Hasnain Raza  
**University:** Muhammad Ali Jinnah University, Karachi  
**Course:** Mobile Application Development | BS Computer Science

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 Login / Signup | Secure authentication with session management |
| 📊 Dashboard | Personalized overview with stats and recent activity |
| 📅 Class Schedule | Weekly timetable by day with subject, room, and teacher |
| 📝 Assignments | Task list with priority, due dates, and completion toggle |
| 📢 Notice Board | Campus announcements with category filtering |
| 📁 Study Materials | Course files organized by subject with view/download |
| 🎉 Events | Upcoming events with RSVP registration |
| 🔔 Notifications | Bell icon with unread badge and dropdown |

---

## 🛠 Tech Stack

- **Frontend:** React.js 18 (Create React App)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3 with Flexbox & Grid
- **State Management:** React useState / useEffect
- **Routing:** Custom `screenMap` pattern in App.jsx (no React Router)
- **Data Layer:** `mockData.js` (centralized mock data)
- **IDE:** VS Code

---

## 🚀 How to Run

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/maaz-bscs/smart-campus-hub.git

# 2. Navigate to project folder
cd smart-campus-hub

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Demo Login
```
Email:    maaz@maju.edu.pk
Password: 123456
```

---

## 📁 Project Structure

```
smart-campus-hub/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── mockData.js          # Centralized data layer
│   ├── components/
│   │   ├── Sidebar.jsx / .css   # Navigation sidebar
│   │   └── Topbar.jsx / .css    # Header with search & notifications
│   ├── screens/
│   │   ├── LoginScreen.jsx/.css # Authentication
│   │   ├── Dashboard.jsx/.css   # Main overview
│   │   ├── ScheduleScreen.jsx   # Class timetable
│   │   ├── AssignmentsScreen.jsx# Task management
│   │   ├── NoticeScreen.jsx     # Announcements
│   │   ├── StudyMaterials.jsx   # File resources
│   │   └── EventsScreen.jsx     # Campus events
│   ├── App.jsx                  # Root: routing + auth logic
│   ├── App.css                  # Global layout styles
│   ├── index.js                 # Entry point
│   └── index.css                # CSS variables & reset
└── package.json
```

---

## 🏗 Architecture

- **Pattern:** Component-Based Architecture with unidirectional data flow
- **Routing:** Manual `screenMap` object — no React Router dependency
- **Auth:** Login state held in `App.jsx` useState; screens protected by conditional rendering
- **Data:** All mock data centralized in `mockData.js` and imported per screen

---

## 📈 Future Enhancements

- Firebase backend (real-time database + auth)
- React Native mobile port
- Push notifications via Firebase FCM
- Maps API for campus navigation
- Cloud file storage

---

## 📜 License

This project is for academic purposes only.  
Muhammad Ali Jinnah University — BS Computer Science Semester Project 2025
=======
# smart-campus-hub
Smart Campus Hub — A React.js student portal for MAJU with class schedules, assignments, notice board, and study materials.

