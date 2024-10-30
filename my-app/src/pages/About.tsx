import AppContent from "../components/commons/BodyContext/AppContent";

export default function About() {
  return (
    <AppContent>
      <div className="bg-gray-100 dark:bg-gray-400 min-h-screen flex flex-col transition-all duration-700">
        <header className="bg-primary text-gray-500 dark:text-white p-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Learn more about our mission, vision, and values.
          </p>
        </header>
        <main className="flex-grow p-6">
          <section className="bg-white text-black shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              {/* <FaUserFriends className="text-blue-600 mr-2" />   */}
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              We are a passionate team dedicated to building innovative
              solutions that improve the lives of our users. Our mission is to
              provide exceptional service and create a positive impact in our
              community.
            </p>
            <p className="text-gray-700">
              Founded in 2020, we have quickly grown into a leading agency,
              working with a diverse range of clients, from startups to
              established enterprises. Our diverse skill set and commitment to
              excellence is what sets us apart.
            </p>
          </section>

          <section className="bg-white text-black shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              {/* <FaRocket className="text-blue-600 mr-2" />   */}
              Our Vision
            </h2>
            <p className="text-gray-700 mb-4">
              Our vision is to lead the industry in creating technologies that
              empower individuals and businesses alike. We strive to be at the
              forefront of innovation and excellence.
            </p>
            <p className="text-gray-700">
              By continuously improving our skills and knowledge, we aim to
              provide our clients with cutting-edge solutions that drive their
              success.
            </p>
          </section>

          <section className="bg-white text-black shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              {/* <FaSmile className="text-blue-600 mr-2" />   */}
              What We Do
            </h2>
            <p className="text-gray-700 mb-4">
              We provide a range of services, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Web Development</li>
              <li>Mobile Application Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Consultancy</li>
            </ul>
            <p className="text-gray-700">
              Our team is equipped with the skills and tools to help our clients
              succeed in their digital transformation journeys.
            </p>
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
