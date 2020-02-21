using System;
using System.Collections.Generic;

namespace Emart.sellerservice.Models
{
    public partial class Seller
    {
        public Seller()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Sid { get; set; }
        public string Sname { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public int? Gstin { get; set; }
        public string BriefAboutCompany { get; set; }
        public string PostalAddress { get; set; }
        public string Smail { get; set; }
        public string Smobile { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
