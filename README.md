⏰ Digital Clock Web Application
This is a React-based Digital Clock Web Application that combines three main features in a webpage:

Digital Clock – Displays the current system time in real-time.
Timer – Allows users to set a countdown timer with start, pause, and reset controls.
Stopwatch – Provides start, stop and reset functionalities for tracking time intervals.

The project demonstrates the use of React Hooks such as useState, useRef, and useEffect for managing state, side effects, and DOM references efficiently.

🚀 Features
Digital Clock:
Updates automatically with the current system time.
Uses useEffect to update every second.

Timer:
Set a custom countdown.
Start, pause, and reset options.

Stopwatch:
Start/stop/reset functionality.

🛠️ React Hooks Used

useState - Manages states such as current time, timer value, stopwatch running status, and laps.
Example: const [time, setTime] = useState(new Date());

useEffect - Handles side effects like updating the clock every second or running the timer countdown.
Example: Updating the digital clock with setInterval inside useEffect.

useRef
Stores the interval IDs for the timer and stopwatch without causing re-renders.
Example: const timerRef = useRef(null);

📂 Project Structure
digital-clock-app/
│-- src/
│   │-- components/
│   │   ├── DigitalClock.js
│   │   ├── Timer.js
│   │   ├── Stopwatch.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md

⚡ Getting Started
1. Clone the Repository
git clone https://github.com/your-username/digital-clock-app.git
cd digital-clock-app
2. Install Dependencies
npm install
3. Run the Application
npm start
The app will run on http://localhost:3000/ 🎉

📝 License
This project is open-source and available under the MIT License.
