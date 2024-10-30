using API.Models;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Courses;

public class Search
{
  private readonly DataContext _context;
  private readonly string _predicate;
  public Search(DataContext context, string predicate)
  {
    _context = context;
    _predicate = predicate;
  }
  public async Task<List<Course>> SearchCourse()
  {
    var lessons = await _context.Courses
      .AsQueryable()
      .Where(x => x.Title.Contains(_predicate) || x.Category.Contains(_predicate))
      .Take(5)
      .ToListAsync();
    return lessons;
  }
}
