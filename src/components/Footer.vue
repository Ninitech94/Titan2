<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = async (routeName) => {
  await router.push({ name: routeName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Kontakt informacije</h3>
          <p>Vizantijski bulevar<br>
          18000 Niš-Medijana<br>
          Srbija</p>
          <p>+381 60 4757 970</p>
          <p>+381 64 1523 456</p>
          <p>titan.group.nis@outlook.com</p>
        </div>
        
        <div class="footer-section">
          <div class="footer-logo">
            <img src="/logo_titan.svg" alt="Titan Logo" class="footer-logo-img">
            <h3>TITAN</h3>
          </div>
          <p>Građevinska firma koja se bavi izgradnjom i prodajom stanova u Nišu. Težimo da kvalitetnim radom poslove obavljamo na vreme.</p>
        </div>
        
        <div class="footer-section">
          <h3>Navigacija</h3>
          <ul>
            <li><a href="#" @click.prevent="navigateTo('home')">POČETNA</a></li>
            <li><a href="#" @click.prevent="navigateTo('under-construction')">Objekti u izgradnji</a></li>
            <li><a href="#" @click.prevent="navigateTo('about')">O nama</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Naši projekti</h3>
          <ul>
            <li><a href="#" @click.prevent="navigateTo('under-construction')">Dejana Dinića, Pantelej</a></li>
            <li><a href="#" @click.prevent="navigateTo('under-construction')">Vojislava Ilica 19, Medijana</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>© 2025 TITAN. Sva prava zadržana.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer {
  background: rgb(19, 33, 62);
  color: white;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.footer-logo-img {
  height: 40px;
  width: auto;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: #3498db;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
}
</style>
