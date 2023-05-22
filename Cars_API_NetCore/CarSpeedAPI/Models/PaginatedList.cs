using Microsoft.EntityFrameworkCore;

namespace CarSpeedAPI.Models
{
    public class PaginatedList<T> : List<T>
    {
        public int PageIndex { get; private set; }
        public int TotalPages { get; private set; }

        private const int pageSize = 20;


        public PaginatedList(List<T> items, int count, int pageIndex)
        {
            PageIndex = pageIndex;
            TotalPages = (int)Math.Ceiling(count / (double)pageSize);

            this.AddRange(items);
        }

        public static async Task<PaginatedList<T>> CreateAsync(IQueryable<T> source, int pageIndex)
        {
            var count =  source.Count();
            var items = await source.Skip(
                (pageIndex - 1) * pageSize).Take(pageSize).ToListAsync();
            
            return new PaginatedList<T>(items, count, pageIndex);
        }
    }
}