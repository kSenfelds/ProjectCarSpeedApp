using CarSpeed.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    [Route("graphic")]
    [ApiController]
    public class GraphicController : BaseApiController
    {
        
        public GraphicController(ICarService carService):base (carService)
        {
        }

        [HttpGet]
        public IActionResult Get(DateTime date) { 
            var result = _carService.GetAverageSpeedsByHour(date);
            return Ok(result);
        }
    }
}