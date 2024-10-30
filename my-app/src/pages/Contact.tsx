import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default observer(function Contact() {
  const [result, setResult] = useState<string | undefined>(undefined);
  const {
    userStore: { user, isLogedIn },
    contactStore: { adding, addNewContact },
  } = useStore();
  return (
    <div className="mx-auto w-full p-2 lg:w-3/4">
      <section className="text-black dark:text-white">
        <h1 className="my-1 text-3xl font-bold">Contact Us</h1>
        <p className="my-3 grid w-full grid-cols-12 rounded bg-primary-light p-5 text-primary-strong">
          <i className="bi bi-info-square-fill col-span-2 text-4xl lg:col-span-1"></i>
          <span className="col-span-10 text-black lg:col-span-11">
            This is a contact page or a medium where you can reach up to us by
            providing the significant feedbacks, anime requests, dead links or
            concerns as well
          </span>
        </p>
        <div className="grid grid-cols-12 gap-2">
          <form
            id="contact-us"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const data = new FormData(form);
              addNewContact({
                id: uuid(),
                email: data.get("email") as string,
                message: data.get("message") as string,
                name: data.get("name") as string,
                subject: data.get("subject") as string,
              }).then(() => {
                form.reset();
                setResult("the request has sended successfully...");
              });
            }}
            className="gap-1 col-span-12 grid grid-cols-2 rounded 
            border-1 border-more-light text-xs lg:col-span-9 lg:gap-2 lg:shadow-secondary"
          >
            <div className="grid gap-2 p-1 lg:p-2 col-span-2 lg:col-span-1">
              <label>
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="rounded border-1 p-1 shadow-primary hover:border-solid hover:border-primary-color focus-visible:outline-none dark:bg-lighter-dark"
              />
            </div>
            <div className="grid gap-2 p-1 lg:p-2 col-span-2 lg:col-span-1">
              <label>
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="rounded border-1 p-1 shadow-primary hover:border-solid hover:border-primary-color focus-visible:outline-none dark:bg-lighter-dark"
              />
            </div>
            <div className="col-span-2 grid gap-2 p-1 lg:p-2">
              <label>
                Your Suject <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Your Subject"
                className="rounded border-1 p-1 shadow-primary hover:border-solid hover:border-primary-color focus-visible:outline-none dark:bg-lighter-dark"
              />
            </div>
            <div className="col-span-2 grid gap-2 p-1 lg:p-2">
              <label>
                Your Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                id="contact-message"
                rows={10}
                placeholder="Enter Your Message Here..."
                className="rounded border-1 p-1 shadow-primary hover:border-solid hover:border-primary-color focus-visible:outline-none dark:bg-lighter-dark"
              ></textarea>
            </div>
            <button
              id="send-contact-us"
              type="submit"
              className="mx-2 mb-2 col-span-2 justify-self-start rounded-lg border-1 border-primary-color px-5 py-2 text-primary-color transition-all hover:bg-primary-color hover:text-white"
            >
              {adding ? "Sending..." : "Send"}
            </button>
            {result && (
              <p className="font-bold bg-green-400 text-center px-2 py-1 col-span-2 rounded w-fit mx-auto mb-2 text-white text-lg">
                {result}
              </p>
            )}
          </form>
          <div className="col-span-3 hidden rounded border-1 border-more-light  lg:grid p-2">
            {isLogedIn && (
              <div className="font-bold text-center">
                <p className="text-2xl px-1 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  {user?.displayName.toUpperCase()} right?
                </p>
                What Do You Wanna Ask?
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
});
