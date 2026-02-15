export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-slate-50 to-blue-50 border-t border-blue-100 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold bg-linear-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-slate-600 text-sm">
              Building beautiful digital experiences with modern web
              technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-sky-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-sky-500 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Social</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Sitemap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-500 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
          <p>Designed & Built with using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
