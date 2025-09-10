import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Social Links */}
      <div className="flex gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ranit-rubbyat-sultan-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <img
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
          />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Md-Raint-Rubbyat-Sultan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <img
            src="https://img.icons8.com/fluency/48/github.png"
            alt="github"
          />
        </a>
        {/* Whats app */}
        <a
          href="https://wa.me/+8801831495895"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <img
            src="https://img.icons8.com/color/48/whatsapp--v1.png"
            alt="github"
          />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span className="font-semibold">Md Ranit Rubbyat Sultan</span>
      </p>
    </div>
  );
};

export default Footer;
