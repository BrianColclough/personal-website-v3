import "./nav-bar.css";

export const NavBar = () => {
  return (
    <nav class="nav-bar">
      <ul class="nav-bar-list">
        <li class="nav-bar-item">
          <a href="/">Home</a>
        </li>
        <li class="nav-bar-item">
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
};
