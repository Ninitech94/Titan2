<template>
  <div>
    <main class="under-construction-page">
    <div class="page-header">
      <div class="container">
        <h1>Objekti u izgradnji</h1>
        <p>Budući stanovi po najvišim standardima</p>
      </div>
    </div>

    <section class="projects-section">
      <div class="container">
        <div class="project-card">
          <img src="/Images/DejanaDinica/IMG_5504.jpeg" alt="Projekat 1" class="project-image">
          <div class="project-content">
            <h3>Stambeni kompleks u Dejana Dinića</h3>
            <p>Moderan stambeni kompleks sa 17 stanova različitih struktura</p>
            <div class="project-details">
              <div class="detail-item">
                <strong>Lokacija:</strong>&nbsp;Dejana Dinića, Pantelej
              </div>
              <div class="detail-item">
                <strong>Broj stanova:</strong> 17
              </div>
              <div class="detail-item">
                <strong>Završetak:</strong> Decembar 2026
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 0%"></div>
            </div>
            <p class="progress-text">0% završeno</p>
            <div class="button-group">
              <!-- <button class="info-button">Više informacija</button> -->
              <a href="HP_KATALOG_compressed.pdf" download="Dejana Dinica - Katalog.pdf" class="download-button" rel="noopener noreferrer">
                Preuzmi katalog
              </a>
              <button @click="openGallery('dejana-dinica')" class="gallery-button">
                Galerija
              </button>
            </div>
          </div>
        </div>

        <div class="project-card">
          <img src="/Images/VojislavaIlica/image00010.jpeg" alt="Projekat 1" class="project-image">
          <div class="project-content">
            <h3>Stambeni kompleks u Vojislava Ilića 19</h3>
            <p>Moderan stambeni kompleks sa 60 stanova različitih struktura</p>
            <div class="project-details">
              <div class="detail-item">
                <strong>Lokacija:</strong>&nbsp;Vojislava Ilića 19, Medijana
              </div>
              <div class="detail-item">
                <strong>Broj stanova:</strong> 60
              </div>
              <div class="detail-item">
                <strong>Završetak:</strong> Septembar 2028
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 0%"></div>
            </div>
            <p class="progress-text">0% završeno</p>
            <div class="button-group">
              <!-- <button class="info-button">Više informacija</button> -->
              <a href="/Titan_H_page4_only.pdf" download="Vojislava Ilića 19 - Projekat.pdf" class="download-button">
                Preuzmi projekat
              </a>
              <button @click="openGallery('vojislava-ilica')" class="gallery-button">
                Galerija
              </button>
            </div>
          </div>
        </div>

        <!-- <div class="project-card">
          <img src="/Images/IMG_5507.jpeg" alt="Projekat 2" class="project-image">
          <div class="project-content">
            <h3>Rezidencijalni objekat "Titan Tower"</h3>
            <p>Luksuzni stambeni objekat sa penthouse stanovima i podzemnom garažom.</p>
            <div class="project-details">
              <div class="detail-item">
                <strong>Lokacija:</strong> Hadži Prodanova 20, Pantelej
              </div>
              <div class="detail-item">
                <strong>Broj stanova:</strong> 24
              </div>
              <div class="detail-item">
                <strong>Strukture:</strong> 2.5, 3.5, penthouse
              </div>
              <div class="detail-item">
                <strong>Završetak:</strong> Decembar 2025
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width: 40%"></div>
            </div>
            <p class="progress-text">40% završeno</p>
            <button class="info-button">Više informacija</button>
          </div>
        </div> -->
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <h2>Karakteristike naših objekata</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🏗️</div>
            <h3>Kvalitetna gradnja</h3>
            <p>Koristimo najkvalitetnije materijale i najnovije tehnologije u gradnji.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">⚡</div>
            <h3>Energetska efikasnost</h3>
            <p>Svi objekti su projektovani prema najvišim standardima energetske efikasnosti.</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🚗</div>
            <h3>Parking prostori</h3>
            <p>Obezbeđeni parking prostori za sve stanove u sklopu objekta.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section">
      <div class="container">
        <h2>Proces gradnje</h2>
        <div class="timeline">
          <div class="timeline-item current">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Projektovanje</h3>
              <p>Završeno projektovanje i dobijanje svih potrebnih dozvola</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Temeljni radovi</h3>
              <p>Završeni temeljni radovi i postavljanje armature</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Konstrukcija</h3>
              <p>U toku su radovi na betoniranju i zidanju</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>Završni radovi</h3>
              <p>Planiran početak završnih radova u junu 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Gallery Modal -->
  <div v-if="showGallery" class="gallery-modal" @click="closeGallery">
    <div class="gallery-content" @click.stop>
      <div class="gallery-header">
        <h3>{{ galleryTitle }}</h3>
        <button @click="closeGallery" class="close-button">&times;</button>
      </div>
      <div class="gallery-grid">
        <img 
          v-for="(image, index) in galleryImages" 
          :key="index"
          :src="image.src" 
          :alt="image.alt"
          @click="openImageViewer(index)"
          class="gallery-thumbnail"
        />
      </div>
    </div>
  </div>

  <!-- Image Viewer Modal -->
  <div v-if="showImageViewer" class="image-viewer-modal" @click="closeImageViewer">
    <div class="image-viewer-content" @click.stop>
      <button @click="closeImageViewer" class="close-button">&times;</button>
      <button @click="previousImage" class="nav-button nav-prev">&larr;</button>
      <img :src="galleryImages[currentImageIndex].src" :alt="galleryImages[currentImageIndex].alt" class="viewer-image" />
      <button @click="nextImage" class="nav-button nav-next">&rarr;</button>
      <div class="image-counter">{{ currentImageIndex + 1 }} / {{ galleryImages.length }}</div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showGallery = ref(false)
const showImageViewer = ref(false)
const currentGallery = ref('')
const currentImageIndex = ref(0)

const galleries = {
  'dejana-dinica': {
    title: 'Stambeni kompleks u Dejana Dinića - Galerija',
    images: [
      { src: '/Images/DejanaDinica/IMG_5501.jpeg', alt: 'Projekat Dejana Dinića - Slika 1' },
      { src: '/Images/DejanaDinica/IMG_5502.jpeg', alt: 'Projekat Dejana Dinića - Slika 2' },
      { src: '/Images/DejanaDinica/IMG_5503.jpeg', alt: 'Projekat Dejana Dinića - Slika 3' },
      { src: '/Images/DejanaDinica/IMG_5504.jpeg', alt: 'Projekat Dejana Dinića - Slika 4' },
      { src: '/Images/DejanaDinica/IMG_5505.jpeg', alt: 'Projekat Dejana Dinića - Slika 5' },
      { src: '/Images/DejanaDinica/IMG_5506.jpeg', alt: 'Projekat Dejana Dinića - Slika 6' },
      { src: '/Images/DejanaDinica/IMG_5507.jpeg', alt: 'Projekat Dejana Dinića - Slika 7' }
    ]
  },
  'vojislava-ilica': {
    title: 'Stambeni kompleks u Vojislava Ilića 19 - Galerija',
    images: [
      { src: '/Images/VojislavaIlica/image00008.jpeg', alt: 'Projekat Vojislava Ilića - Slika 1' },
      { src: '/Images/VojislavaIlica/image00009.jpeg', alt: 'Projekat Vojislava Ilića - Slika 2' },
      { src: '/Images/VojislavaIlica/image00010.jpeg', alt: 'Projekat Vojislava Ilića - Slika 3' },
      { src: '/Images/VojislavaIlica/image00011.jpeg', alt: 'Projekat Vojislava Ilića - Slika 4' },
      { src: '/Images/VojislavaIlica/image00012.jpeg', alt: 'Projekat Vojislava Ilića - Slika 5' }
    ]
  }
}

const galleryTitle = computed(() => {
  return galleries[currentGallery.value]?.title || ''
})

const galleryImages = computed(() => {
  return galleries[currentGallery.value]?.images || []
})

const openGallery = (galleryType) => {
  currentGallery.value = galleryType
  showGallery.value = true
  document.body.style.overflow = 'hidden'
}

const closeGallery = () => {
  showGallery.value = false
  document.body.style.overflow = 'auto'
}

const openImageViewer = (index) => {
  currentImageIndex.value = index
  showImageViewer.value = true
  showGallery.value = false
}

const closeImageViewer = () => {
  showImageViewer.value = false
  showGallery.value = true
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.value.length
}

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? galleryImages.value.length - 1 
    : currentImageIndex.value - 1
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.under-construction-page {
  padding-top: 80px;
}

.page-header {
  background: #f5f5f5;
  color: #333;
  padding: 2rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.projects-section {
  padding: 4rem 0;
}

.projects-section .container {
  display: grid;
  gap: 3rem;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .project-image {
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-content > p {
  margin-bottom: 1.5rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}

.project-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.detail-item {
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

.progress-bar {
  background: #ecf0f1;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  height: 100%;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1.5rem;
}

.info-button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
}

.info-button:hover {
  background: #2980b9;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.download-button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.download-button:hover {
  background: #2980b9;
  color: white;
}

.gallery-button {
  background: #27ae60;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1rem;
}

.gallery-button:hover {
  background: #219a52;
}

.features-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.features-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.timeline-section {
  padding: 4rem 0;
}

.timeline-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #ecf0f1;
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 10px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ecf0f1;
  border: 3px solid #fff;
  box-shadow: 0 0 0 3px #ecf0f1;
}

.timeline-item.completed .timeline-marker {
  background: #27ae60;
  box-shadow: 0 0 0 3px #27ae60;
}

.timeline-item.current .timeline-marker {
  background: #3498db;
  box-shadow: 0 0 0 3px #3498db;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 3px #3498db; }
  50% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0.3); }
  100% { box-shadow: 0 0 0 3px #3498db; }
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
  }
  
  .project-details {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Gallery Modal Styles */
.gallery-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.gallery-content {
  background: white;
  border-radius: 20px;
  width: 95%;
  max-width: 1400px;
  height: 85vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 1px solid #e8ecef;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
}

.gallery-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.gallery-header h3 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

.close-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  padding: 0;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
  transform: rotate(90deg) scale(1.1);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 3rem;
  height: calc(85vh - 120px);
  overflow-y: auto;
  background: #f8f9fa;
}

.gallery-grid::-webkit-scrollbar {
  width: 8px;
}

.gallery-grid::-webkit-scrollbar-track {
  background: #e9ecef;
  border-radius: 4px;
}

.gallery-grid::-webkit-scrollbar-thumb {
  background: #6c757d;
  border-radius: 4px;
}

.gallery-grid::-webkit-scrollbar-thumb:hover {
  background: #495057;
}

.gallery-thumbnail {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.gallery-thumbnail::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.gallery-thumbnail::after {
  content: '🔍';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  font-size: 2rem;
  color: white;
  z-index: 2;
  transition: transform 0.3s ease;
}

.gallery-thumbnail:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.gallery-thumbnail:hover::before {
  opacity: 1;
}

.gallery-thumbnail:hover::after {
  transform: translate(-50%, -50%) scale(1);
}

/* Image Viewer Modal Styles */
.image-viewer-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2001;
  animation: fadeIn 0.3s ease-out;
}

.image-viewer-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: zoomIn 0.4s ease-out;
}

@keyframes zoomIn {
  from { 
    opacity: 0;
    transform: scale(0.8);
  }
  to { 
    opacity: 1;
    transform: scale(1);
  }
}

.viewer-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

.image-viewer-content .close-button {
  position: fixed;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;
  padding: 0;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 2002;
}

.image-viewer-content .close-button:hover {
  background: white;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  border: none;
  cursor: pointer;
  border-radius: 12px;
  color: #333;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
}

.nav-button::before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
}

.nav-button:hover {
  background: white;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.nav-button:active {
  transform: translateY(-50%) scale(0.95);
}

.nav-prev {
  left: -75px;
}

.nav-prev::before {
  border-left: 8px solid transparent;
  border-right: 16px solid #333;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-left: -2px;
}

.nav-next {
  right: -75px;
}

.nav-next::before {
  border-left: 16px solid #333;
  border-right: 8px solid transparent;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-right: -2px;
}

.image-counter {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
  .gallery-content {
    width: 98%;
    height: 90vh;
    border-radius: 15px;
  }
  
  .gallery-header {
    padding: 1.5rem 2rem;
  }
  
  .gallery-header h3 {
    font-size: 1.4rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
  
  .gallery-thumbnail {
    height: 200px;
  }
  
  .image-viewer-content {
    max-width: 90%;
    max-height: 75%;
  }
  
  .nav-button {
    width: 45px;
    height: 45px;
  }
  
  .nav-prev {
    left: 15px;
  }
  
  .nav-prev::before {
    border-left: 6px solid transparent;
    border-right: 12px solid #333;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    margin-left: -1px;
  }
  
  .nav-next {
    right: 15px;
  }
  
  .nav-next::before {
    border-left: 12px solid #333;
    border-right: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    margin-right: -1px;
  }
  
  .image-counter {
    bottom: -50px;
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .image-viewer-content .close-button {
    top: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
}
</style>
