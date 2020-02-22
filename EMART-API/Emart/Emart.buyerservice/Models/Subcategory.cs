using System;
using System.Collections.Generic;

namespace Emart.buyerservice.Models
{
    public partial class Subcategory
    {
        public Subcategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubcategoryId { get; set; }
        public string SubcategoryName { get; set; }
        public string BriefDetails { get; set; }
        public int? Gst { get; set; }
        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
