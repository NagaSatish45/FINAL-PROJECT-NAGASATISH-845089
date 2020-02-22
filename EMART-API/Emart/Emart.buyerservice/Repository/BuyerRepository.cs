using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.buyerservice.Models;
namespace Emart.buyerservice.Repository
{
    public class BuyerRepository : IbuyerRepository
    {
        private readonly EmartDBContext _context;
         public BuyerRepository(EmartDBContext context)
        {
            _context = context;
          
        }
        public void buyitem(Transactions obj)
        {
            _context.Transactions.Add(obj);
            _context.SaveChanges();
           
        }

        public void editbuyerprofile(Buyer obj)
        {
            _context.Update(obj);
            _context.SaveChanges();
           
        }

        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public Buyer getprofile(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<Subcategory> GetSubcategories(int category_id)
        {
            return _context.Subcategory.Where(e => e.CategoryId == category_id).ToList();
        }

        public List<Items> searchitems(string item_name)
        {
            return _context.Items.Where(e => e.ItemName == item_name).ToList();
        }

        public List<Transactions> transactionshistory(int bid)
        {
            return _context.Transactions.Where(e => e.Bid == bid).ToList();
        }
    }
}
