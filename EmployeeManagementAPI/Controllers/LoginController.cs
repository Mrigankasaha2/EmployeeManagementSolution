using EmployeeLibrary;
using EmployeeLibrary.Model;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagementAPI.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginservice;

        public LoginController(ILoginService loginService)
        {
            _loginservice = loginService;
        }
        [HttpPost]
        [Route("/login")]
        public IActionResult ValidateLogin([FromBody] Login login)
        {
            string response = _loginservice.ValidateLogin(login);
            if(response == "Login not Successful")
            {
                return StatusCode(StatusCodes.Status401Unauthorized);
            }
            return Ok(response);
        }

        [HttpPost]
        [Route("/newlogin")]
        public IActionResult CreateNewLogin([FromBody] Login login)
        {
            if (_loginservice.CreateNewLogin(login))
            {
                return StatusCode(StatusCodes.Status201Created);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        
    }
}

