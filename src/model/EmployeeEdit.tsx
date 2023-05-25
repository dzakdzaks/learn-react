import Employee from "./Employee";

type EmployeeEdit = {
  data: Employee;
  updateEmployee: (id: number, newName: string, newRole: string) => void;
};

export default EmployeeEdit;
