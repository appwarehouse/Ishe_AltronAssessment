using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task_1
{
    public record SubCategory
    {
        public int SubCategoryId { get; set; }
        public required string SubCategoryName { get; set; }
        public int CategoryId { get; set; }
    }
}
