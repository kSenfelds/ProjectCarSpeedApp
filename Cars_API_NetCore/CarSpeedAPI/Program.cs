using CarSpeed.Core.Models;
using CarSpeed.Core.Services;
using CarSpeed.Data;
using CarSpeed.Services;
using Microsoft.EntityFrameworkCore;

namespace CarSpeedAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<CarsDbContext>(options =>
                options.UseMySql(builder.Configuration.GetConnectionString("CarsData"), new MySqlServerVersion(new Version(6, 0, 0))));
            
            builder.Services.AddTransient<ICarsDbContext, CarsDbContext>();
            builder.Services.AddScoped<IDbService, DbService>();
            builder.Services.AddScoped<IEntityService<Car>, EntityService<Car>>();
            builder.Services.AddScoped<ICarService, CarService>();

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseCors(options =>
                options.WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader());

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}