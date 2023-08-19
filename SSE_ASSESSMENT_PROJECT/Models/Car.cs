namespace SSE_ASSESSMENT_PROJECT.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string Brand { get; set; }

        public Car(int id, string model, string brand)
        {
            Id = id;
            Model = model;
            Brand = brand;
        }
    }
}