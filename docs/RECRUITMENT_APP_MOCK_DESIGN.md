# Recruitment & Position Alignment App (Mock Design)

## Overview
A web application to ensure fair, transparent, and merit-based recruitment for Philippine government positions, with AI-powered applicant-job matching and anti-patronage features.


## Core Features (MVP)


---

## Legal Alignment Checklist

- [x] Merit-based recruitment and selection (CSC rules, ORAOHRA)
- [x] Public posting of vacancies (RA 7041)
- [x] Structured, auditable recruitment process (CSC, ORAOHRA)
- [x] Anonymized initial screening to reduce bias (CSC, RA 6713)
- [x] Transparent shortlisting and decision logging (CSC, ORAOHRA)
- [x] Whistleblowing/reporting mechanism for ethical compliance (RA 6713)
- [x] Equal opportunity and non-discrimination (CSC, RA 6713)
- [x] Audit logs and compliance monitoring (CSC, ORAOHRA)

This checklist ensures the app’s features and workflows are aligned with key Philippine government legal requirements for recruitment and public service.

### 1. User Roles
- **Applicant**: Registers, submits application details, views feedback.
- **HR**: Posts jobs, reviews applicants, sees AI scores, shortlists.
- **Admin**: Manages users, audits logs, oversees compliance.

### 2. Job Posting & Application
- HR creates job posts (title, description, requirements).
- Applicants fill out structured forms (education, experience, skills).

### 3. AI Matching
- On application submission, AI matches applicant profile to job requirements.
- AI returns a suitability score and explanation.
- HR sees anonymized applicant profiles with AI scores.

### 4. Compliance & Transparency
- All actions are logged (mocked for now).
- Initial screening is anonymized.
- Audit logs are available to Admin.

### 5. Anti-Patronage
- System flags unusual shortlisting patterns.
- Whistleblowing/reporting feature (mocked UI).

---

## Mock User Flows

### Applicant
1. Register/Login
2. Browse job postings
3. Submit application (form)
4. View application status & feedback

### HR
1. Login
2. Create job posting
3. View applicants (anonymized, with AI scores)
4. Shortlist/reject applicants (with reason)
5. View audit logs

### Admin
1. Login
2. Manage users
3. View compliance/audit logs
4. Review flagged activities

---

## Mock UI Screens

## Static UI Mockups (Wireframe Descriptions)

### Login/Register
- Simple form with fields for username, password, and role selection (Applicant, HR, Admin)
- Buttons: Login, Register

### Job Listings
- List of job cards showing title, department, summary, and 'Apply' button
- Filter/search bar at the top

### Application Form
- Structured form: Personal info, education, experience, skills
- File upload for resume
- Submit button

### HR Dashboard
- Tabs: Job Posts | Applicants | AI Scores | Audit Logs
- Job Posts: List with edit/delete options
- Applicants: Table with anonymized profiles, AI suitability scores, shortlist/reject buttons
- AI Scores: Displayed as badges or progress bars

### Admin Dashboard
- Tabs: Users | Audit Logs | Flagged Actions
- Users: List with add/remove/edit options
- Audit Logs: Table of actions with timestamps
- Flagged Actions: List of unusual patterns or reports

### Whistleblowing/Report Form
- Simple form: Subject, description, optional attachment
- Submit button

## AI Scoring Simulation (Mock)
- AI suitability scores are hardcoded in the mock data (see `src/mock/aiScores.js`).
- When viewing applicants, HR sees these scores and a brief explanation (e.g., "Matched 80% of required skills").
- No real AI/ML is run; all values are static for demo purposes.


---

## Next Steps
- Build static mockups for each screen (no backend needed)
- Simulate AI scoring with hardcoded values
- Use this guide to align UI/UX and feature development

---

## Legal Alignment
- All features designed to comply with CSC rules, RA 7041, RA 6713, and ORAOHRA
- Emphasis on transparency, merit, and auditability

---

*This document serves as a blueprint for the mock design and feature overview of the recruitment app.*
