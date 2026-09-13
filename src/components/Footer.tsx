
import devstackLogo from "../assets/devstack.png";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Block */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <img
                src={devstackLogo}
                alt="DevStack logo"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Build your ideal developer stack with the best technologies,
              tools, and resources for your next project.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-700 transition hover:bg-slate-900 hover:text-white"
              >
                GH
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-700 transition hover:bg-slate-900 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-sm font-bold text-slate-700 transition hover:bg-blue-600 hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Product</h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#technologies"
                  className="transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#your-stack"
                  className="transition hover:text-pink-500"
                >
                  Your Stack
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-pink-500"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Company</h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="transition hover:text-pink-500">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900">Legal</h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="#privacy"
                  className="transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#terms" className="transition hover:text-pink-500">
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#cookies"
                  className="transition hover:text-pink-500"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} DevStack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#privacy" className="transition hover:text-pink-500">
              Privacy
            </a>

            <a href="#terms" className="transition hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;