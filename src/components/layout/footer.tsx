import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { contactInfo, siteConfig } from '@/data/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: contactInfo.social.github!,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: contactInfo.social.linkedin!,
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: `mailto:${contactInfo.email}`,
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              Abdulrahman Al-Khulaifi
            </h3>
            <p className="text-text-secondary max-w-md">
              Computer Engineer | Web Developer | Open Source Technologist
              with 20+ years of experience in Kuwait.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about/"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience/"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Connect
            </h4>
            <div className="space-y-2">
              <p className="text-text-secondary">{contactInfo.location}</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-bg-tertiary hover:bg-primary-600 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            © {currentYear} {siteConfig.author}. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with ❤️ in Kuwait using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
} 