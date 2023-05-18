using CarSpeed.Data;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    public abstract class BaseApiController : ControllerBase
    {
        protected ICarsDbContext _context;

        public BaseApiController(ICarsDbContext context)
        {
            _context = context;
        }
    }
}