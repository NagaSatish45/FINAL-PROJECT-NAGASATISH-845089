using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.adminservice.Models;

namespace Emart.adminservice.Repository
{
    public  interface IAdminRepository
    {
        void AddCategory(Category obj);
        void AddSubcategory(Subcategory obj);
        Category getbyid(int category_id);
        Subcategory getby(int subcategory_id);
    }
}
