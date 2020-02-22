using System;
using System.Collections.Generic;

namespace Emart.buyerservice.Models
{
    public partial class PurchaseHistory
    {
        public int TransactionId { get; set; }
        public string TransactionType { get; set; }
        public DateTime? DateTime { get; set; }
        public string Remarks { get; set; }
        public int? Pid { get; set; }
        public int? NoOfItems { get; set; }
        public int? Bid { get; set; }
        public int? Sid { get; set; }
        public int? Iid { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Items I { get; set; }
        public virtual Seller S { get; set; }
    }
}
