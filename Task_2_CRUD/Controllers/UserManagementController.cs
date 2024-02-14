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

        [HttpGet("Users")]
        public async Task<ActionResult<ICollection<User>>> Get()
        {
            var users = await _unitOfWork.UserRepository.ListAsync();
            return Ok(users.ToList());
        }

        [HttpGet("User/{id}")]
        public async Task<ActionResult<User>> Get(Guid id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost("Create")]
        public async Task<ActionResult<User>> Post([FromBody] User user)
        {
            await _unitOfWork.UserRepository.CreateAsync(user);
            await _unitOfWork.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = user.UserId }, user);
        }

        [HttpPut("Update/{id}")]
        public async Task<ActionResult<User>> Put(Guid id, [FromBody] User user)
        {
            if (id != user.UserId)
                return BadRequest();
           
            var existingUser = await _unitOfWork.UserRepository.GetByIdAsync(id);
            if (existingUser == null)           
                return NotFound();


            _unitOfWork.UserRepository.Update(existingUser, user);
            await _unitOfWork.SaveChangesAsync();
            return Ok(user);

        }

        [HttpDelete("Delete/{id}")]
        public async Task<ActionResult<bool>> Delete(Guid id)
        {
            var user = await _unitOfWork.UserRepository.GetByIdAsync(id);
            if (user == null) return NotFound();

            _unitOfWork.UserRepository.Delete(user);
            await _unitOfWork.SaveChangesAsync();
            return NoContent();
        }
    }
}
