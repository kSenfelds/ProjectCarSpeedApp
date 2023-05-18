using CarSpeed.Core.Services;
using CarSpeed.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    [Route("graphic")]
    [ApiController]
    public class GraphicController : BaseApiController
    {
        private readonly ICarService _carService;
        public GraphicController(ICarsDbContext context, ICarService carService):base (context)
        {
            _carService=carService;
        }

        [HttpGet]
        public IActionResult Get(DateTime date)
        {
            var result = _carService.GetAverageSpeedsByHour(date);
            return Ok(result);
        }
    }
}
