"use client"
import Image from 'next/image';
import RegisterButton from './components/registerButton';
import { FaArrowDown } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 opacity-75 animate-pulse"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-down">
          Welcome to <span className="text-indigo-300">OpportunityHub</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto animate-fade-in-up">
          Discover endless opportunities at your college. Connect, learn, and grow your skills with exclusive internships, scholarships, and events.
        </p>
        
        <RegisterButton />

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-gray-200 animate-fade-in-up-delayed">
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg">Exclusive Internships</h3>
            <p className="text-sm">Gain real-world experience with our exclusive internships.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg">Scholarships & Funding</h3>
            <p className="text-sm">Access scholarships to support your education and growth.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg">Career-Building Events</h3>
            <p className="text-sm">Join events that enhance your career and expand your network.</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 z-10 animate-bounce">
        <FaArrowDown className="text-white text-3xl opacity-75" />
      </div>

      {/* Background Image */}
      <Image
        src="/hero-image.jpg"
        alt="College Students Collaborating"
        layout="fill"
        className="object-cover object-center opacity-60"
        priority
      />
    </section>
  );
}
