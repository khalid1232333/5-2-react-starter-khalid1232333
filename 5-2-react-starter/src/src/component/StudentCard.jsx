// src/components/StudentCard.jsx
function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "250px",
      textAlign: "center",
      margin: "10px auto",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>Name: {props.name}</h3>
      <p>Student ID: {props.id}</p>
      <p>Department: {props.dept}</p>
    </div>
  );
}

export default StudentCard;
