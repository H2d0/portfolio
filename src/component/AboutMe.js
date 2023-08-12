import '../style/style.css'
import profile from "../component/images/IMG_20230808_142006.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function AboutMe() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
    return (
      <>
        <section className="about-me" id="about-me">
          <div className="container">
            <div className="row justify-content-center">
              <div className="cont-text">
                <h2 className="about-title col-12">About Me</h2>
              </div>
              <div className="col-lg-5 col-12" data-aos="fade-right">
                <div className="about-me-img">
                  <div className="aboutImg">
                    <img
                      className="img-about img-fluid "
                      src={profile}
                      alt=""
                    />
                    <div className="shadow-about"></div>
                    <div className="gromectric-box"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12" data-aos="fade-left">
                <div className="about-me-content">
                  <h2 className="about-text">About Me.</h2>
                  <p className="about-p">
                    Passionate about creating
                    <span className="span"> Web Pages</span> with
                    <span className="span">UI/UX User Interface</span>, I have
                    years of experience and many clients are happy with the
                    projects carried out.
                  </p>
                  <p className="about-p2">
                    <span className="span">. My Skills Are:</span>HTML, CSS,
                    JavaScript, React, BOOTSTRAP
                  </p>
                  <button className="btn btn-dark about-btn">
                    <svg
                      className="me-2 teleg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M5.788 14.02a.746.746 0 0 0 .132.031a456.056 456.056 0 0 1 .844 2.002c.503 1.202 1.01 2.44 1.121 2.796c.139.438.285.736.445.94c.083.104.178.196.29.266a.88.88 0 0 0 .186.088c.32.12.612.07.795.009a1.313 1.313 0 0 0 .304-.15L9.91 20l2.826-1.762l3.265 2.502c.048.037.1.068.156.093c.392.17.772.23 1.13.182c.356-.05.639-.199.85-.368a1.992 1.992 0 0 0 .564-.728l.009-.022l.003-.008l.002-.004v-.002l.001-.001a.756.756 0 0 0 .04-.133l2.98-15.025a.752.752 0 0 0 .014-.146c0-.44-.166-.859-.555-1.112c-.334-.217-.705-.227-.94-.209c-.252.02-.486.082-.643.132a3.458 3.458 0 0 0-.26.094l-.011.005l-16.714 6.556l-.002.001a2.296 2.296 0 0 0-.167.069a2.522 2.522 0 0 0-.38.212c-.227.155-.75.581-.661 1.285c.07.56.454.905.689 1.071c.128.091.25.156.34.199c.04.02.126.054.163.07l.01.003l3.169 1.067Zm14.138-9.152h-.002a.785.785 0 0 1-.026.011L3.164 11.444a.818.818 0 0 1-.026.01l-.01.003a1.126 1.126 0 0 0-.09.04a.851.851 0 0 0 .086.043l3.142 1.058a.75.75 0 0 1 .16.076l10.377-6.075l.01-.005a1.59 1.59 0 0 1 .124-.068c.072-.037.187-.091.317-.131c.09-.028.357-.107.645-.014a.854.854 0 0 1 .588.689a.84.84 0 0 1 .003.424c-.07.275-.262.489-.438.653c-.15.14-2.095 2.016-4.014 3.868l-2.613 2.52l-.465.45l5.872 4.502a.536.536 0 0 0 .251.04a.229.229 0 0 0 .117-.052a.495.495 0 0 0 .103-.12l.002-.001l2.89-14.573a1.858 1.858 0 0 0-.267.086h-.002Zm-8.461 12.394l-1.172-.898l-.284 1.805l1.456-.907Zm-2.247-2.68l1.165-1.125l2.613-2.522l.973-.938l-6.52 3.817l.035.082a339.2 339.2 0 0 1 1.22 2.92l.283-1.8a.747.747 0 0 1 .231-.435Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Concat Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default AboutMe;