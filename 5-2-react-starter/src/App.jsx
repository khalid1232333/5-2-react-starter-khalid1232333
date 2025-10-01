import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div>
      <h1>Student Info</h1>
      
      {/* First student card */}
      <StudentCard 
        name="Khalid Alenazy" 
        id="202014460" 
        dept="Software Engineering" 
      />

      {/* Second student card */}
      <StudentCard 
        name="Sara Ahmed" 
        id="202067890" 
        dept="Computer Science" 
      />
    </div>
  );
}

export default App;

