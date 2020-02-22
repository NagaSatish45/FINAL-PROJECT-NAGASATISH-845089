using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.adminservice.Models;
using Emart.adminservice.Repository;

namespace Emart.adminservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public void Addcategory(Category obj)
        {
            _repo.AddCategory(obj);
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public void Addsubcategory(Subcategory obj)
        {
            _repo.AddSubcategory(obj);
        }
        [HttpGet]
        [Route("getcategory/{category_id}")]
        public IActionResult getcategory(int category_id)
        {
            return Ok(_repo.getbyid(category_id));
        }
        [HttpGet]
        [Route("getsubcategory/{subcategory_id}")]
        public IActionResult getsubcategory(int subcategory_id)
        {
            return Ok(_repo.getby(subcategory_id));
        }

    }

}