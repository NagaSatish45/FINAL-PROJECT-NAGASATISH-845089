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
        public Buyer BuyerLogin(string uname, string pwd)
        {
           return _context.Buyer.SingleOrDefault(e=>e.Bname==uname&&e.Password==pwd);
        
       
                

            }
         
        

        public void BuyerRegister(Buyer obj)
        {
            _context.Buyer.Add(obj);
            _context.SaveChanges();
            
        }

       

        public Seller SellerLogin(string uname, string pwd)
        {
        return _context.Seller.SingleOrDefault(e => e.Sname == uname && e.Password == pwd);
        
    }

    public void SellerRegister(Seller obj)
        {
            _context.Seller.Add(obj);
            _context.SaveChanges();
        }
    }
}
