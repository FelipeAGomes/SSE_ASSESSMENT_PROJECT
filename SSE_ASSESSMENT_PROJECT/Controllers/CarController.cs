using Microsoft.AspNetCore.Mvc;
using SSE_ASSESSMENT_PROJECT.Services;

namespace SSE_ASSESSMENT_PROJECT.Controllers
{
    public class CarController : Controller
    {
        private readonly ICarService _carService;

        public CarController(ICarService carService)
        {
            _carService = carService;
        }

        public IActionResult Index()
        {
            var cars = _carService.GetCars();
            Random random = new();
            var randomList = cars.OrderBy(x => random.Next());

            return View(randomList.ToList());
        }

        [HttpGet]
        public IActionResult ListCars()
        {
            var cars = _carService.GetCars();
            return Ok(cars);
        }
    }
}