using EmployeeLibrary.Model;

namespace EmployeeLibrary.Service
{
    public interface IEmployeeService
    {
        IEnumerable<Employee> GetEmployeeList();

        bool CreateEmployee(Employee employee);

        Employee FindOneEmployee(int id);

        bool UpdateEmployee(Employee employee);

        bool DeleteEmployee(int id);
    }
}

