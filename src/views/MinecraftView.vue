<template>
  <div class="minecraft-page">
    <section class="minecraft-hero">
      <div class="container">
        <h1 class="page-title">🎮 Minecraft Server</h1>
        <p class="page-subtitle">Join our premium Minecraft community</p>
      </div>
    </section>

    <section class="server-info">
      <div class="container">
        <div class="server-card">
          <h2>Server Information</h2>
          <div class="server-details">
            <div class="server-address">
              <label>Server Address:</label>
              <div class="address-box">
                <code>mc.alexxweb.com</code>
                <button @click="copyAddress" class="copy-btn">📋 Copy</button>
              </div>
            </div>
            <div class="server-versions">
              <label>Supported Versions:</label>
              <div class="versions-list">
                <span class="version-badge">1.10</span>
                <span class="version-separator">-</span>
                <span class="version-badge">1.21.6</span>
              </div>
            </div>
          </div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏰</div>
            <h3>Creative Building</h3>
            <p>Unlimited resources for your wildest creations</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚔️</div>
            <h3>Survival Mode</h3>
            <p>Challenge yourself in our hardcore survival world</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Community</h3>
            <p>Join a friendly and active player community</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛡️</div>
            <h3>Anti-Grief</h3>
            <p>Protected builds with advanced security systems</p>
          </div>
        </div>

        <div class="rules-section">
          <h2>Server Rules</h2>
          <div class="rules-list">
            <div class="rule">
              <span class="rule-number">1</span>
              <span class="rule-text">Be respectful to all players</span>
            </div>
            <div class="rule">
              <span class="rule-number">2</span>
              <span class="rule-text">No griefing or stealing</span>
            </div>
            <div class="rule">
              <span class="rule-number">3</span>
              <span class="rule-text">Keep chat family-friendly</span>
            </div>
            <div class="rule">
              <span class="rule-number">4</span>
              <span class="rule-text">No cheating or exploiting</span>
            </div>
          </div>
        </div>

        <div class="join-section">
          <h2>How to Join</h2>
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Open Minecraft</h4>
                <p>Launch your Minecraft client (versions 1.10-1.21.6)</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Add Server</h4>
                <p>Click "Multiplayer" then "Add Server"</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Enter Address</h4>
                <p>Use server address: <code>mc.alexxweb.com</code></p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Join & Play</h4>
                <p>Connect and start your adventure!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const copyAddress = () => {
  navigator.clipboard.writeText('mc.alexxweb.com')
  alert('Server address copied to clipboard!')
}
</script>

<style scoped>
.minecraft-hero {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
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

.server-info {
  padding: 60px 0;
  background: rgba(255, 255, 255, 0.1);
}

.server-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.server-card h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.server-details {
  display: grid;
  gap: 30px;
}

.server-address label,
.server-versions label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 10px;
}

.address-box {
  display: flex;
  align-items: center;
  gap: 15px;
  background: #f3f4f6;
  padding: 15px 20px;
  border-radius: 10px;
}

.address-box code {
  font-size: 1.2rem;
  font-weight: 600;
  color: #059669;
  flex: 1;
}

.copy-btn {
  background: #059669;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease;
}

.copy-btn:hover {
  background: #047857;
}

.versions-list {
  display: flex;
  align-items: center;
  gap: 10px;
}

.version-badge {
  background: #059669;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
}

.version-separator {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6b7280;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

.rules-section,
.join-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.rules-section h2,
.join-section h2 {
  color: #1f2937;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.rules-list {
  display: grid;
  gap: 15px;
}

.rule {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  background: #f9fafb;
  border-radius: 10px;
}

.rule-number {
  background: #059669;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.rule-text {
  color: #374151;
  font-weight: 500;
}

.steps {
  display: grid;
  gap: 25px;
}

.step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  background: #4ade80;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.step-content h4 {
  color: #1f2937;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.step-content p {
  color: #6b7280;
  line-height: 1.6;
}

.step-content code {
  background: #f3f4f6;
  padding: 2px 6px;
  border-radius: 4px;
  color: #059669;
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .address-box {
    flex-direction: column;
    text-align: center;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
  }
}
</style>