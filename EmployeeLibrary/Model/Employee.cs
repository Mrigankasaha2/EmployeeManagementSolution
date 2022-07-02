using System.ComponentModel.DataAnnotations;

namespace EmployeeLibrary.Model
{
    public class Employee
    {
        [Key]
        public int ID { get; set; }
        public string EmployeeName { get; set; }
        public int Age { get; set; }
        public DateTime DOB { get; set; }
        public bool IsActive { get; set; } = true;
        public DateTime CreatedOn { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}

