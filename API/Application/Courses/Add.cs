using API.Models;
using API.Persistence;

namespace API.Application.Courses;

public class Add
{
  private readonly DataContext _context;
  private readonly Course _course;
  public Add(DataContext context, Course course)
  {
    _context = context;
    _course = course;
  }

  public async Task<Course> AddCourseAsync()
  {
    _context.Courses.Add(_course);
    var success = await _context.SaveChangesAsync() > 0;
    if (success)
      return _course;
    else return null;
  }
}
