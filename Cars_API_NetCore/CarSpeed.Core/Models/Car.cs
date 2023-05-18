using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarSpeed.Core.Models
{
    public class Car : Entity
    {
        public string LicencePlate { get; set; }
        public int Speed { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
