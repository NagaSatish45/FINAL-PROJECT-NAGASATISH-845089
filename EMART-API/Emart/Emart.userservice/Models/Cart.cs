using System;
using System.Collections.Generic;

namespace Emart.userservice.Models
{
    public partial class Cart
    {
        public int Cartid { get; set; }
        public int? Iid { get; set; }
        public int? CategoryId { get; set; }
        public int? SubcategoryId { get; set; }
        public int? Price { get; set; }
        public string Description { get; set; }
        public int? StockNumber { get; set; }
        public int? Sid { get; set; }
        public int? Bid { get; set; }
        public string Imagepath { get; set; }
    }
}
