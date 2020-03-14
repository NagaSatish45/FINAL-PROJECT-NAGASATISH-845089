using System;
using System.Collections.Generic;
using System.Text;
using Emart.userservice.Repository;
using Emart.userservice.Models;
using Emart.userservice.Controllers;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestUserRepository
    {
        AccountRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new AccountRepository(new EmartDBContext());

        }
        [Test]
        [Description("get buyer Login")]
        public void TestBuyerLogin()
        {
           Buyer b= _repo.BuyerLogin("buyer", "buyer");
            Assert.IsNotNull(b);
        }
        [Test]
        [Description("test seller Login")]
        public void TestSellerLogin()
        {
            Seller s = _repo.SellerLogin("seller", "seller");
            Assert.IsNotNull(s);
        }
        [Test]
        [Description("Test buyer registraction")]
        public void TestBuyerRegistraction()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Bid = 55,
                Bmail = "buyer99@gmail.com",
                Bmobile = "9999999999",
                Bname = "buyer45",
                Createddate = System.DateTime.Now,
                Password = "ASDFGHJ*",

            });

        }

        [Test]
        [Description("Test seller registraction")]
        public void TestSellerRegistraction()
        {
            _repo.SellerRegister(new Seller()
            {
                 Sid= 55,
                 Smail = "buyer99@gmail.com",
                Smobile = "9999999999",
                Sname = "seller45",
             //   Createddate = System.DateTime.Now,
                Password = "ASDFGHJ*",
                 BriefAboutCompany="good ",
                  Companyname="cottonbussiness",
                   Gstin=9,
                     PostalAddress="chennai"

            });

        }
    }
}
