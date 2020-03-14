using System;
using System.Collections.Generic;
using System.Text;
using Emart.adminservice.Repository;
using Emart.adminservice.Models;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
    class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new AdminRepository(new EmartDBContext());

        }
        [Test]
        [Description("get category")]
        public void TestAdditems()
        {
            _repo.AddCategory(new Category()
            {
                 CategoryId = 78,
                 CategoryName = "Teddypillow",

                 BriefDetails= "Pillow",
            });
            var result = _repo.getbyid(4);
            Assert.NotNull(result);

        }
        [Test]
        [Description("Add Subcategory")]
        public void TestAddsubcategory()
        {

            _repo.AddSubcategory(new Subcategory()
            {
                 SubcategoryId= 89,
                 CategoryId = 1,
                 BriefDetails= "gud",
                 SubcategoryName= "Small pillows",
                  Gst=5,
                   

            });
            var result = _repo.getby(89);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetbycategory()
        {
            var result = _repo.getbyid(4);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetbysubcategory()
        {
            var result = _repo.getby(82);
            Assert.IsNotNull(result);
        }
        [Test]

        [Description("Getcategorylist")]
        public void TestGetcategorylist()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count,0);
        }

        [Test]

        [Description("Getgetsubcategorylist")]
        public void TestGetsubcategorylist()
        {
            var result = _repo.GetAllSubcategories();
            Assert.NotNull(result);
            Assert.Greater(result.Count,0);
        }


    }


}

