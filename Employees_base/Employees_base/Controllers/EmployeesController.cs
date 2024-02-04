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
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeContext context;
        public EmployeesController (EmployeeContext context)
        {
            this.context = context;
        }
         
        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            return context.Employees.Include(x=>x.Department).ToList();
            
        }


        [HttpPost]
        [Route("AddEmployee")]
        public ActionResult AddBook([FromBody] Employee employee)
        {
            if (employee != null)
            {
                context.Employees.Add(employee);
                context.SaveChanges();
                return Ok();

            }
            return BadRequest();
        }

        [HttpDelete]
        [Route("DeleteEmployee/{id}")]
        public ActionResult DeleteEmployee([FromRoute] int id)
        {
            var employee = context.Employees.FirstOrDefault(x => x.Id.Equals(id));
            if (employee != null)
            {
                context.Employees.Remove(employee);
                context.SaveChanges();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("UpdateEmployee")]
        public ActionResult UpdateEmployee([FromBody] Employee employee)
        {
            if (employee != null)
            {
                var oldEmployee = context.Employees.AsNoTracking().FirstOrDefault(x => x.Id.Equals(employee.Id));
                if (oldEmployee != null)
                {
                    context.Employees.Update(employee);
                    context.SaveChanges();
                    return Ok();
                }
                return BadRequest();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("GetSingleEmployee/{id}")]
        public Employee GetSingleEmployee([FromRoute] int id)
        {
            if (id != 0)
            {
                return context.Employees.FirstOrDefault(x => x.Id.Equals(id));
            }
            return null;
        }
    }
}
