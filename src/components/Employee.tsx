import EmployeeDetail from "../model/EmployeeDetail";

function EmployeeCard(employee: EmployeeDetail) {
  return (
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={employee.data.img}
        alt="Employee Image"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {employee.data.name}
          </p>
          <p className="text-slate-500 font-medium">{employee.data.role}</p>
        </div>

        {employee.editEmployee}
      </div>
    </div>
  );
}

export default EmployeeCard;
