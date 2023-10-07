import "./nav-bar.css";

export const NavBar = () => {
  return (
    <nav class="nav-bar">
      <ul class="nav-bar-list">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/blog">blog</a>
        </li>
      </ul>
    </nav>
  );
};
