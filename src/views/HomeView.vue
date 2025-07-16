<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">
          Welcome to <span class="brand">AlexxWeb</span>
        </h1>
        <p class="hero-subtitle">
          Your gateway to premium Minecraft servers and reliable hosting services
        </p>
        <div class="hero-buttons">
          <router-link to="/minecraft" class="btn btn-primary">
            🎮 Join Minecraft Server
          </router-link>
          <router-link to="/hosting" class="btn btn-secondary">
            🚀 Hosting Panel
          </router-link>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services">
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <div class="services-grid">
          <div class="service-card minecraft">
            <div class="service-icon">🎮</div>
            <h3>Minecraft Server</h3>
            <p>Join our premium Minecraft server supporting versions 1.10-1.21.6</p>
            <div class="service-details">
              <div class="detail">
                <strong>Server:</strong> mc.alexxweb.com
              </div>
              <div class="detail">
                <strong>Versions:</strong> 1.10 - 1.21.6
              </div>
            </div>
            <router-link to="/minecraft" class="btn btn-outline">Learn More</router-link>
          </div>

          <div class="service-card hosting">
            <div class="service-icon">🌐</div>
            <h3>Hosting Panel</h3>
            <p>Manage your hosting services with our powerful control panel</p>
            <div class="service-details">
              <div class="detail">
                <strong>Panel:</strong> panel.alexxweb.com
              </div>
              <div class="detail">
                <strong>Features:</strong> Full Control
              </div>
            </div>
            <router-link to="/hosting" class="btn btn-outline">Access Panel</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose AlexxWeb?</h2>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-icon">⚡</div>
            <h4>High Performance</h4>
            <p>Lightning-fast servers with 99.9% uptime guarantee</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🔒</div>
            <h4>Secure & Reliable</h4>
            <p>Enterprise-grade security and data protection</p>
          </div>
          <div class="feature">
            <div class="feature-icon">🎯</div>
            <h4>Easy Management</h4>
            <p>Intuitive control panels for effortless administration</p>
          </div>
          <div class="feature">
            <div class="feature-icon">💬</div>
            <h4>24/7 Support</h4>
            <p>Round-the-clock technical support when you need it</p>
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
.hero {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  color: white;
  padding: 120px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
}

.brand {
  background: linear-gradient(45deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 40px;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(45deg, #4ade80, #22d3ee);
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(74, 222, 128, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.services {
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.1);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1f2937;
}

.service-card p {
  color: #6b7280;
  margin-bottom: 25px;
  line-height: 1.6;
}

.service-details {
  background: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 25px;
}

.detail {
  margin-bottom: 10px;
  color: #374151;
}

.detail:last-child {
  margin-bottom: 0;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

.features {
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.05);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.feature {
  text-align: center;
  color: white;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.feature p {
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>