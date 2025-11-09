function loadFooter() {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h3>Path2Volunteer</h3>
            <p>Connecting volunteers with meaningful opportunities to make a difference.</p>
          </div>
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="opportunities.html">Find Opportunities</a></li>
              <li><a href="leaderboard.html">Leaderboard</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@path2volunteer.com</p>
            <p>Phone: 01234567890</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 Path2Volunteer. All rights reserved</p>
        </div>
      </footer>
    `;
  }
}

document.addEventListener('DOMContentLoaded', loadFooter);