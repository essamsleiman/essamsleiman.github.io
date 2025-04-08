import { Globe } from "lucide-react";
import Image from "next/image";
import canvasLogo from "/essamsleiman.github.io/logo/canvas_logo.png";
import harvardLogo from "/essamsleiman.github.io/logo/harvard_logo.png";
import twitchLogo from "/essamsleiman.github.io/logo/twitch_logo_1.png";
import awsLogo from "/essamsleiman.github.io/logo/aws_logo.png";
import kommaLogo from "/essamsleiman.github.io/logo/komma_logo.svg";
import codelabLogo from "/essamsleiman.github.io/logo/codelabdavis_logo.jpeg";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 style={{ marginBottom: 0, lineHeight: 1 }}>Hi I'm Essam 👋</h1>
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
          Previously, I built AI systems at Twitch and AWS, training
          billion-parameter models. Co-founded{" "}
          <a
            href="https://github.com/essamsleiman/komma-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Komma
          </a>{" "}
          (sales automation) and led
          <a
            href="https://www.codelabdavis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            CodeLab
          </a>
          , building software for clients like{" "}
          <a
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snapchat
          </a>
          .
        </p>
        <p>
          I'm based in SF and love to play backetball, explore coffee shops, and
          hike. Feel free to reach out, you can find me on{" "}
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
        <h2>Work</h2>

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
            Working on LLMs, Vision Models. Over 100+ citations in top
            conferences like CVPR and ECCV. Check out{" "}
            <a
              href="https://scholar.google.com/citations?user=mHRMvnUAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
            >
              my Google Scholar
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
            Trained Twitch's first foundation model. Developed a continual
            learning framework for unsupervised, online model training. Improved
            downstream task accuracy across the board by 10%+
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
            Built{" "}
            <a
              href="https://aws.amazon.com/ivs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS IVS
            </a>
            's first ML-based video understanding platform. Service in
            production
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
            Led development and sales at{" "}
            <a
              href="https://github.com/essamsleiman/komma-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Komma
            </a>
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
            <a
              href="https://www.codelabdavis.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeLab
            </a>{" "}
            is the largest CS student org with 150+ members where we build
            software for tech companies like Snapchat.{" "}
          </div>
        </div>
      </div>

      <button className="theme-toggle" aria-label="Toggle theme">
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
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </button>

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
