import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";

export default function NavBar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav
      class={`fixed top-0 left-0 w-full z-20 border-b ${
        isOpen() ? "border-transparent" : "border-neutral-800/50"
      } bg-black/95 backdrop-blur-sm`}
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div class="hidden md:flex h-16 justify-between items-center">
          <a
            href="/"
            class="text-2xl font-fields text-white hover:text-orange-400 transition-colors duration-200"
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
                  class="font-geistMono text-sm text-neutral-400 hover:text-white relative py-2
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px]
                  after:bg-orange-400 after:origin-left after:scale-x-0
                  hover:after:scale-x-100 after:transition-transform duration-200"
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
            <a href="/" class="text-xl font-fields text-white">
              Brian Colclough
            </a>

            <button
              onClick={() => setIsOpen(!isOpen())}
              class="p-2 text-neutral-400 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu for navigation"
            >
              <Icon
                icon={isOpen() ? "mdi:close" : "mdi:menu"}
                class="w-5 h-5"
              />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            class={`fixed left-0 right-0 top-16 border-b border-neutral-800/50 bg-black/95 backdrop-blur-sm
            transform transition-all duration-200 ease-in-out ${
              isOpen()
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <ul class="px-4 py-6 space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <li>
                  <a
                    href={href}
                    data-astro-prefetch
                    class="block font-geistMono text-neutral-400 hover:text-white transition-colors duration-200"
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
