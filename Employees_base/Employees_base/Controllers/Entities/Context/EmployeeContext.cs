using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Employees_base.Controllers.Entities.Context
{
    public class EmployeeContext: DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options): base(options)
        { }
        public DbSet<Employee>Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

    }
}
