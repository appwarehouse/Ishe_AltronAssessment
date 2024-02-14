namespace Task_2.Library
{
    public class User
    {
        public Guid UserId { get; set; } = new Guid();
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public bool isActive { get; set; } = true;
    }

}