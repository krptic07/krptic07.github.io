import React from 'react';

import { ReactComponent as TwitterIcon } from '../assets/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as WhatsAppIcon } from '../assets/icons/whatsapp.svg';
import { ReactComponent as ResumeIcon } from '../assets/icons/resume.svg';

export default function Header() {
    return (
        <footer className="footer clearfix">
            <div className="footer-social-links">
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Twitter"
                    href="https://twitter.com/krptic_07"
                >
                    <TwitterIcon className="social-link-icon" aria-label="Twitter" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="LinkedIn"
                    href="https://www.linkedin.com/in/krabhishek26/"
                >
                    <LinkedInIcon className="social-link-icon" aria-label="LinkedIn" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="GitHub"
                    href="https://github.com/krptic07"
                >
                    <GitHubIcon className="social-link-icon" aria-label="GitHub" />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="E-mail"
                    href="mailto:kumarabhishek22101997@gmail.com"
                >
                    <MailIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="E-mail"
                    />
                </a>
                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="WhatsApp"
                    href="https://wa.me/918092188208"
                >
                    <WhatsAppIcon
                        className="social-link-icon"
                        viewBox="0 0 308 308"
                        aria-label="WhatsApp"
                    />
                </a>

                <a
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-title="Résumé"
                    href="/assets/KumarAbhishekLatestResume.pdf"
                >
                    <ResumeIcon
                        className="social-link-icon"
                        viewBox="0 0 512 512"
                        aria-label="Résumé"
                    />
                </a>
            </div>
        </footer>
    );
}
