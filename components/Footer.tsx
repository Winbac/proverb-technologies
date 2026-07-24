import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const linkGroups = [
  {
    title: "Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/service" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Industries We Serve", href: "/industries" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/service" },
      { label: "App Development", href: "/service" },
      { label: "Billing Software", href: "/service" },
      { label: "Digital Marketing", href: "/service" },
      { label: "Custom Software", href: "/service" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Express.js", href: "/service" },
      { label: "React", href: "/service" },
      { label: "Next.js", href: "/service" },
      { label: "Node", href: "/service" },
      { label: "MongoDB", href: "/service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-10">
        <div>
          <Image
            src="/logo.svg"
            alt="Proverb Technologies"
            width={220}
            height={130}
            className="h-auto w-[180px]"
          />

          <div className="mt-6 flex gap-4">
            <a href="#" aria-label="Facebook" className="text-primary">
<FaFacebook size={24} />            </a>

            <a href="#" aria-label="LinkedIn" className="text-primary">
<FaTwitter size={24} />            </a>

            <a href="#" aria-label="Twitter">
<FaTwitter size={24} />            </a>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-bold text-heading">{group.title}</h3>

            <ul className="mt-5 space-y-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-text hover:text-primary sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-bold text-heading">Contact Us</h3>

          <address className="mt-5 text-sm not-italic leading-7 text-muted-text sm:text-base">
            Suite 104, 11th Floor,
            <br />
            SkyMark One, Noida,
            <br />
            Uttar Pradesh 201301
          </address>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1400px] border-t border-border px-4 pt-6 text-center text-sm text-muted-text sm:px-6 lg:px-10">
        © {new Date().getFullYear()} Proverb Technologies. All rights reserved.
      </div>
    </footer>
  );
}