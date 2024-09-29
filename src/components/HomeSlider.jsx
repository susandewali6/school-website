import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Sewakai Church</h1>
            <p className="text-lg mb-8">Join us for worship, community, and spiritual growth</p>
            <a href="#services" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Sunday Worship</h3>
              <p className="text-gray-600">Join us every Sunday for a time of worship and teaching.</p>
              <p className="text-gray-600 mt-2">Time: 10:00 AM - 12:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Bible Study</h3>
              <p className="text-gray-600">Grow deeper in your faith through our weekly Bible studies.</p>
              <p className="text-gray-600 mt-2">Time: Wednesday, 7:00 PM - 8:30 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Community Outreach</h3>
              <p className="text-gray-600">Join us as we serve and bless our community together.</p>
              <p className="text-gray-600 mt-2">Time: Saturday, 10:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Sewakai Church</h2>
          <p className="text-gray-600 mb-6">
            Sewakai Church is a community of believers dedicated to sharing the love of Christ and helping people grow spiritually.
            We believe in creating a warm, welcoming environment where everyone can experience God's love.
          </p>
          <p className="text-gray-600">
            Our mission is to reach the world with the good news of the gospel and to equip believers to live out their faith
            through service, discipleship, and worship.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="mb-4">Have any questions or want to get in touch?</p>
          <a href="https://www.facebook.com/photo/?fbid=117509671277523&set=a.117509687944188&__tn__=%3C" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">
            facebook
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Sewakai Church. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
