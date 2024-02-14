using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Validations.Rules;
using Task_2.Library;
using Task_2_CRUD.Interfaces;

namespace Task_2_CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserManagementController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public UserManagementController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        // GET: api/<UserManagementController>
        [HttpGet("Users")]
        public async Task<ActionResult<ICollection<User>>> Get()
        {
            var users = await _unitOfWork.UserRepository.ListAsync();
            return users.ToList();
        }

        // GET api/<UserManagementController>/5
        [HttpGet("User/{id}")]
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
