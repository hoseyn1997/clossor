using API.Models;
using API.Persistence;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[AllowAnonymous]
public class ContactController : BaseApiController
{

    private readonly DataContext _context;

    public ContactController(DataContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<ContactUs>> AddNewQuestion(ContactUs contactUs)
    {
        _context.ContactUs.Add(contactUs);
        var succes = await _context.SaveChangesAsync() > 0;
        if (succes) return contactUs;
        return BadRequest("Some thing Went Wrong...");
    }

    [HttpGet]
    public async Task<ActionResult<List<ContactUs>>> GetContacts()
    {
        var contacts = await _context.ContactUs.ToListAsync();
        return contacts;
    }
}
