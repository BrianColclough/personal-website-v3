import { Icon } from "@iconify-icon/solid";
import { createSignal } from "solid-js";

export default function NavBar(props: { isHome?: boolean }) {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="w-full absolute top-0 left-0 z-50 pt-8 pb-4">
      <div class="px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {!props.isHome && (
          <a
            href="/"
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-tertiary mb-3 tracking-tighter hover:scale-[1.02] transition-transform duration-200 focus-ring no-underline"
            style={{
              "-webkit-text-stroke": "3px black",
              "text-shadow": "6px 6px 0px rgba(0,0,0,0.1), 0px 0px 0px black",
              "view-transition-name": "nav-brand"
            }}
          >
            Brian Colclough
          </a>
        )}

        {/* Desktop / Core Navigation */}
        <div class="hidden md:block">
          <ul class="flex items-center justify-center space-x-6 sm:space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <li>
                <a
                  href={href}
                  data-astro-prefetch
                  style={{ "view-transition-name": `nav-link-${label.toLowerCase()}` }}
                  class="font-display font-black text-lg sm:text-xl text-black hover:text-tertiary relative py-2 px-1 transition-colors duration-200 focus-ring no-underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Bottom Navigation */}
        <div class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[100]">
          <div class="bg-surface-container-lowest border-4 border-black shadow-[6px_6px_0px_#1a1a1a] rounded-2xl p-2 px-4">
            <ul class="flex justify-between items-center">
              {[
                { href: "/", label: "Home", icon: "mdi:home" },
                { href: "/blog", label: "Blog", icon: "mdi:text-box-outline" },
                { href: "/about", label: "About", icon: "mdi:account" },
              ].map(({ href, label, icon }) => (
                <li class="flex-1">
                  <a
                    href={href}
                    data-astro-prefetch
                    style={{ "view-transition-name": `nav-mobile-${label.toLowerCase()}` }}
                    class="flex flex-col items-center justify-center py-2 px-1 text-black hover:text-tertiary active:scale-95 transition-all duration-200 focus-ring no-underline rounded-xl hover:bg-black/5"
                  >
                    <Icon icon={icon} class="text-2xl mb-1" />
                    <span class="font-display font-black text-xs uppercase tracking-wider">{label}</span>
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
