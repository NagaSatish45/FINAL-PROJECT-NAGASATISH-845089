using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.userservice.Models;

namespace Emart.userservice.Repository
{
   
    public class AccountRepository : IAccountRepository
    {
        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }
        public bool BuyerLogin(string uname, string pwd)
        {
           var x=_context.Buyer.Where(e => e.Bname == uname && e.Password == pwd).ToList();
            if (x.Count!=0)
            {
                return true;
            }
            else
                return false;
   
                  
                

            }
         
        

        public void BuyerRegister(Buyer obj)
        {
            _context.Buyer.Add(obj);
            _context.SaveChanges();
            
        }

       

        public bool SellerLogin(string uname, string pwd)
        {
        var x = _context.Seller.Where(e => e.Sname == uname && e.Password == pwd).ToList();
        if (x.Count!= 0)
        {
            return true;
        }
        else
            return false;

    }

    public void SellerRegister(Seller obj)
        {
            _context.Seller.Add(obj);
            _context.SaveChanges();
        }
    }
}
