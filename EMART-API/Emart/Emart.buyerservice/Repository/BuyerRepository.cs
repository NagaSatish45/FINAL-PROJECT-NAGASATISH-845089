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
        public void buyitem(PurchaseHistory obj)
        {
            _context.PurchaseHistory.Add(obj);
            _context.SaveChanges();
           
        }

        public void editbuyerprofile(Buyer obj)
        {
            //Buyer b = new Buyer();
            //b.Bmail = obj.Bmail;
            //b.Bmobile = obj.Bmobile;
            //b.Bname = obj.Bname;
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

        public List<PurchaseHistory> transactionshistory(int bid)
        {
            return _context.PurchaseHistory.Where(e => e.Bid == bid).ToList();
        }

    }

}
