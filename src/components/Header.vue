<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigateTo = async (routeName) => {
  await router.push({ name: routeName })
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo" @click="navigateTo('home')">
          <img src="/logo_titan.svg" alt="Titan Logo" class="logo-img">
        </div>
        
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="navigateTo('home')">POČETNA</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="navigateTo('under-construction')">Objekti u izgradnji</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="navigateTo('about')">O nama</a>
          </li>
        </ul>
        
        <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: rgb(19, 33, 62);
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar {
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-img {
  height: 63px;
  width: auto;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-link:hover {
  color: #ffd700;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin: 3px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 70px;
    flex-direction: column;
    background-color: rgb(19, 33, 62);
    width: 100%;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    padding: 2rem 0;
  }
  
  .nav-menu.active {
    left: 0;
  }
}
</style>