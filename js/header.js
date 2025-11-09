function loadHeader() {
  const header = document.getElementById('header');
  if (header) {
    header.innerHTML = `
      <header class="header">
        <nav class="nav-container">
          <div class="logo">
            <a href="index.html"><img src="images/Path2VolunteerLogo.png" alt ="Path2Volunteer Logo"></a>
          </div>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="opportunities.html">Opportunities</a></li>
            <li><a href="leaderboard.html">Leaderboard</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div class="nav-actions">
            <a href="login.html" class="btn-login">Login/Register</a>
            <a href="profile.html" class="btn-profile">Profile</a>
          </div>
        </nav>
      </header>
    `;
  }
}


document.addEventListener('DOMContentLoaded', loadHeader);