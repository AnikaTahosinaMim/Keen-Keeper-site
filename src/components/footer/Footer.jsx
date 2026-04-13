import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiCitrix } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10">
      <div className="text-center justify-center items-center space-y-3">
        <h2 className="text-5xl font-bold text-white">KeenKeeper</h2>
        <p className="text-white text-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-xl  text-white">Social Links</p>
        <div className="flex gap-2 justify-center items-center text-center">
          <a
            className="border-none rounded-full  text-black p-2 bg-white"
            href=""
          >
            <IoLogoInstagram></IoLogoInstagram>{" "}
          </a>
          <a
            className="border-none rounded-full  text-black p-2 bg-white"
            href=""
          >
            <FaFacebookSquare></FaFacebookSquare>{" "}
          </a>
          <a
            className="border-none rounded-full  text-black p-2 bg-white"
            href=""
          >
            <SiCitrix></SiCitrix>{" "}
          </a>
        </div>
        <div className="container mx-auto mt-8">
          <hr className="text-gray-600" />
          <div className="flex justify-between text-sm text-gray-300">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-3">
              <p>Privacy policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
