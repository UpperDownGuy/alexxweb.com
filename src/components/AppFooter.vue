<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-icon">🌐</span>
            <span class="logo-text">AlexxWeb</span>
          </div>
          <p class="footer-description">
            Premium Minecraft servers and reliable hosting services for the modern web.
          </p>
        </div>
        
        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><router-link to="/minecraft">Minecraft Server</router-link></li>
            <li><router-link to="/hosting">Web Hosting</router-link></li>
            <li><a href="https://panel.alexxweb.com" target="_blank">Control Panel</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#support">Support</a></li>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#status">Server Status</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Connect</h4>
          <div class="server-info">
            <div class="server-item">
              <strong>Minecraft:</strong>
              <code>mc.alexxweb.com</code>
            </div>
            <div class="server-item">
              <strong>Panel:</strong>
              <code>panel.alexxweb.com</code>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 AlexxWeb. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.app-footer {
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 60px 0 20px;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.logo-icon {
  font-size: 2rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 300px;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.server-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.server-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.server-item strong {
  color: white;
  font-size: 0.9rem;
}

.server-item code {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #4ade80;
  font-weight: 500;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}
</style>