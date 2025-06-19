import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";

export default function NavBar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 transition-smooth">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div class="hidden md:flex h-16 justify-between items-center">
          <a
            href="/"
            class="text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors duration-200 focus-ring no-underline"
            style="font-family: 'Fields', Georgia, serif;"
            data-astro-transition-name="nav-brand"
          >
            Brian Colclough
          </a>

          <ul class="flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <li>
                <a
                  href={href}
                  data-astro-prefetch
                  class="font-medium text-gray-700 hover:text-purple-600 relative py-2 px-1 transition-colors duration-200 focus-ring no-underline
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                  after:bg-purple-500 after:origin-left after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform after:duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div class="md:hidden">
          <div class="flex h-16 justify-between items-center">
            <a
              href="/"
              class="text-xl font-bold text-purple-700 focus-ring no-underline"
              style="font-family: 'Fields', Georgia, serif;"
              data-astro-transition-name="nav-brand"
            >
              Brian Colclough
            </a>

            <button
              onClick={() => setIsOpen(!isOpen())}
              class="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 focus-ring"
              aria-label="Toggle menu for navigation"
              aria-expanded={isOpen()}
            >
              <Icon
                icon={isOpen() ? "mdi:close" : "mdi:menu"}
                class="w-6 h-6"
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            class={`fixed left-0 right-0 top-16 border-b border-gray-200/50 bg-white/95 backdrop-blur-sm
            transform transition-all duration-200 ease-out ${isOpen()
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
              }`}
          >
            <ul class="px-4 py-6 space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <li>
                  <a
                    href={href}
                    data-astro-prefetch
                    class="block px-3 py-2 font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 focus-ring no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
