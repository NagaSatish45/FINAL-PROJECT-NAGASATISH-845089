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
        [HttpGet]
        [Route("GetItems")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetItem")]
        public IActionResult GetSubcategories()
        {
            try
            {
                return Ok(_repo.GetAllSubcategories());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCategory/{category_id}")]
        public void DeleteCategory(int category_id)
        {
            _repo.DeletCategory(category_id);
            }
            
            
           
       
               
        
        [HttpDelete]
        [Route("DeleteSubCategory/{subcategory_id}")]
        public void DeleteSubCategory(int subcategory_id)
        {
                _repo.DeletSubCategory(subcategory_id);
              
            
        }

        
        [HttpPut]
        [Route("updatecategory")]
        public IActionResult updatecategory(Category obj)
        {
            try
            {
                _repo.updatecategory(obj);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }

        }
        [HttpPut]
        [Route("updatesubcategory")]
        public IActionResult updatesubcategory(Subcategory obj)
        {
            try
            {
                _repo.updatesubcategory(obj);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
            


        }
        
        
        }
    }

