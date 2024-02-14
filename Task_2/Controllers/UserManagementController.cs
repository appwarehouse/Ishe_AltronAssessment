using Microsoft.AspNetCore.Mvc;
using Task_2.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Task_2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementController : ControllerBase
    {
        // GET: api/<UserManagementController>
        [HttpGet(Name ="Users")]
        public async Task<ActionResult<ICollection<User>>> Get()
        {
            return new List<User>();
        }

        // GET api/<UserManagementController>/5
        [HttpGet(Name = "User/{id}")]
        public async Task<ActionResult<User>> Get(int id)
        {
            return new User();
        }

        // POST api/<UserManagementController>
        [HttpPost("Create")]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            return new User();
        }

        // PUT api/<UserManagementController>/5
        [HttpPut("Update/{id}")]
        public async Task<ActionResult<User>> Put(int id, [FromBody] User user)
        {
            return user;
        }

        // DELETE api/<UserManagementController>/5
        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return false;
        }
    }
}
