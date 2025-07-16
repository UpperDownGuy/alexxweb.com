<template>
  <div class="hosting-page">
    <section class="hosting-hero">
      <div class="container">
        <h1 class="page-title">🌐 Hosting Panel</h1>
        <p class="page-subtitle">Manage your hosting services with ease</p>
      </div>
    </section>

    <section class="hosting-info">
      <div class="container">
        <div class="panel-card">
          <h2>Access Your Control Panel</h2>
          <div class="panel-access">
            <div class="panel-url">
              <label>Panel URL:</label>
              <div class="url-box">
                <code>panel.alexxweb.com</code>
                <a href="https://panel.alexxweb.com" target="_blank" class="access-btn">
                  🚀 Open Panel
                </a>
              </div>
            </div>
            <p class="panel-description">
              Access your comprehensive hosting control panel to manage domains, 
              databases, email accounts, and more.
            </p>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3>Resource Monitoring</h3>
            <p>Real-time monitoring of CPU, RAM, and disk usage</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🗄️</div>
            <h3>Database Management</h3>
            <p>Create and manage MySQL databases with phpMyAdmin</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📧</div>
            <h3>Email Accounts</h3>
            <p>Professional email accounts with webmail access</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>SSL Certificates</h3>
            <p>Free SSL certificates for secure connections</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📁</div>
            <h3>File Manager</h3>
            <p>Web-based file manager for easy file operations</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>Automatic Backups</h3>
            <p>Daily automated backups with easy restoration</p>
          </div>
        </div>

        <div class="hosting-plans">
          <h2>Hosting Plans</h2>
          <div class="plans-grid">
            <div class="plan-card basic">
              <div class="plan-header">
                <h3>Basic</h3>
                <div class="plan-price">$9.99<span>/month</span></div>
              </div>
              <ul class="plan-features">
                <li>✅ 10GB SSD Storage</li>
                <li>✅ 100GB Bandwidth</li>
                <li>✅ 5 Email Accounts</li>
                <li>✅ Free SSL Certificate</li>
                <li>✅ 24/7 Support</li>
              </ul>
              <button class="plan-btn">Choose Plan</button>
            </div>

            <div class="plan-card pro featured">
              <div class="plan-badge">Most Popular</div>
              <div class="plan-header">
                <h3>Pro</h3>
                <div class="plan-price">$19.99<span>/month</span></div>
              </div>
              <ul class="plan-features">
                <li>✅ 50GB SSD Storage</li>
                <li>✅ Unlimited Bandwidth</li>
                <li>✅ Unlimited Email Accounts</li>
                <li>✅ Free SSL Certificate</li>
                <li>✅ Daily Backups</li>
                <li>✅ Priority Support</li>
              </ul>
              <button class="plan-btn">Choose Plan</button>
            </div>

            <div class="plan-card enterprise">
              <div class="plan-header">
                <h3>Enterprise</h3>
                <div class="plan-price">$49.99<span>/month</span></div>
              </div>
              <ul class="plan-features">
                <li>✅ 200GB SSD Storage</li>
                <li>✅ Unlimited Bandwidth</li>
                <li>✅ Unlimited Email Accounts</li>
                <li>✅ Free SSL Certificate</li>
                <li>✅ Daily Backups</li>
                <li>✅ Dedicated IP</li>
                <li>✅ White-label Support</li>
              </ul>
              <button class="plan-btn">Choose Plan</button>
            </div>
          </div>
        </div>

        <div class="support-section">
          <h2>Need Help?</h2>
          <div class="support-grid">
            <div class="support-card">
              <div class="support-icon">📚</div>
              <h4>Knowledge Base</h4>
              <p>Comprehensive guides and tutorials</p>
              <button class="support-btn">Browse Articles</button>
            </div>
            <div class="support-card">
              <div class="support-icon">💬</div>
              <h4>Live Chat</h4>
              <p>Get instant help from our support team</p>
              <button class="support-btn">Start Chat</button>
            </div>
            <div class="support-card">
              <div class="support-icon">🎫</div>
              <h4>Support Tickets</h4>
              <p>Submit detailed support requests</p>
              <button class="support-btn">Create Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.hosting-hero {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.hosting-info {
  padding: 60px 0;
  background: rgba(255, 255, 255, 0.1);
}

.panel-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.panel-card h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.panel-url label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 10px;
}

.url-box {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f3f4f6;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.url-box code {
  font-size: 1.2rem;
  font-weight: 600;
  color: #3b82f6;
  flex: 1;
}

.access-btn {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.3s ease;
}

.access-btn:hover {
  background: #2563eb;
}

.panel-description {
  color: #6b7280;
  line-height: 1.6;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  color: #1f2937;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

.hosting-plans {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.hosting-plans h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 40px;
  text-align: center;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.plan-card {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-5px);
  border-color: #3b82f6;
}

.plan-card.featured {
  border-color: #3b82f6;
  transform: scale(1.05);
}

.plan-badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.plan-header h3 {
  color: #1f2937;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.plan-price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 30px;
}

.plan-price span {
  font-size: 1rem;
  color: #6b7280;
  font-weight: 500;
}

.plan-features {
  list-style: none;
  margin-bottom: 30px;
}

.plan-features li {
  padding: 8px 0;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
}

.plan-btn:hover {
  background: #2563eb;
}

.support-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.support-section h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.support-card {
  text-align: center;
  padding: 30px;
  background: #f9fafb;
  border-radius: 15px;
}

.support-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.support-card h4 {
  color: #1f2937;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.support-card p {
  color: #6b7280;
  margin-bottom: 20px;
  line-height: 1.6;
}

.support-btn {
  background: #6b7280;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.support-btn:hover {
  background: #4b5563;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .url-box {
    flex-direction: column;
    text-align: center;
  }
  
  .plans-grid {
    grid-template-columns: 1fr;
  }
  
  .plan-card.featured {
    transform: none;
  }
}
</style>