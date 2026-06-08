// ══════════════════════════════════════════════
// mockData.js — Centralized Data Layer
// Smart Campus Hub | MAJU BS-CS Semester Project
// ══════════════════════════════════════════════

export const USERS = [
  { id: 1, name: "Maaz", email: "maaz@maju.edu.pk", password: "123456", roll: "FA23-BSCS-0170" },
  { id: 2, name: "Hasnain Raza", email: "hasnain@maju.edu.pk", password: "123456", roll: "FA23-BSCS-XXXX" },
];

export const SCHEDULE = [
  { id: 1, day: "Monday",    subject: "Mobile App Development", time: "08:00 - 09:30", room: "CS-Lab 1",  teacher: "Dr. Ahmed" },
  { id: 2, day: "Monday",    subject: "Data Structures",         time: "10:00 - 11:30", room: "Room 202",  teacher: "Sir Kamran" },
  { id: 3, day: "Tuesday",   subject: "Software Engineering",    time: "08:00 - 09:30", room: "Room 101",  teacher: "Ms. Zara" },
  { id: 4, day: "Tuesday",   subject: "Database Systems",        time: "11:00 - 12:30", room: "CS-Lab 2",  teacher: "Dr. Farhan" },
  { id: 5, day: "Wednesday", subject: "Mobile App Development", time: "08:00 - 09:30", room: "CS-Lab 1",  teacher: "Dr. Ahmed" },
  { id: 6, day: "Wednesday", subject: "Computer Networks",       time: "02:00 - 03:30", room: "Room 305",  teacher: "Sir Bilal" },
  { id: 7, day: "Thursday",  subject: "Software Engineering",    time: "08:00 - 09:30", room: "Room 101",  teacher: "Ms. Zara" },
  { id: 8, day: "Thursday",  subject: "Calculus II",             time: "10:00 - 11:30", room: "Room 204",  teacher: "Sir Ali" },
  { id: 9, day: "Friday",    subject: "Database Systems",        time: "08:00 - 09:30", room: "CS-Lab 2",  teacher: "Dr. Farhan" },
  { id:10, day: "Friday",    subject: "Data Structures",         time: "11:00 - 12:30", room: "Room 202",  teacher: "Sir Kamran" },
];

export const ASSIGNMENTS = [
  { id: 1, title: "React Native Calculator App",   subject: "Mobile App Development", dueDate: "2025-06-15", priority: "High",   status: "Pending",   description: "Build a working calculator using React Native with all basic operations." },
  { id: 2, title: "ER Diagram for Library System", subject: "Database Systems",        dueDate: "2025-06-12", priority: "High",   status: "Pending",   description: "Design a full ER diagram for a University Library management system." },
  { id: 3, title: "Linked List Implementation",    subject: "Data Structures",         dueDate: "2025-06-18", priority: "Medium", status: "Completed", description: "Implement singly and doubly linked list with all CRUD operations in Java." },
  { id: 4, title: "Use Case Diagram — Banking App",subject: "Software Engineering",    dueDate: "2025-06-20", priority: "Medium", status: "Pending",   description: "Draw a complete UML Use Case Diagram for an online banking application." },
  { id: 5, title: "Subnet Mask Exercises",         subject: "Computer Networks",       dueDate: "2025-06-10", priority: "Low",    status: "Completed", description: "Solve 10 subnetting problems from Chapter 4." },
  { id: 6, title: "Semester Project Presentation", subject: "Mobile App Development", dueDate: "2025-06-25", priority: "High",   status: "Pending",   description: "Final presentation of Smart Campus Hub React project." },
];

export const NOTICES = [
  { id: 1, title: "Mid-Term Exam Schedule Released",  date: "2025-06-01", category: "Exam",    urgent: true,  body: "Mid-term examinations will be held from June 16 to June 22. Check the examination portal for your individual schedule. All students must bring their ID cards." },
  { id: 2, title: "Semester Project Submission",      date: "2025-06-03", category: "Project", urgent: true,  body: "All semester projects must be submitted by June 25, 2025. Late submissions will result in grade deductions. Upload your GitHub link on the LMS." },
  { id: 3, title: "Library Hours Extended",           date: "2025-06-04", category: "General", urgent: false, body: "The university library will remain open until 10:00 PM during exam season. Students are encouraged to utilize this facility." },
  { id: 4, title: "Campus Wi-Fi Maintenance",         date: "2025-06-05", category: "IT",      urgent: false, body: "Campus Wi-Fi will be down for maintenance on Sunday June 8 from 2:00 AM to 6:00 AM. Plan your work accordingly." },
  { id: 5, title: "Sports Gala Registration Open",    date: "2025-06-02", category: "Event",   urgent: false, body: "Annual Sports Gala 2025 registration is now open. Students can register for cricket, football, badminton, and table tennis. Last date June 12." },
];

export const STUDY_MATERIALS = [
  { id: 1, title: "React Hooks — Complete Guide",        subject: "Mobile App Development", type: "PDF",   uploadedBy: "Dr. Ahmed",   date: "2025-05-28", size: "2.4 MB" },
  { id: 2, title: "SQL Joins & Transactions Notes",      subject: "Database Systems",        type: "PDF",   uploadedBy: "Dr. Farhan",  date: "2025-05-25", size: "1.8 MB" },
  { id: 3, title: "Sorting Algorithms Cheatsheet",       subject: "Data Structures",         type: "PDF",   uploadedBy: "Sir Kamran",  date: "2025-05-22", size: "0.9 MB" },
  { id: 4, title: "Chapter 3 — OSI Model Slides",       subject: "Computer Networks",        type: "PPTX",  uploadedBy: "Sir Bilal",   date: "2025-05-30", size: "5.2 MB" },
  { id: 5, title: "UML Diagrams Reference Sheet",       subject: "Software Engineering",     type: "PDF",   uploadedBy: "Ms. Zara",    date: "2025-06-01", size: "1.1 MB" },
  { id: 6, title: "Android Activity Lifecycle Diagram", subject: "Mobile App Development",   type: "Image", uploadedBy: "Dr. Ahmed",   date: "2025-06-02", size: "0.4 MB" },
];

export const EVENTS = [
  { id: 1, title: "Semester Project Showcase",     date: "2025-06-25", time: "10:00 AM", venue: "CS Auditorium",   category: "Academic",  description: "Final presentations of all BS-CS semester projects. Faculty judges will evaluate." },
  { id: 2, title: "Annual Sports Gala 2025",       date: "2025-06-28", time: "08:00 AM", venue: "Sports Complex",   category: "Sports",    description: "Annual inter-department sports competition. Cricket, Football, Badminton & Table Tennis." },
  { id: 3, title: "Tech Talk: AI & Future Jobs",   date: "2025-06-18", time: "02:00 PM", venue: "Seminar Hall 1",   category: "Tech",      description: "Guest lecture by industry expert on Artificial Intelligence career pathways." },
  { id: 4, title: "Eid Milan Party 2025",          date: "2025-06-20", time: "05:00 PM", venue: "Main Lawn",        category: "Cultural",  description: "University Eid celebration with food stalls, performances, and games for all students." },
  { id: 5, title: "Workshop: GitHub for Students", date: "2025-06-14", time: "11:00 AM", venue: "CS-Lab 3",         category: "Workshop",  description: "Hands-on workshop on Git version control, branching, and collaboration workflows." },
];
