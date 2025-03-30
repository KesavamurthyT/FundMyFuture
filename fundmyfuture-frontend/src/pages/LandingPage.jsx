// src/pages/LandingPage.jsx

import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you still want to use App.css

// Main LandingPage Component
function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Reveal sections on scroll
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    window.dispatchEvent(new Event('scroll'));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 flex justify-between items-center px-[5%] py-4 bg-slate-800 shadow-md transition-all duration-300 ${scrolled ? 'py-3 bg-slate-800/95 backdrop-blur-sm' : ''}`}>
        <div className="text-white text-2xl font-bold">
          Fund<span className="text-blue-500 inline-block transition-transform duration-300 hover:scale-110">MyFuture</span>
        </div>
        <div className="flex gap-8">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#how-it-works" className="text-white">How It Works</a>
          <a href="#ngos" className="text-white">NGOs</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center px-[5%] text-white h-[85vh] overflow-hidden bg-gradient-to-r from-blue-500/90 to-blue-600/95 bg-center bg-cover">
        <div className="absolute top-[-5rem] left-[-5rem] w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-[-5rem] right-[-5rem] w-[30rem] h-[30rem] bg-white/10 rounded-full animate-float-reverse"></div>

        <div className="max-w-[700px] z-10 opacity-0 translate-y-5 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-shadow">Empowering Education Through Donations</h1>
          <p className="text-lg mb-10 max-w-[600px]">Join our mission to make quality education accessible to all. Together, we can transform lives and build a brighter future for students in need.</p>
          <div className="flex gap-6">
            <a href="#" className="relative overflow-hidden z-10 px-8 py-3 rounded-full font-semibold text-lg bg-red-500 text-white shadow-md transition-all duration-400 hover:-translate-y-1 hover:shadow-lg active:-translate-y-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-red-700 after:rounded-full after:z-[-1] after:transition-all after:duration-400 hover:after:h-full">Apply for Aid</a>
            <a href="#" className="relative overflow-hidden z-10 px-8 py-3 rounded-full font-semibold text-lg bg-white text-slate-800 shadow-md transition-all duration-400 hover:-translate-y-1 hover:shadow-lg active:-translate-y-0.5 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-gray-100 after:rounded-full after:z-[-1] after:transition-all after:duration-400 hover:after:h-full">Donate Now</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section py-20">
        <h2 className="text-4xl text-center">About FundMyFuture</h2>
        <div className="text-center max-w-3xl mx-auto text-lg">
          <p>FundMyFuture is a platform dedicated to connecting generous donors with deserving students who need financial support to pursue their educational dreams. We believe that every student deserves access to quality education regardless of their financial situation.</p>
          <br />
          <p>Working with verified NGOs and educational institutions, we ensure that 100% of your donations go directly to funding students' education, creating real impact and transforming lives.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section py-20 bg-gray-100">
        <h2 className="text-4xl text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
          <div className="step">
            <h3 className="text-2xl">Step 1: Register</h3>
            <p>Create an account as a student seeking support or as a donor looking to make a difference.</p>
          </div>
          <div className="step">
            <h3 className="text-2xl">Step 2: Apply or Donate</h3>
            <p>Students can apply for funding by sharing their story. Donors can browse through verified requests and contribute.</p>
          </div>
          <div className="step">
            <h3 className="text-2xl">Step 3: Track Impact</h3>
            <p>Follow the journey of students you've supported and see how your donations are making a real difference.</p>
          </div>
        </div>
      </section>

      {/* NGOs & Testimonials Section */}
      <section id="ngos" className="section py-20">
        <h2 className="text-4xl text-center">Featured NGOs & Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Add your NGO Cards here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-slate-800 text-white py-16 px-[5%] text-center">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>
        <div className="text-2xl font-bold mb-8">
          Fund<span className="text-blue-500">MyFuture</span>
        </div>
        <div className="flex justify-center flex-wrap gap-8 my-8">
          {/* Add your FooterLinks here */}
        </div>
        <div className="mt-8 text-gray-400 text-sm">© 2025 FundMyFuture. All rights reserved.</div>
      </footer>
    </>
  );
}

export default LandingPage;
