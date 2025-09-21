import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

export default function Header() {
  return (
    <header className="card-3d rounded-3xl p-8 shadow-xl text-center space-y-4">
      <div className="flex justify-center">
        <img
          src={profilePic}
          alt="Hadi Khan"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        HADI KHAN
      </h1>
      <p className="text-gray-700 dark:text-gray-300">Bareilly, UP 243005</p>

      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        <a
          href="tel:+919528091316"
          className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaPhone /> Call
        </a>
        <a
          href="mailto:khanhadi6@gmail.com"
          className="flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaEnvelope /> Email
        </a>
      </div>

      <div className="flex justify-center gap-6 mt-4 text-gray-800 dark:text-white text-2xl">
        <a
          href="https://www.linkedin.com/in/hadi-khan-55b575147/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/hadikhanhk786"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-600 dark:hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
      </div>
    </header>
  );
}
