export function Footer() {
  return (
    <footer className="bg-gray-100 py-10 text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-gray-900">AI Video Magic</h2>
          <p className="mt-2 text-sm">
            Create, customize, and publish videos powered by AI — no editing
            skills required.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">Product</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Examples
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Templates
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal & Social */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:text-black">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Privacy Policy
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#">
              <img src="/icons/discord.svg" alt="Discord" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Vido AI. All rights reserved.
      </div>
    </footer>
  );
}
