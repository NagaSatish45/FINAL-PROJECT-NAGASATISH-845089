﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.sellerservice.Models;


namespace Emart.sellerservice.Repository
{
    public interface IsellerRepository
    {
        void Additems(Items obj);
        void EditProfile(Seller obj);

    }
}
