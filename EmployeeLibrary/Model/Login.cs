using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeLibrary.Model
{
	public class Login
	{
        [Key]
        public int ID { get; set; }
        public string UserName { get; set; }
        [MaxLength(8)]
        public string Password { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;
        public DateTime? UpdatedOn { get; set; }

    }
}

