import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer flex justify-between items-center bg-neutral text-neutral-content p-10">
        <aside>
          <img
            src="./src/assets/img/logo-gallery-photo-web-nw.png"
            alt="logo footer"
            className="w-20 h-[75px] rounded-full"
          />
          <p className="mb-2 mt-2 font-bold">Website Foto Kenangan</p>
          <p>Providing reliable tech since 2025</p>
        </aside>
        <nav className="flex flex-col gap-4">
          <h6 className="footer-title">Social Media</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/Afaanndiii">
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
            <a href="https://github.com/Afaandii">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
          </div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <span className="text-lg font-bold text-red-500 ml-2">Afandi</span>
          </p>
        </nav>
      </footer>
    </>
  );
}
