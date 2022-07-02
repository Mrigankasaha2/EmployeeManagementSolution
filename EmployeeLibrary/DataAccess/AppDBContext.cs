using System;
using EmployeeLibrary.Model;
using Microsoft.EntityFrameworkCore;

namespace EmployeeLibrary.DataAccess
{
	public class AppDBContext : DbContext
	{
		public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
		{
		}

        public DbSet<Login> LoginDetails { get; set; }
        public DbSet<Employee> EmployeeDetails { get; set; }
    }
}

