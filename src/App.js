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
          <div className="flex flex-wrap justify-center">
            <Employee
              name="John"
              role="Senior Engineer"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Carl"
              role={role}
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Tom"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="John"
              role="Senior Engineer"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Carl"
              role={role}
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Tom"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="John"
              role="Senior Engineer"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Carl"
              role={role}
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Employee
              name="Tom"
              img="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </>
      ) : (
        <p>You cant see employees</p>
      )}
    </div>
  );
}

export default App;
