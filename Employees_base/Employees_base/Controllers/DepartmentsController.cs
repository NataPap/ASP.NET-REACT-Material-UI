using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Employees_base.Controllers.Entities;
using Employees_base.Controllers.Entities.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Employees_base.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly EmployeeContext context;
        public DepartmentsController(EmployeeContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("GetDepartmentsEmployees/{id}")]
        public List<Employee> GetDepartmentsEmployees(int id)
        {
            return context.Departments.Include(x => x.Employees).FirstOrDefault(x => x.Id.Equals(id)).Employees;
        }

        [HttpGet]
        public IEnumerable<Department> GetDepartments()
        {
            return context.Departments.ToList();
        }

        [HttpPost]
        [Route("AddDepartment")]
        public ActionResult AddDepartment(Department department)
        {
            if (department != null)
            {
                context.Departments.Add(department);
                context.SaveChanges();
                return Ok();

            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("DeleteDepartment/{id}")]
        public ActionResult DeleteDepartment([FromRoute] int id)
        {
            var department = context.Departments.FirstOrDefault(x => x.Id.Equals(id));
            if (department != null)
            {
                context.Departments.Remove(department);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }
        [HttpGet]
        [Route("GetSingleDepartment/{id}")]
        public Department GetSingleDepartment([FromRoute] int id)
        {
            if (id != 0)
            {
                return context.Departments.FirstOrDefault(x => x.Id.Equals(id));
            }
            return null;
        }

        [HttpPost]
        [Route("UpdateDepartment")]
        public ActionResult UpdateAuthor([FromBody] Department department)
        {
            if (department != null)
            {
                var oldDepartment = context.Departments.AsNoTracking().FirstOrDefault(x => x.Id.Equals(department.Id));
                if (oldDepartment != null)
                {
                    context.Departments.Update(department);
                    context.SaveChanges();
                    return Ok();
                }
                return BadRequest();
            }
            return BadRequest();
        }
    }
}
