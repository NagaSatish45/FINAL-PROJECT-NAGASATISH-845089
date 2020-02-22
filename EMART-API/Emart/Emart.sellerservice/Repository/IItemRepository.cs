using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.sellerservice.Models;

namespace Emart.sellerservice.Repository
{
    public interface IItemRepository
    {
        List<Items> viewitems(int iid);
        void deleteitem(int iid);
        void updateitem(Items obj);
        Items Getitem(int iid);
        void Additems(Items obj);

    }
}
