import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Essam Sleiman",
  description: "Personal website of Essam Sleiman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="theme-toggle-script" strategy="afterInteractive">
          {`
            (function() {
              const themeToggle = document.querySelector('.theme-toggle');
              
              if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                  const isDarkMode = document.documentElement.classList.contains('dark');
                  
                  if (isDarkMode) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                  }
                });
              }
              
              // Set initial theme based on system preference or localStorage
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `}
        </Script>
        <Script id="work-items-script" strategy="afterInteractive">
          {`
            (function() {
              const workHeaders = document.querySelectorAll('.work-header');
              
              workHeaders.forEach(header => {
                header.addEventListener('click', () => {
                  const workItem = header.closest('.work-item');
                  const details = workItem.querySelector('.work-details');
                  const chevron = header.querySelector('.chevron svg');
                  
                  // Toggle visibility
                  if (details.style.display === 'none' || !details.style.display) {
                    details.style.display = 'block';
                    chevron.style.transform = 'rotate(180deg)';
                  } else {
                    details.style.display = 'none';
                    chevron.style.transform = 'rotate(0)';
                  }
                });
              });
              
              // Initially hide all details
              document.querySelectorAll('.work-details').forEach(details => {
                details.style.display = 'none';
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
