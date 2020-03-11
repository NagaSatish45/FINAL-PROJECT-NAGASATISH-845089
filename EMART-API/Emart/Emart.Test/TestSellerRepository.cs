using System;
using System.Collections.Generic;
using System.Text;
using Emart.sellerservice.Repository;
using Emart.sellerservice.Models;
using Emart.sellerservice;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
     public class TestSellerRepository
    {
        SellerRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new SellerRepository(new EmartDBContext());

        }
        [Test]
        [Description("to get the seller profile ")]
        public void TestGetProfile()
        {
           var x= _repo.getprofile(1);
            Assert.IsNotNull(x);
            
        }
        [Test]
        [Description("to get the Edit  profile ")]
        public void TestEditProfile()
        {
            var x = _repo.getprofile(1);
            x.Companyname = "tcs";
            _repo.EditProfile(x);
            var y = _repo.getprofile(1);
            Assert.AreSame(x, y);


        }



    }
}
