using EmployeeLibrary.Model;
using EmployeeLibrary.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmployeeManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class EmployeeController : Controller
    {
        private readonly IEmployeeService _employeeservice;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeservice = employeeService;
        }

        [HttpGet]
        [Route("/employeelist")]
        public IEnumerable<Employee> GetAllEmployee()
        {
            return _employeeservice.GetEmployeeList();
        }

        [HttpPost]
        [Route("/createemployee")]
        public IActionResult createEmployee([FromBody] Employee employee)
        {
            if (_employeeservice.CreateEmployee(employee))
            {
                return StatusCode(StatusCodes.Status201Created);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        [Route("/findemployee")]
        public Employee FindOneEmployee(int id)
        {
            return _employeeservice.FindOneEmployee(id);
        }

        [HttpDelete]
        [Route("/removeemployee")]
        public IActionResult DeleteEmployee(int id)
        {
            if (_employeeservice.DeleteEmployee(id))
            {
                return Ok();
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut]
        [Route("/updateemployee")]
        public IActionResult UpdateEmployee([FromBody] Employee employee)
        {
            if (_employeeservice.UpdateEmployee(employee))
            {
                return Ok();
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

    }
}

