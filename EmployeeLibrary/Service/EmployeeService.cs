using EmployeeLibrary.DataAccess;
using EmployeeLibrary.Model;

namespace EmployeeLibrary.Service
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IDataAdapter _dataAdapter;

        public EmployeeService(IDataAdapter dataAdapter)
        {
            _dataAdapter = dataAdapter;
        }

        public bool CreateEmployee(Employee employee)
        {
            if(employee is null) { throw new NullReferenceException(); }
            return _dataAdapter.CreateEmployee(employee);
        }

        public bool DeleteEmployee(int id)
        {
            return _dataAdapter.DeleteEmployee(id);
        }

        public Employee FindOneEmployee(int id)
        {
            return _dataAdapter.FindOneEmployee(id);
        }

        public IEnumerable<Employee> GetEmployeeList()
        {
            return _dataAdapter.GetAllEmployee();
        }

        public bool UpdateEmployee(Employee employee)
        {
            if (employee is null) { throw new NullReferenceException(); }
            return _dataAdapter.UpdateEmployee(employee);
        }
    }
}

