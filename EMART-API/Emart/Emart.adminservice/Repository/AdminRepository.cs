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
        public List<Category> GetAllItems()
        {
            return _context.Category.ToList();
        }

        public List<Subcategory> GetAllSubcategories()
        {
            return _context.Subcategory.ToList();
        }


        public Subcategory getby(int subcategory_id)
        {
            return _context.Subcategory.Find(subcategory_id);
        }

        public Category getbyid(int category_id)
        {
            return _context.Category.Find(category_id);
        }
        public void  DeletCategory(int categoryid)
        {
         Category  x=_context.Category.SingleOrDefault(e=>e.CategoryId==categoryid);
            _context.Category.Remove(x);
            _context.SaveChanges();
           
        }

        public void DeletSubCategory(int subcategoryid)
        {
           Subcategory x = _context.Subcategory.Find(subcategoryid);
            _context.Subcategory.Remove(x);
            _context.SaveChanges();
        }
    }
}
