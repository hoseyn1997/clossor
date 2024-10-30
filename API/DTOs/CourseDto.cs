using API.Models;

namespace API.DTOs;

public class CourseDto
{
  public CourseDto(Course course, bool isAdded)
  {
    Id = course.Id;
    Title = course.Title;
    Description = course.Description;
    CreationDate = course.CreationDate;
    LastModified = course.LastModified;
    Category = course.Category;
    TeacherName = course.TeacherName;
    IsAdded = isAdded;

  }
  public Guid Id { get; set; }
  public string Title { get; set; }
  public string Description { get; set; }
  public DateTime CreationDate { get; set; }
  public DateTime LastModified { get; set; }
  public string Category { get; set; }
  public string TeacherName { get; set; }
  public bool IsAdded { get; set; }
}
