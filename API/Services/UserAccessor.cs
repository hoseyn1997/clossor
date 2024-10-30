using System.Security.Claims;
using API.Interfaces;

namespace API.Services;

public class UserAccessor : IUserAccessor
{
  private readonly IHttpContextAccessor _httpContextAccessor;
  public UserAccessor(IHttpContextAccessor httpContextAccessor)
  {
    _httpContextAccessor = httpContextAccessor;
  }
  public string GetUsername()
  {
    var reqtHeaders = _httpContextAccessor
      .HttpContext
      .Request
      .Headers;
    var userIdentifier = reqtHeaders.FirstOrDefault(x => x.Key == "UserIdentifier");
    var userIdentifierValue = userIdentifier.Value.ToString();

    return _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
  }
}
