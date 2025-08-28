import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <hr className="bg-black my-4 w-full" />
      <footer className="bg-[#ffff] text-neutral-content p-10" data-aos="fade">
        <div className="footer sm:footer-horizontal">
          <aside>
            <img
              src="./src/assets/img/logo-text-dark.png"
              alt="footer-logo"
              className="w-[150px] h-[85px]"
            />
            <p className="text-black">
              PixFlow.
              <br />
              Providing reliable tech since 2025
            </p>
          </aside>

          <nav>
            <h6 className="footer-title text-black">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://github.com/Afaandii"
                className="text-3xl text-black"
                aria-label="github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.instagram.com/afandiii._/"
                className="text-3xl text-black"
                aria-label="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-afandi-588139306"
                className="text-3xl text-black"
                aria-label="linkdln"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </nav>

          <nav>
            <h6 className="footer-title text-black">Services</h6>
            <a href="/" className="link link-hover text-black">
              Branding
            </a>
            <a href="/" className="link link-hover text-black">
              Design
            </a>
            <a href="/" className="link link-hover text-black">
              Marketing
            </a>
            <a href="/" className="link link-hover text-black">
              Advertisement
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Company</h6>
            <a href="/" className="link link-hover text-black">
              About us
            </a>
            <a href="/" className="link link-hover text-black">
              Contact
            </a>
            <a href="/" className="link link-hover text-black">
              Jobs
            </a>
            <a href="/" className="link link-hover text-black">
              Press kit
            </a>
          </nav>
          <nav>
            <h6 className="footer-title text-black">Legal</h6>
            <a href="/" className="link link-hover text-black">
              Terms of use
            </a>
            <a href="/" className="link link-hover text-black">
              Privacy policy
            </a>
            <a href="/" className="link link-hover text-black">
              Cookie policy
            </a>
          </nav>
        </div>

        <hr className="h-[2px] bg-black my-4 w-full" />
        <div className="w-full">
          <p className="font-poppins z-30 text-black text-[13px]">
            © {new Date().getFullYear()} PixFlow
          </p>
        </div>
      </footer>
    </>
  );
}
