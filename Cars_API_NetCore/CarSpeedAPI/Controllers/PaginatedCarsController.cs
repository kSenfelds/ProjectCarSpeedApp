using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeedAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    [Route("pages")]
    [ApiController]
    public class PaginatedCarsController : BaseApiController
    {
        
        public PaginatedCarsController(ICarService carService): base (carService)
        {
        }

        [HttpGet]
        public async Task<IActionResult> Get(int pageIndex)
        {
            if (pageIndex < 1)
                return BadRequest("PageIndex must be greater than 0.");

            var cars =  await PaginatedList<Car>.CreateAsync(_carService.GetQueryableCars(), pageIndex);

            return pageIndex > cars.TotalPages ? NotFound() : Ok(cars);
        }

        [HttpGet]
        [Route("filters")]
        public async Task<IActionResult> Get(int pageIndex, int minSpeed, DateTime from, DateTime to)
        {
            if (pageIndex < 1)
                return BadRequest("PageIndex must be greater than 0.");

            var pages = await PaginatedList<Car>.CreateAsync(_carService.GetQueryableCars().
                Where(c => c.Speed >= minSpeed && c.TimeStamp>= from && c.TimeStamp<= to), pageIndex);

            return Ok(pages);
        }
    }
}