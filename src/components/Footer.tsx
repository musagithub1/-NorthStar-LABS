import { ArrowUpRight, MapPin } from "lucide-react";

export default function Footer({ onPrivacy }: { onPrivacy: () => void }) {
  const columns = [
    {
      title: "LEARN & GROW",
      links: [
        { href: "/learn/", label: "Learning paths" },
        { href: "/internships/", label: "Free internships" },
        { href: "/community/", label: "Our community" },
      ],
    },
    {
      title: "BUILD WITH US",
      links: [
        { href: "/services/", label: "Technology services" },
        { href: "/projects/", label: "Project directions" },
        { href: "/contact/?audience=client", label: "Discuss a project" },
      ],
    },
    {
      title: "NORTHSTAR LABS",
      links: [
        { href: "/about/", label: "Our story" },
        { href: "/contact/", label: "Get in touch" },
      ],
    },
  ];
  return (
    <footer className="site-footer expanded-footer">
      <div className="container">
        <div className="expanded-footer-top">
          <div className="footer-identity">
            <a href="/" className="brand" aria-label="NorthStar Labs home">
              <img
                src="/northstar-logo.png"
                alt=""
                width="56"
                height="56"
                loading="lazy"
              />
              <span className="brand-name">
                NorthStar<span> LABS</span>
              </span>
            </a>
            <p>Guiding Talent. Building the Future.</p>
            <span className="footer-location">
              <MapPin size={13} /> Islamabad, Pakistan
            </span>
          </div>
          {columns.map((column) => (
            <nav aria-label={column.title.toLowerCase()} key={column.title}>
              <p className="eyebrow">{column.title}</p>
              {column.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
          <a href="#main" className="back-to-top" aria-label="Back to top">
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} NorthStar Labs. All rights reserved.
          </p>
          <span>Learn. Build. Share. Earn. Grow.</span>
          <button onClick={onPrivacy}>Privacy</button>
        </div>
      </div>
    </footer>
  );
}
