using API.Interfaces;
using API.Models;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Courses;

public class UserCoursesList
{
  private readonly IUserAccessor _userAccessor;
  private readonly DataContext _context;
  public UserCoursesList(IUserAccessor userAccessor, DataContext context)
  {
    _userAccessor = userAccessor;
    _context = context;
  }


  public async Task<List<UserCourse>> GetUserCourses()
  {
    var username = _userAccessor.GetUsername();
    var user = await _context.Users
      .Include(x => x.UserCourses)
      .ThenInclude(x => x.Course)
      .FirstOrDefaultAsync(x => x.UserName == username);
    if (user.UserCourses != null)
      return user.UserCourses.ToList();
    else
      return new List<UserCourse> { };
  }
}
