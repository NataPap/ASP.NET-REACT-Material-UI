using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees_base.Controllers.Entities
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Responsibilities { get; set; }
        public List<Employee> Employees { get; set; }
    }
}
