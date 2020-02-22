﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.sellerservice.Repository;
using Emart.sellerservice.Models;

namespace Emart.sellerservice.Repository
{
    public class SellerRepository : IsellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
       

       

        public void EditProfile(Seller obj)
        {
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

       

        public Seller getprofile(int sid)
        {
            return _context.Seller.Find(sid);
        }

      
      

       
    }
}
