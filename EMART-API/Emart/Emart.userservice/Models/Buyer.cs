using System;
using System.Collections.Generic;

namespace Emart.userservice.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
            Transactions = new HashSet<Transactions>();
        }

        public int Bid { get; set; }
        public string Bname { get; set; }
        public string Password { get; set; }
        public string Bmail { get; set; }
        public string Bmobile { get; set; }
        public DateTime? Createddate { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<Transactions> Transactions { get; set; }
    }
}
