using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Employees_base.Controllers.Entities
{
    public class Employee
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int Age { get; set; }
        public string Image { get; set; }
        public Department Department { get; set; }
    }
}
