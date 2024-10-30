namespace API.Models;

public class UserCourse
{
    public AppUser User { get; set; }
    public string AppUserId { get; set; }
    public Course Course { get; set; }
    public Guid CourseId { get; set; }
}
