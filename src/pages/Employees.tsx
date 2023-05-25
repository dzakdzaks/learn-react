import React, { useState } from "react";
import "../index.css";
import EmployeeCard from "../components/Employee";
import Employee from "../model/Employee";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";

function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Caleb",
      role: "iOS Developer",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      name: "John",
      role: "QA",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      name: "Dave",
      role: "Manager",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      name: "Niko",
      role: "SDET",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      name: "Roby",
      role: "Android Developer",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      name: "Adel",
      role: "Web Developer",
      img: "https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  function updateEmployee(id: number, newName: string, newRole: string) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployee);
  }

  function addEmployee(name: string, role: string, img: string) {
    const newEmployee: Employee = {
      id: employees[employees.length - 1].id + 1,
      name: name,
      role: role,
      img: img,
    };
    console.log(newEmployee);
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee data={employee} updateEmployee={updateEmployee} />
              );
              return (
                <EmployeeCard
                  key={employee.id}
                  data={employee}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee addEmployee={addEmployee} />
        </>
      ) : (
        <p>You cant see employees</p>
      )}
    </div>
  );
}

export default Employees;
