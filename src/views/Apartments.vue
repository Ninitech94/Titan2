<template>
  <main class="apartments-page">
    <div class="page-header">
      <div class="container">
        <h1>Odmah useljivi stanovi</h1>
        <p>Pogledajte preostalu ponudu odmah useljivih stanova</p>
      </div>
    </div>

    <section class="apartments-grid">
      <div class="container">
        <div class="apartment-card">
          <img src="/Images/DejanaDinica/IMG_5502.jpeg" alt="Stan 1" class="apartment-image">
          <div class="apartment-content">
            <h3>Stan 1 - 65m²</h3>
            <p>Moderan dvosoban stan na drugom spratu. Kompletno renoviran sa kvalitetnim materijalima.</p>
            <div class="apartment-details">
              <span class="detail">📐 65m²</span>
              <span class="detail">🛏️ 2 sobe</span>
              <span class="detail">🚿 1 kupatilo</span>
            </div>
            <div class="apartment-price">€85,000</div>
            <button class="contact-button">Kontaktirajte nas</button>
          </div>
        </div>

        <div class="apartment-card">
          <img src="/Images/DejanaDinica/IMG_5503.jpeg" alt="Stan 2" class="apartment-image">
          <div class="apartment-content">
            <h3>Stan 2 - 85m²</h3>
            <p>Prostran trosoban stan sa terasom. Idealan za porodice.</p>
            <div class="apartment-details">
              <span class="detail">📐 85m²</span>
              <span class="detail">🛏️ 3 sobe</span>
              <span class="detail">🚿 2 kupatila</span>
            </div>
            <div class="apartment-price">€110,000</div>
            <button class="contact-button">Kontaktirajte nas</button>
          </div>
        </div>

        <div class="apartment-card">
          <img src="/Images/DejanaDinica/IMG_5504.jpeg" alt="Stan 3" class="apartment-image">
          <div class="apartment-content">
            <h3>Stan 3 - 45m²</h3>
            <p>Kompaktan jednosoban stan, perfektan za mlade ili investiciju.</p>
            <div class="apartment-details">
              <span class="detail">📐 45m²</span>
              <span class="detail">🛏️ 1 soba</span>
              <span class="detail">🚿 1 kupatilo</span>
            </div>
            <div class="apartment-price">€65,000</div>
            <button class="contact-button">Kontaktirajte nas</button>
          </div>
        </div>

        <div class="apartment-card">
          <img src="/Images/DejanaDinica/IMG_5505.jpeg" alt="Stan 4" class="apartment-image">
          <div class="apartment-content">
            <h3>Stan 4 - 120m²</h3>
            <p>Luksuzni četvorosoban stan sa panoramskim pogledom.</p>
            <div class="apartment-details">
              <span class="detail">📐 120m²</span>
              <span class="detail">🛏️ 4 sobe</span>
              <span class="detail">🚿 2 kupatila</span>
            </div>
            <div class="apartment-price">€160,000</div>
            <button class="contact-button">Kontaktirajte nas</button>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <h2>Kontakt za dodatne informacije</h2>
        <p>Za više informacija o stanovima ili za zakazivanje obilaska, kontaktirajte nas:</p>
        <div class="contact-details">
          <div class="contact-item">
            <strong>Telefon:</strong> +381 60 4757 970
            <strong>Telefon 2:</strong> +381 64 1523 456
          </div>
          <div class="contact-item">
            <strong>Email:</strong> titan.group.nis@outlook.com
          </div>
          <div class="contact-item">
            <strong>Adresa:</strong> Vizantijski bulevar 104/28, 18000 Niš-Pantelej
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.apartments-page {
  padding-top: 80px;
}

.page-header {
  background: #2c3e50;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.apartments-grid {
  padding: 4rem 0;
}

.apartments-grid .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.apartment-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.apartment-card:hover {
  transform: translateY(-5px);
}

.apartment-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.apartment-content {
  padding: 1.5rem;
}

.apartment-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.apartment-content p {
  margin-bottom: 1.5rem;
  color: #7f8c8d;
}

.apartment-details {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.detail {
  background: #ecf0f1;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

.apartment-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1rem;
}

.contact-button {
  background: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}

.contact-button:hover {
  background: #2980b9;
}

.contact-info {
  background: #f8f9fa;
  padding: 4rem 0;
  text-align: center;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.contact-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.contact-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .apartments-grid .container {
    grid-template-columns: 1fr;
  }
  
  .apartment-details {
    justify-content: center;
  }
}
</style>
