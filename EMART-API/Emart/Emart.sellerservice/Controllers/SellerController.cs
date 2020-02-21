using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.sellerservice.Repository;
using Emart.sellerservice.Models;

namespace Emart.sellerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly IsellerRepository _repo;
        public SellerController(IsellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public IActionResult Additem(Items obj)
        {
            try
            {
                _repo.Additems(obj);
                return Ok("item added");
            }
            catch(Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("Editprofile")]
        public IActionResult editprofile(Seller obj)
        {
            _repo.EditProfile(obj);
            return Ok();
        }
    
    }
}