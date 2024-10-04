import React from "react";

const Contact = () => {
  return (
    <section className="bg-yellow-300 text-white text-xl py-12  rounded-xl mt-36">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 ">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Contact Information */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Reach Out</h3>
            <p className="mb-4">
              Sewakai Church is always here to welcome and support you. Please feel free to reach out using the form or contact details below.
            </p>
            <p className="mb-2">
              <strong>Address:</strong> 123 Church St, Your City, 12345
            </p>
            <p className="mb-2">
              <strong>Email:</strong> info@sewakaichurch.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
          </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1605535076746!2d85.24136690000003!3d27.681432200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb230060e7ca1f%3A0xf004e25086f3d6df!2sSewakai%20church!5e0!3m2!1sen!2snp!4v1728014301092!5m2!1sen!2snp" className="w-full h-96 px-10 " ></iframe>
      </div>
    </section>
  );
};

export default Contact;
