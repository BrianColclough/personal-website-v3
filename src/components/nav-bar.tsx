import "./nav-bar.css";

export const NavBar = () => {
  return (
    <nav class="nav-bar">
      <div class="nav-bar-wrapper">
        <ul class="nav-bar-list">
          <li class="nav-bar-item">
            <a href="/">Home</a>
          </li>
          <li class="nav-bar-item">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
