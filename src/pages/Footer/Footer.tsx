// import Hyperlink from "../Hyperlink/Hyperlink";
import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <p>UPSKILL FOR A BETTER FUTURE</p>
      <label>Request More Information</label>
      <p>
        Lift Media, LLC is a clinical stage healthcare company which is
        devloping a unique.
      </p>
      <div className="contact-link">
      {/* <Hyperlink url="https://example.com" linkText="Contact Us" /> */}
      </div>
      <p>© 2019 Lift Media, LLC</p>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="40"
          viewBox="0 0 63 40"
          fill="none"
          id="Logo"
          aria-hidden="true"
        >
          <g id="logogram">
            <path
              d="M63 29.3506L38.117 5.08907C37.4008 4.39081 36.4402 4 35.44 4C31.9983 4 30.2991 8.18294 32.7659 10.583L59.4712 36.5666C60.7577 37.8183 59.8715 40 58.0765 40H9.65685C8.59599 40 7.57857 39.5786 6.82843 38.8284L1.17157 33.1716C0.421426 32.4214 0 31.404 0 30.3431V10.6484L24.883 34.9109C25.5992 35.6092 26.5598 36 27.5601 36C31.0017 36 32.7009 31.8171 30.2342 29.417L3.52882 3.43345C2.24227 2.18166 3.12849 0 4.92354 0H53.3431C54.404 0 55.4214 0.421427 56.1716 1.17157L61.8284 6.82843C62.5786 7.57857 63 8.59599 63 9.65685V29.3506Z"
              fill="#007BFF"
            />
          </g>
        </svg>
          {/* <div className="footer-links"> 
          <Hyperlink url="https://example.com" linkText="Team" />
          <Hyperlink url="https://example.com" linkText="Case Studies" />
          <Hyperlink url="https://example.com" linkText="Publications" />
        </div> */}
        <div className="social-links show">
          <a
            href="https://linkedin.com"
            className="hyperlink linkedin-icon"
            aria-label="LinkedIn"
            target="blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            className="hyperlink facebook-icon"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="hyperlink instagram-icon"
            aria-label="Instagram"
            target="blank"
            rel="noeferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            className="hyperlink youtube-icon"
            aria-label="Youtube"
            target="blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
