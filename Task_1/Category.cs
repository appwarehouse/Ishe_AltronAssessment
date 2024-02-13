using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1
{
    public record Category
    {
        public int CategoryId { get; set; }
        public required string CategoryName { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; } = new HashSet<SubCategory>();
    }
}
    