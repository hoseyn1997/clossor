import AppContent from "../components/commons/BodyContext/AppContent";

export default function Latest() {
  return (
    <AppContent>
      <div className="bg-gray-100 dark:bg-gray-400 min-h-screen flex flex-col transition-all duration-700">
        <header className="bg-primary text-gray-500 dark:text-white p-6">
          <h1 className="text-4xl font-bold">Latest Updates</h1>
          <p className="mt-2 text-lg">
            Stay up-to-date with our latest news, articles, and projects.
          </p>
        </header>
        <main className="flex-grow p-6">
          <section className="text-black bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4">
              <i className="bi bi-newspaper text-primary mr-2"></i>
              New Article: The Future of Technology
            </h2>
            <p className="text-gray-700 mb-2">
              Published on: <strong>September 25, 2023</strong>
            </p>
            <p className="text-gray-700 mb-4">
              In our latest article, we explore innovative trends that are
              shaping the future of technology. From artificial intelligence to
              blockchain, learn how these advancements are impacting industries
              globally.
            </p>
            <a href="#" className="text-blue-500 font-semibold underline">
              Read More
            </a>
          </section>

          <section className="text-black bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4">
              <i className="bi bi-bell-fill text-primary mr-2"></i>
              Announcement: Upcoming Webinar
            </h2>
            <p className="text-gray-700 mb-2">
              Date: <strong>October 15, 2023</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Join us for an interactive webinar where our experts will discuss
              the latest trends and best practices in digital marketing. This is
              a great opportunity to enhance your skills and engage with
              industry leaders.
            </p>
            <a href="#" className="text-blue-500 font-semibold underline">
              Register Now
            </a>
          </section>

          <section className="text-black bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4">
              <i className="bi bi-projects text-primary mr-2"></i>
              Project Launch: Eco-Friendly App
            </h2>
            <p className="text-gray-700 mb-2">
              Launch Date: <strong>November 1, 2023</strong>
            </p>
            <p className="text-gray-700 mb-4">
              We are excited to announce the launch of our Eco-Friendly App,
              designed to help users reduce their carbon footprint through
              eco-conscious choices and community engagement. Stay tuned for
              more updates on this launch!
            </p>
            <a href="#" className="text-blue-500 font-semibold underline">
              Learn More
            </a>
          </section>
        </main>
        <footer className="bg-gray-800 text-white p-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </AppContent>
  );
}
