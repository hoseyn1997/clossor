using API.Interfaces;
using API.Persistence;
using Microsoft.EntityFrameworkCore;

namespace API.Application.Courses;

public class RemoveUserCourse
{
  private readonly DataContext _context;
  private readonly IUserAccessor _userAccessor;
  private readonly Guid _courseId;
  public RemoveUserCourse(DataContext context, IUserAccessor userAccessor, Guid courseId)
  {
    _userAccessor = userAccessor;
    _context = context;
    _courseId = courseId;
  }

  public async Task<bool> RemoveUserCourseAsync()
  {
    var username = _userAccessor.GetUsername();
    var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == username);

    var course = await _context.Courses.FirstOrDefaultAsync(x => x.Id == _courseId);
    if (course == null) return false;

    var userCourse = await _context.UserCourses
      .FirstOrDefaultAsync(x => x.AppUserId == user.Id && x.CourseId == course.Id);
    if (userCourse == null) return false;

    _context.UserCourses.Remove(userCourse);
    var success = await _context.SaveChangesAsync() > 0;
    if (success) return true;
    return false;
  }
}
