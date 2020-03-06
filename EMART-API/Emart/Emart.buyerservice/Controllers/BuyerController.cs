using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.buyerservice.Models;
using Emart.buyerservice.Repository;

namespace Emart.buyerservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IbuyerRepository _repo;
        public BuyerController(IbuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public void buyitem(PurchaseHistory obj)
        {
            _repo.buyitem(obj);
        }
        
        [HttpPut]
        [Route("editbuyerprofile")]
        public void Editprofile(Buyer obj)
        {
            _repo.editbuyerprofile(obj);

        }
        [HttpGet]
        [Route("getprofile/{bid}")]
        public IActionResult getprofile(int bid)
        {
            try
            {
                return Ok(_repo.getprofile(bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet]
        [Route("search/{item_name}")]
        public IActionResult searchitem(string item_name)
        {
            try
            {
                return Ok(_repo.searchitems(item_name));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("purchasehistory/{bid}")]
        public IActionResult transactionhistory(int bid)
        {
            try
            {
                return Ok(_repo.transactionshistory(bid));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCAtegory()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("GetSubCategory/{category_id}")]
        public IActionResult Getsubcategory(int category_id)
        {
            try
            {
                return Ok(_repo.GetSubcategories(category_id));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }


    }
}