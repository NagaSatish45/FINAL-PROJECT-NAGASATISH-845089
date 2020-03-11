using System;
using System.Collections.Generic;
using System.Text;
using Emart.sellerservice.Repository;
using Emart.sellerservice.Models;
using Emart.sellerservice.Controllers;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    public class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new ItemRepository(new EmartDBContext());

        }
        [Test]
        [Description("to test Get All Items")]
        public void TestGetAllItem()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get Item")]
        public void TestGetItem()
        {
            var result = _repo.Getitem(55);
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("to test View  Item")]
        public void TestViewItems()
        {
            var result = _repo.viewitems(1);
            Assert.IsNotNull(result);

        }
        [Test]
        [Description("to test Delete Item")]
        public void TestDeleteItems()
        {
            _repo.deleteitem(76);
            var x = _repo.Getitem(76);
            Assert.Null(x);
        }
        [Test]
        [Description("to Add item")]
        public void TestAddItem()
        {
            _repo.Additems(new Items()
            {
                Iid = 999,
                ItemName = "pen",
                CategoryId = 620,
                SubcategoryId = 157,
                Description = "nothing",
                Imagepath = "4.jpg",
                StockNumber = 8,
                Price = 450,
                Sid = 1,
                Remarks = "good"
            });
            var result = _repo.Getitem(999);
            Assert.NotNull(result);

        }



        [Test]
        [Description("to test update item")]
        public void TestUpdate()
        {
            Items i = _repo.Getitem(999);
            i.ItemName = "pens";
            _repo.updateitem(i);
            Items i1 = _repo.Getitem(999);
            Assert.AreSame(i, i1);

        }
    }

}

