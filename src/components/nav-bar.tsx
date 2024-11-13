import { createSignal } from 'solid-js';

export default function NavBar() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <nav class="fixed top-0 left-0 w-full z-20 p-4 bg-black bg-opacity-80 backdrop-blur-md animate-fade-in">
      <div class="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div class="hidden md:flex justify-between items-center">
          <div class="text-3xl font-bold text-white font-fields">Brian Colclough</div>
          <ul class="flex space-x-8 text-lg text-white">
            <li class="relative group hover:text-gray-300 transition-colors">
              <a href="/" data-astro-prefetch class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">Home</a>
            </li>
            <li class="relative group hover:text-gray-300 transition-colors">
              <a href="/blog" data-astro-prefetch class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">Blog</a>
            </li>
            <li class="relative group hover:text-gray-300 transition-colors">
              <a href="/about" data-astro-prefetch class="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">About</a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div class="md:hidden">
          {/* Header with logo and hamburger */}
          <div class="flex justify-between items-center">
            <div class="text-2xl font-bold text-white font-fields">Brian Colclough</div>
            <button onClick={() => setIsOpen(!isOpen())} class="cursor-pointer text-white">
              {/* Hamburger icon */}
              <svg class={`w-6 h-6 ${isOpen() ? 'hidden' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              {/* Close icon */}
              <svg class={`w-6 h-6 ${isOpen() ? '' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Mobile menu items */}
          <ul class={`absolute left-0 w-full bg-black bg-opacity-80 transform px-4  ${
            isOpen() ? 'translate-y-0 opacity-100 h-auto pb-4' : '-translate-y-2 h-0 opacity-0 pointer-events-none pb-0'
          } flex flex-col mt-4 space-y-2 text-lg text-white transition-all duration-300 ease-in-out`}>
            <li class="hover:text-gray-300 transition-colors">
              <a href="/" data-astro-prefetch class="block py-2 px-4 hover:bg-gray-800 rounded-lg">Home</a>
            </li>
            <li class="hover:text-gray-300 transition-colors">
              <a href="/blog" data-astro-prefetch class="block py-2 px-4 hover:bg-gray-800 rounded-lg">Blog</a>
            </li>
            <li class="hover:text-gray-300 transition-colors">
              <a href="/about" data-astro-prefetch class="block py-2 px-4 hover:bg-gray-800 rounded-lg">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}