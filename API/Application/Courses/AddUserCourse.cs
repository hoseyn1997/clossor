using API.Interfaces;
using API.Models;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Courses;

public class AddUserCourse
{
  private readonly DataContext _context;
  private readonly Guid _courseId;
  private readonly IUserAccessor _userAccessor;
  public AddUserCourse(DataContext context, Guid courseId, IUserAccessor userAccessor)
  {
    _userAccessor = userAccessor;
    _courseId = courseId;
    _context = context;
  }

  public async Task<UserCourse> AddNewCourse()
  {
    var course = await _context.Courses.FindAsync(_courseId);
    if (course == null) return null;

    var user = await _context.Users
      .Include(x => x.UserCourses)
      .FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());

    var isBeforeAdded = user.UserCourses.Any()
      &&
       user.UserCourses.FirstOrDefault(x => x.CourseId == _courseId) != null;
    if (isBeforeAdded) return null;

    var userCourse = new UserCourse
    {
      Course = course,
      User = user
    };
    await _context.UserCourses.AddAsync(userCourse);
    var success = await _context.SaveChangesAsync() > 0;

    if (success) return userCourse;
    else return null;
  }
}
