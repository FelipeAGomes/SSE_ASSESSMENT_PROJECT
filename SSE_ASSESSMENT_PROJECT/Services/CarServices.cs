using System;
using SSE_ASSESSMENT_PROJECT.Models;

namespace SSE_ASSESSMENT_PROJECT.Services
{
	public class CarServices : ICarService
	{
        private readonly List<Car> cars = new()
        {
            new Car(1, "V40", "Volvo"),
            new Car(2, "Golf", "VW"),
            new Car(3, "GLA", "Mercedes"),
            new Car(4, "Range Rover", "Land Rover"),
            new Car(5, "Mustang", "Ford"),
            new Car(6, "Corolla", "Toyota"),
            new Car(7, "Rav4", "Toyota"),
        };

        public List<Car> GetCars()
        {
            return cars;
        }
    }
}

