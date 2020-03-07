using System;
using System.Collections.Generic;

namespace Emart.adminservice.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Bid { get; set; }
        public string Bname { get; set; }
        public string Password { get; set; }
        public string Bmail { get; set; }
        public string Bmobile { get; set; }
        public DateTime? Createddate { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
