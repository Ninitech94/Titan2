<template>
  <main>
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">TITAN</h1>
        <p class="hero-subtitle">Građevinska firma sa sedištem u Nišu</p>
      </div>
    </section>

    <section class="featured-section">
      <div class="container">
        <div class="featured-badge">EKSKLUZIVNO!</div>
        <h2>Novi projekat u izgradnji</h2>
        <p>Novo u ponudi! Stanovi će biti izgrađeni po najvišim energetskim standardima sa različitim strukturama za svačiji ukus! Pogledajte ponudu stanova i kontaktirajte nas za više informacija na broj +381 60 4757 970.</p>
        <button class="cta-button" @click="navigateToProjects">Pogledajte stanove</button>
      </div>
    </section>

    <section class="projects-grid">
      <div class="container">
        <div class="project-card">
          <img src="/Images/DejanaDinica/IMG_5502.jpeg" alt="Objekti u izgradnji" class="project-image">
          <div class="project-content">
            <h3>Objekti u izgradnji</h3>
            <p>Pogledajte ponudu naših stanova. Veliki izbor i povoljne cene. Struktura stanova od 45 do 165m2.</p>
            <button class="project-button" @click="navigateToProjects">Pogledajte detaljnije</button>
          </div>
        </div>
      </div>
    </section>


    <!-- <section class="completed-section">
      <div class="container">
        <img src="/Images/IMG_5505.jpeg" alt="Završeni projekti" class="completed-image">
        <h2>Završeni i prodati stanovi</h2>
        <p>Pogledajte naše završene stambene objekte i uverite se u kvalitet i verodostojnost gradnje.</p>
        <button class="project-button">Pogledajte detaljnije</button>
      </div>
    </section> -->
    <!-- ovde se vrati -->

    <section class="contact-section">
      <div class="container">
        <h2>Kontakt</h2>
        <p>Ukoliko imate bilo kakvih pitanja slobodno nas kontaktirajte preko ove forme ili pozivom na broj telefona koji možete videti ispod.</p>
        
        <form class="contact-form" @submit.prevent="submitForm">
          <input type="text" placeholder="Vaše ime i prezime" v-model="form.name" required>
          <input type="email" placeholder="Vaš email" v-model="form.email" required>
          <input type="text" placeholder="Tema" v-model="form.subject" required>
          <textarea placeholder="Vaša poruka" v-model="form.message" required></textarea>
          <button type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Šalje se...' : 'Pošaljite poruku' }}
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const navigateToProjects = async () => {
  await router.push('/under-construction')
  // Scroll to top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const submitForm = async () => {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  
  try {
    // EmailJS configuration - you'll need to set these up
    const serviceID = 'service_9x7wyj4'
    const templateID = 'template_thagjiz'
    const publicKey = 'WguQXJZ-TG1ZdQ8O9'
    
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      subject: form.value.subject,
      message: form.value.message,
      to_email: 'miljko@live.com'
    }
    
    await emailjs.send(serviceID, templateID, templateParams, publicKey)
    
    alert('Hvala vam na poruci! Poruka je uspešno poslata. Kontaktiraćemo vas uskoro.')
    form.value = { name: '', email: '', subject: '', message: '' }
    
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/Images/DejanaDinica/IMG_5501.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.featured-section {
  padding: 4rem 0;
  background: #f8f9fa;
  text-align: center;
}

.featured-badge {
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: bold;
}

.featured-section h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.featured-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #2980b9;
}

.projects-grid {
  padding: 4rem 0;
}

.projects-grid .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-content p {
  margin-bottom: 1.5rem;
  color: #7f8c8d;
}

.project-button {
  background: #27ae60;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.project-button:hover {
  background: #219a52;
}

.project-button-disabled {
  background: #95a5a6 !important;
  cursor: not-allowed !important;
  opacity: 0.6;
}

.project-button-disabled:hover {
  background: #95a5a6 !important;
}


.completed-section {
  padding: 4rem 0;
  text-align: center;
}

.completed-image {
  width: 100%;
  max-width: 600px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.contact-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.contact-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.contact-section p {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.contact-form button {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.contact-form button:hover {
  background: #2980b9;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.2rem;
  }
  
  .projects-grid .container {
    grid-template-columns: 1fr;
  }
}
</style>
