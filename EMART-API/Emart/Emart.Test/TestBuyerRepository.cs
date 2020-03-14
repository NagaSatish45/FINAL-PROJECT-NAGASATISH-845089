using System;
using System.Collections.Generic;
using System.Text;
using Emart.buyerservice.Repository;
using Emart.buyerservice.Controllers;
using Emart.buyerservice.Models;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestBuyerRepository {
        BuyerRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());

        }
        [Test]
        [Description("get buyer profile")]
        public void TestGetprofile()
        {
            var x = _repo.getprofile(1);
            Assert.IsNotNull(x);
        }
        [Test]
        [Description("get buyer edit  profile")]
        public void TestEditprofile()
        {
            Buyer x = _repo.getprofile(1);
            x.Bmail = "buyer789@gmail.com";
            _repo.editbuyerprofile(x);
            Buyer y = _repo.getprofile(1);
            Assert.AreSame(x, y);

        }
        //[Test]
        //[Description("get from cart")]
        //public void TestGetCart()
        //{
        //    var result = _repo.GetCart(1);
        //    Assert.NotNull(result);
        //    Assert.Greater(result.Count,0);

        //}
        [Test]
        [Description("get transaction history ")]
        public void TestTransaction()
        {
            var result = _repo.transactionshistory(1);
            Assert.NotNull(result);
//Assert.Greater(result.Count, 0);

        }
        [Test]
        [Description("Buy product")]
        public void TestBuyproduct()
        {
            _repo.buyitem(new PurchaseHistory()
            {
                Bid = 5,
                DateTime = System.DateTime.Now,
                Iid = 55,
                NoOfItems = 2,
                TransactionId =55,
                TransactionType = "credit",
                Pid = 1,
                Sid = 1,
                Remarks ="good",


            });
            var x = _repo.transactionshistory(5);
            Assert.IsNotNull(x);

        }
        [Test]
        [Description("Getv from cart")]
        public void TestGetCart()
        {
            var x = _repo.GetCart(1);
            Assert.NotNull(x);
        }
        [Test]
        [Description("test add to cart")]
        public void TestAddCart()
        {
            _repo.AddToCart(new Cart()
            {
                Cartid = 78,
                Bid = 5,
                CategoryId = 1,
                Description = "notbad",
                Iid = 55,
                Imagepath = "46,jpg",
                ItemName = "madhu",
                Price = 785,
                Sid = 1,
                StockNumber = 1,
                SubcategoryId = 1,
                 
            });
            var x = _repo.GetCart(5);
            Assert.IsNotNull(x);


        }
        [Test]
        [Description("Get Category")]
        public void TestGetCategory()
        {
            var x = _repo.GetCategory();
            Assert.NotNull(x);
            Assert.Greater(x.Count, 0);
        }
        [Test]
        [Description("Get subCategory")]
        public void TestGetsubCategory()
        {
            var x = _repo.GetSubcategories(5);
            Assert.NotNull(x);
         //   Assert.Greater(x.Count, 0);
        }
        [Test]
        [Description("Get iteam  search by name")]
        public void TestsearchIteam()
        {
            var x = _repo.searchitems("pens");
            Assert.NotNull(x);
            //   Assert.Greater(x.Count, 0);
        }
        [Test]
        [Description("Delete from cart")]
        public void TestDeleteFromCart()
        {
            
            _repo.DeleteFromCart(344);
            //var x = _repo.GetCart(5);
            //Assert.Null(x);
           // Assert.Greater(x.Count,0);
        }


    }


}

