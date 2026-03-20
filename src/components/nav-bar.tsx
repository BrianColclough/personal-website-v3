import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";

export default function NavBar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glassmorphism border-ghost transition-smooth">
      <div class="px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div class="hidden md:flex h-16 justify-between items-center">
          <a
            href="/"
            class="text-2xl font-bold text-primary hover:text-black transition-colors duration-200 focus-ring no-underline font-display"
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
                  class="font-medium text-text-secondary hover:text-primary relative py-2 px-1 transition-colors duration-200 focus-ring no-underline
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]
                  after:bg-primary after:origin-left after:scale-x-0
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
              class="text-xl font-bold text-primary focus-ring no-underline font-display"
              data-astro-transition-name="nav-brand"
            >
              Brian Colclough
            </a>

            <button
              onClick={() => setIsOpen(!isOpen())}
              class="p-2 text-text-secondary hover:text-primary hover:bg-primary-container rounded-lg transition-all duration-200 focus-ring"
              aria-label="Toggle menu for navigation"
              aria-expanded={isOpen()}
            >
              <Icon
                icon={isOpen() ? "mdi:close" : "mdi:menu"}
                class="w-6 h-6"
              />
            </button>
          </div>

          <div
            class={`absolute left-0 right-0 top-[110%] bg-white border-4 border-black shadow-sticker-lg z-50 rounded-xl
            transform transition-all duration-200 ease-out origin-top ${isOpen()
                ? "scale-y-100 opacity-100"
                : "scale-y-95 opacity-0 pointer-events-none"
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
                    class="block px-3 py-2 font-medium text-text-secondary hover:text-primary hover:bg-primary-container rounded-lg transition-all duration-200 focus-ring no-underline"
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
