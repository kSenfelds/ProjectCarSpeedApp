
namespace CarSpeed.Core.Models
{
    public class Car : Entity
    {
        public string LicencePlate { get; set; }
        public int Speed { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}