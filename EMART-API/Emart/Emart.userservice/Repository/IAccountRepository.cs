using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.userservice.Models;

namespace Emart.userservice.Repository
{
    public interface IAccountRepository
    {
       Buyer BuyerLogin(string uname,string pwd);
        Seller SellerLogin(string uname, string pwd);
        void SellerRegister(Seller obj);
        void BuyerRegister(Buyer obj);
   
    }
}
