using System;
using EmployeeLibrary.Model;

namespace EmployeeLibrary
{
	public interface ILoginService
	{
		string ValidateLogin(Login login);

		public bool CreateNewLogin(Login login);
	}
}

