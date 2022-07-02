using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeLibrary.Model
{
	public class Login
	{
        [Key]
        public int ID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime CreatedOn { get; set; }
        public bool IsActive { get; set; }
        public DateTime UpdatedOn { get; set; }

    }
}

