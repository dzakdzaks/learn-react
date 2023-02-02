import "./index.css";
import Employee from "./components/Employee.js";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Engineer");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Dzaky" role="Senior Engineer" />
          <Employee name="Brod" role={role} />
          <Employee name="Jak" />
        </>
      ) : (
        <p>You cant see employees</p>
      )}
    </div>
  );
}

export default App;
