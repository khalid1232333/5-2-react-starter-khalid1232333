// src/App.jsx
import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* ✅ Pass props here */}
          <StudentCard name="Khalid Alenazy" id="202014460" dept="Software Engineering" />
          <StudentCard name="Sara Ahmed" id="202067890" dept="Computer Science" />
          <StudentCard name="Ali Hassan" id="202032145" dept="Information Security" />
        </div>
      </main>
    </div>
  );
}

export default App;

