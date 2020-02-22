using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.userservice.Repository;
using Emart.userservice.Models;

namespace Emart.userservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        public AccountController(IAccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("BLogin/{uname}/{pwd}")]
        public IActionResult BLogin(string uname,string pwd)
        {
            try
            {
                return Ok(_repo.BuyerLogin(uname, pwd));
            }
            catch(Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SLogin/{uname}/{pwd}")]
        public IActionResult SLogin(string uname, string pwd)
        {
            try
            {
                return Ok(_repo.SellerLogin(uname, pwd));
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SRegister")]
        public IActionResult SRegister(Seller obj)
        {
            try
            {
                _repo.SellerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BRegister")]
        public IActionResult BRegister(Buyer obj)
        {
            try
            {
                _repo.BuyerRegister(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }
      
        


    }
}