namespace Task_1
{
    public record Product
    {
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public required string ProductName { get; set; }
        public virtual ICollection<Category> Category { get; set; } = new HashSet<Category>();

    }
}
