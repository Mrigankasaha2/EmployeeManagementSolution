using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using EmployeeLibrary.DataAccess;
using EmployeeLibrary.Model;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace EmployeeLibrary.Service
{
	public class LoginService : ILoginService
	{
        private readonly IDataAdapter _dataadapter;
        private readonly IConfiguration _config;

        public LoginService(IDataAdapter dataAdapter, IConfiguration config)
		{
            _dataadapter = dataAdapter;
            _config = config;
		}

        public bool CreateNewLogin(Login login)
        {
            if(login is null) { throw new NullReferenceException(); }
            return _dataadapter.CreateNewLogin(login);
        }

        public string ValidateLogin(Login login)
        {
            if (login is null) { throw new NullReferenceException(); }
            if (!_dataadapter.ValodateLogin(login))
            {
                return "Login not Successful";
            }
            return GenerateJWTToken(login.UserName);
        }
        private string GenerateJWTToken(string name)
        {
            SymmetricSecurityKey? securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            SigningCredentials? credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            Claim[]? claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, name)
            };

            JwtSecurityToken? token = new JwtSecurityToken(_config["Jwt:Issuer"],
                        _config["Jwt:Audience"],
                        claims,
                        expires: DateTime.Now.AddMinutes(Convert.ToDouble(_config["Tokenvalit"])),
                        signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

