using System;
using EmployeeLibrary.Model;

namespace EmployeeLibrary.DataAccess
{
	public interface IDataAdapter
	{
		bool ValodateLogin(Login login);

		bool CreateNewLogin(Login login);

		IEnumerable<Employee> GetAllEmployee();

		bool CreateEmployee(Employee employee);

		Employee FindOneEmployee(int id);

		bool UpdateEmployee(Employee employee);

		bool DeleteEmployee(int id);
	}
}

