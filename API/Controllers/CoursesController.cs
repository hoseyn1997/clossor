using API.Application.Courses;
using API.DTOs;
using API.Interfaces;
using API.Models;
using API.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[AllowAnonymous]
public class CoursesController : BaseApiController
{
  private readonly DataContext _context;
  private readonly IUserAccessor _userAccessor;
  public CoursesController(DataContext context, IUserAccessor userAccessor)
  {
    _userAccessor = userAccessor;
    _context = context;
  }

  [HttpGet] // api/courses
  public async Task<ActionResult<List<Course>>> GetCourses()
  {
    return await _context.Courses.OrderByDescending(x => x.CreationDate).ToListAsync();
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<CourseDto>> GetCourse(Guid id)
  {
    // var username = _userAccessor.GetUsername();
    var user = await _context.Users
      .Include(x => x.UserCourses)
      .FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
    var course = await _context.Courses.FindAsync(id);

    var IsAddedCourse = user != null ? user.UserCourses.FirstOrDefault(x => x.CourseId == course.Id) != null : false;
    return new CourseDto(course, IsAddedCourse);

  }

  [HttpPost] //api/courses
  public async Task<ActionResult<Course>> AddCourse(Course course)
  {
    var Add = new Add(_context, course);
    var new_course = await Add.AddCourseAsync();
    return new_course != null ? new_course : BadRequest("something went wrong...");
  }

  [Authorize]
  [HttpPost("addUserCourse/{id}")] // id = courseId
  public async Task<ActionResult<bool>> AddUserCourse(Guid id)
  {
    var AddUserCourse = new AddUserCourse(_context, id, _userAccessor);
    var new_user_course = await AddUserCourse.AddNewCourse();
    return new_user_course != null ? true : BadRequest("something went wrong...");
  }

  [Authorize]
  [HttpGet("userCourses")]
  public async Task<ActionResult<List<UserCourse>>> GetUserCoursesAsync()
  {
    var userCoursesList = new UserCoursesList(_userAccessor, _context);
    var list = await userCoursesList.GetUserCourses();
    return list;
  }

  [Authorize]
  [HttpDelete("userCourses/remove/{id}")] // id = courseId
  public async Task<ActionResult<bool>> GetUserCoursesAsync(Guid id)
  {
    var removeUserCourse = new RemoveUserCourse(_context, _userAccessor, id);
    var result = await removeUserCourse.RemoveUserCourseAsync();
    return result;
  }

  [AllowAnonymous]
  [HttpGet("search/{predicate}")]
  public async Task<ActionResult<List<Course>>> SearchCourses(string predicate)
  {
    var search = new Search(_context, predicate);
    return await search.SearchCourse();
  }
}
