using EmployeeLibrary.Model;

namespace EmployeeLibrary.DataAccess
{
    public class DataAdapter : IDataAdapter
	{
        private readonly AppDBContext _context;

        public DataAdapter(AppDBContext context)
		{
            _context = context;
		}

        public bool CreateEmployee(Employee employee)
        {
            _context.EmployeeDetails.Add(employee);
            return _context.SaveChanges() > 0;

        }

        public bool CreateNewLogin(Login login)
        {
            _context.LoginDetails.Add(login);
            return _context.SaveChanges() > 0;
        }

        public bool DeleteEmployee(int id)
        {
            try
            {
                Employee employee = _context.EmployeeDetails.Find(id);
                _context.EmployeeDetails.Remove(employee);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
            
        }

        public Employee FindOneEmployee(int id)
        {
            return _context.EmployeeDetails.Find(id);
        }

        public IEnumerable<Employee> GetAllEmployee()
        {
            return _context.EmployeeDetails.Where(x => x.IsActive); 
        }

        public bool UpdateEmployee(Employee employee)
        {
            try
            {
                _context.EmployeeDetails.Update(employee);
                _context.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
           
        }

        public bool ValodateLogin(Login login)
        {
            return _context.LoginDetails.Where(x => x.UserName == login.UserName && x.Password == login.Password && x.IsActive).Any();
        }
    }
}

