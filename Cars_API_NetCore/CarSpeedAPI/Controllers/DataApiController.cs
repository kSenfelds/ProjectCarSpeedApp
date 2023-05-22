using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeed.Data;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    [Route("data")]
    [ApiController]
    public class DataApiController : BaseApiController
    {
        
        public DataApiController(ICarService carService) : base(carService)
        {
            
        }

        [HttpPut]
        public IActionResult Put(Car[] cars)
        {
            _carService.AddCars(cars);
            return Ok(cars);
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            _carService.DeleteCars();
            return Ok();
        }
    }
}