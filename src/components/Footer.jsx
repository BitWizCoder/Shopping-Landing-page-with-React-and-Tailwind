import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="container mx-auto text-white py-12 flex justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">FASHION</h1>
          <p className="text-[#8E8E8E]">Complete your style with awesome <br /> clothes from us.</p>
          <div className="flex">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="flex gap-24">
          <div>
            <h2 className="text-2xl">Company</h2>
            <div className="flex flex-col text-[#8E8E8E]">
              <a href="#">About</a>
              <a href="#">Contact us</a>
              <a href="#">Support</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Quick Link</h2>
            <div className="flex flex-col text-[#8E8E8E]">
              <a href="#">Share Location</a>
              <a href="#">Orders Tracking</a>
              <a href="#">Size Guide</a>
              <a href="#">FAQs</a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Legal</h2>
            <div className="flex flex-col text-[#8E8E8E]">
              <a href="#">Terms & conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
