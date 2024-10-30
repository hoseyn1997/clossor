using API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence;

public class DataContext : IdentityDbContext<AppUser>
{
  public DataContext(DbContextOptions options) : base(options)
  {
  }

  public DbSet<Course> Courses { get; set; }
  public DbSet<UserCourse> UserCourses { get; set; }
  public DbSet<ContactUs> ContactUs { get; set; }

  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    builder.Entity<UserCourse>(x => x.HasKey(aa => new { aa.CourseId, aa.AppUserId }));
    builder.Entity<UserCourse>()
      .HasOne(x => x.User)
      .WithMany(x => x.UserCourses)
      .HasForeignKey(x => x.AppUserId);
  }
}