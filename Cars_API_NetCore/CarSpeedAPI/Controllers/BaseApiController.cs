﻿using CarSpeed.Core.Services;
using Microsoft.AspNetCore.Mvc;

namespace CarSpeedAPI.Controllers
{
    public abstract class BaseApiController : ControllerBase
    {
        protected ICarService _carService;

        public BaseApiController(ICarService carService)
        {
            _carService = carService;
        }
    }
}