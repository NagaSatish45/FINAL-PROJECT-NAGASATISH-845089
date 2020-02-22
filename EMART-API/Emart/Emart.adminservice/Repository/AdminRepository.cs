using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.adminservice.Models;
namespace Emart.adminservice.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Category.Add(obj);
            _context.SaveChanges();
          
        }

        public void AddSubcategory(Subcategory obj)
        {
            _context.Subcategory.Add(obj);
            _context.SaveChanges();

        }

        public Subcategory getby(int subcategory_id)
        {
            return _context.Subcategory.Find(subcategory_id);
        }

        public Category getbyid(int category_id)
        {
            return _context.Category.Find(category_id);
        }
    }
}
