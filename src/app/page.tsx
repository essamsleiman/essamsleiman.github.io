import { Globe } from "lucide-react";
import Image from "next/image";
import canvasLogo from "./logo/canvas_logo.png";
import harvardLogo from "./logo/harvard_logo.png";
import twitchLogo from "./logo/twitch_logo_1.png";
import awsLogo from "./logo/aws_logo.png";
import kommaLogo from "./logo/komma_logo.svg";
import codelabLogo from "./logo/codelabdavis_logo.jpeg";
import davisLogo from "./logo/davis_logo.png";
import glovesLogo from "./logo/gloves_logo.jpg";
import profilePicture from "./logo/profile_pic.jpg";
export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-picture">
          <Image
            src={profilePicture}
            alt="Profile picture"
            width={120}
            height={120}
          />
        </div>
        <div className="header-content">
          <h1 style={{ marginBottom: 0, lineHeight: 1 }}>Hi i'm Essam 👋</h1>
          <div className="location" style={{ marginTop: 8, marginBottom: 8 }}>
            <Globe size={16} />
            <span>San Francisco, CA</span>
          </div>
          <div className="social-links">
            <a
              href="mailto:essam@canvas.inc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/essamsleiman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/essam-sleiman-4253b1128/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/essamsleiman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="icon-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bio">
        <p>
          I'm CEO & Founder of{" "}
          <a
            href="https://canvas.inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Canvas AI
          </a>{" "}
          building ai agents for customer success backed by YC.
        </p>
        <p>
          {" "}
          Back in high school, I built a gloves distribution business making 6
          figures in revenue selling to local businesses through cold calling
          and ebay.
        </p>
        <p>
          Later in college, I built AI systems at Twitch and AWS, co-founded{" "}
          Komma (sales automation), and started{" "}
          <a
            href="https://www.codelabdavis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeLab
          </a>
          , a student builder club (now 150+ members)
        </p>

        <p>
          I'm based in SF and love to play backetball, grab coffee, and hike.
          Feel free to reach out, you can find me on{" "}
          <a
            href="https://x.com/essamsleiman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </div>

      <div className="section">
        <h2>Experience</h2>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo canvas">
              <Image
                src={canvasLogo}
                alt="Canvas AI (YC F24)"
                width={26}
                height={26}
              />
            </div>
            <div>
              <span className="company-name">Canvas AI (YC F24)</span>
              <span className="position">Founder</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            Building{" "}
            <a
              href="https://www.canvas.inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canvas AI
            </a>{" "}
            backed by YC. AI Agents for customer success teams.
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo harvard">
              <Image src={harvardLogo} alt="Harvard" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Harvard</span>
              <span className="position">Research Intern</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            worked on LLMs and Vision Models. Over 100+ citations in top
            conferences like CVPR and ECCV. Check out my{" "}
            <a
              href="https://scholar.google.com/citations?user=mHRMvnUAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Scholar
            </a>{" "}
            for more.
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo twitch">
              <Image src={twitchLogo} alt="Twitch" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Twitch</span>
              <span className="position">Applied Science Intern</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            Trained Twitch's first video foundation model. Developed a continual
            learning framework for unsupervised, online model training.
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo aws">
              <Image src={awsLogo} alt="AWS" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Amazon/AWS</span>
              <span className="position">ML Eng Intern</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            Built ml platform for{" "}
            <a
              href="https://aws.amazon.com/ivs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS IVS
            </a>{" "}
            customers to deploy their ml models. Service in production
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo komma">
              <Image src={kommaLogo} alt="Komma" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Komma</span>
              <span className="position">Co-Founder/CTO</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            covid hit and all meetings went online. scheduling a time to meet
            for clubs and group projects was a pain so we built komma to
            automate it. realized sales reps had a similar problem so we sold to
            them.
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo codelab">
              <Image src={codelabLogo} alt="CodeLab" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">CodeLab</span>
              <span className="position">Founding President</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            noticed there wasn't a strong builder community here, so founded and
            led{" "}
            <a
              href="https://www.codelabdavis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeLab
            </a>
            , which has become the largest builder club at uc davis with now
            over 150 members. we build internal tools for students and software
            for tech companies like Snapchat and Reddit.{" "}
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo codelab">
              <Image src={glovesLogo} alt="Gloves OD" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Gloves OD</span>
              <span className="position">Founder</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            started a glove distribution business in high school to support my
            family, reaching 6 figures in annual revenue. sourced latex and
            nitrile gloves and sold to SMBs including mechanic shops, medical
            clinics, and dental offices. prospected using yellow pages, cold
            called, delivered products, and later expanded to selling on ebay.
          </div>
        </div>
      </div>

      <div className="section" style={{ marginTop: "40px" }}>
        <h2>College</h2>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo harvard">
              <Image src={harvardLogo} alt="Harvard" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">Harvard</span>
              <span className="position">MS CSE</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            worked on different ai projects from automated data labeling to ai
            biz analyst - eventually leading to{" "}
            <a
              href="https://www.canvas.inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canvas AI
            </a>
            .
          </div>
        </div>

        <div className="work-item">
          <div className="work-header">
            <div className="company-logo canvas">
              <Image src={davisLogo} alt="UC Davis" width={26} height={26} />
            </div>
            <div>
              <span className="company-name">UC Davis</span>
              <span className="position">BS CS</span>
            </div>
            <div className="chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="work-details">
            Finished classes in 2.5 years. Took a year off to work at Twitch and
            build Komma.
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a
            href="mailto:essam@canvas.inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://x.com/essamsleiman"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/essamsleiman"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?user=mHRMvnUAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/essam-sleiman-4253b1128/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="copyright">
          {" "}
          {new Date().getFullYear()} Essam Sleiman
        </div>
      </footer>
    </div>
  );
}
