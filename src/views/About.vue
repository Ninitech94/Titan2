<template>
  <main class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>O nama</h1>
        <p>Vaš pouzdan partner u građevinarstvu</p>
      </div>
    </div>

    <section class="company-intro">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2>TITAN - Građevinska firma</h2>
            <p>TITAN je građevinska firma koja se bavi izgradnjom i prodajom stanova u Nišu. Osnovana sa ciljem da pruži kvalitetne usluge u oblasti stambene gradnje, naša kompanija se ističe predanošću kvalitetu, poštovanjem rokova i transparentnim poslovanjem.</p>
            <p>Težimo da kvalitetnim radom poslove obavljamo na vreme, koristeći najsavremenije materijale i tehnologije u gradnji. Naš tim iskusnih profesionalaca radi na tome da svaki projekat bude realizovan prema najvišim standardima.</p>
          </div>
          <div class="intro-image">
            <img src="/Images/DejanaDinica/IMG_5506.jpeg" alt="TITAN tim" class="about-image">
          </div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2>Naše vrednosti</h2>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">🎯</div>
            <h3>Kvalitet</h3>
            <p>Koristimo najkvalitetnije materijale i pridržavamo se najviših standarda u gradnji.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">⏰</div>
            <h3>Poštovanje rokova</h3>
            <p>Naši projekti se uvek završavaju na vreme, bez kašnjenja i dodatnih troškova.</p>
          </div>
          <div class="value-item">
            <div class="value-icon">🤝</div>
            <h3>Transparentnost</h3>
            <p>Otvoreno komuniciramo sa klijentima o svim aspektima projekta.</p>
          </div>
          <!-- <div class="value-item">
            <div class="value-icon">🏆</div>
            <h3>Iskustvo</h3>
            <p>Naš tim čine iskusni profesionalci sa dugogodišnjim iskustvom u gradnji.</p>
          </div> -->
        </div>
      </div>
    </section>

    <!-- <section class="team-section">
      <div class="container">
        <h2>Naš tim</h2>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👨‍💼</div>
            </div>
            <h3>Marko Petrović</h3>
            <p class="position">Direktor</p>
            <p>Iskusni građevinski inženjer sa preko 15 godina iskustva u vođenju projekata.</p>
          </div>
          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👩‍💼</div>
            </div>
            <h3>Ana Stojanović</h3>
            <p class="position">Projektni menadžer</p>
            <p>Odgovorna za koordinaciju svih faza izgradnje i komunikaciju sa klijentima.</p>
          </div>
          <div class="team-member">
            <div class="member-photo">
              <div class="placeholder-photo">👨‍🔧</div>
            </div>
            <h3>Stefan Nikolić</h3>
            <p class="position">Glavni izvođač</p>
            <p>Vodi tim majstora i nadgleda kvalitet izvršenih radova na gradilištu.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <h2>Naši rezultati</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Završenih stanova</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25+</div>
            <div class="stat-label">Projekata</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">8</div>
            <div class="stat-label">Godina iskustva</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Zadovoljnih klijenata</div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="container">
        <h2>Naša istorija</h2>
        <div class="history-timeline">
          <div class="history-item">
            <div class="history-year">2016</div>
            <div class="history-content">
              <h3>Osnivanje kompanije</h3>
              <p>TITAN je osnovan sa vizijom da postane vodeća građevinska firma u Nišu.</p>
            </div>
          </div>
          <div class="history-item">
            <div class="history-year">2018</div>
            <div class="history-content">
              <h3>Prvi veliki projekat</h3>
              <p>Uspešno završen prvi stambeni kompleks sa 20 stanova u Panteleju.</p>
            </div>
          </div>
          <div class="history-item">
            <div class="history-year">2020</div>
            <div class="history-content">
              <h3>Proširenje tima</h3>
              <p>Tim je proširen sa dodatnim stručnjacima i modernom opremom.</p>
            </div>
          </div>
          <div class="history-item">
            <div class="history-year">2024</div>
            <div class="history-content">
              <h3>Nove tehnologije</h3>
              <p>Implementacija novih tehnologija za energetski efikasnu gradnju.</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="contact-cta">
      <div class="container">
        <h2>Pridružite se našim zadovoljnim klijentima</h2>
        <p>Kontaktirajte nas danas i ostvarite svoje snove o novom domu</p>
        <button class="cta-button" @click="$router.push('/')">Kontaktirajte nas</button>
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

.about-page {
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
  color: #2c3e50;
}

.page-header p {
  color: #666;
}

.company-intro {
  padding: 4rem 0;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 3rem;
  align-items: center;
}

.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #7f8c8d;
}

.about-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.values-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.values-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.value-item {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.team-section {
  padding: 4rem 0;
}

.team-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.member-photo {
  margin-bottom: 1.5rem;
}

.placeholder-photo {
  width: 100px;
  height: 100px;
  background: #ecf0f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 0 auto;
}

.team-member h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.position {
  color: #3498db;
  font-weight: bold;
  margin-bottom: 1rem;
}

.stats-section {
  background: #2c3e50;
  color: white;
  padding: 4rem 0;
}

.stats-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
}

.history-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.history-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.history-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.history-item {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
}

.history-year {
  background: #3498db;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
}

.history-content {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.history-content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.contact-cta {
  background: #34495e;
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
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

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .history-item {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
