import React from 'react'

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="logo">Future Mobile</h1>
        <p className="subtitle">CRMP - Крымская Ролевая Мультиплеер Платформа</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">🚗</div>
          <h3 className="feature-title">Реалистичные автомобили</h3>
          <p className="feature-description">
            Огромный парк транспортных средств с детальной настройкой и тюнингом. 
            Почувствуйте себя настоящим водителем в Крыму.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🏙️</div>
          <h3 className="feature-title">Открытый мир</h3>
          <p className="feature-description">
            Исследуйте обширную карту Крыма с городами, поселками и живописными 
            местами. Каждый уголок карты уникален и проработан.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👥</div>
          <h3 className="feature-title">Ролевая система</h3>
          <p className="feature-description">
            Создайте своего персонажа, выберите профессию и постройте свою историю. 
            Станьте полицейским, врачом, бизнесменом или кем угодно.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💼</div>
          <h3 className="feature-title">Экономика</h3>
          <p className="feature-description">
            Реалистичная экономическая система с работой, бизнесом и торговлей. 
            Зарабатывайте деньги и стройте свою империю.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎮</div>
          <h3 className="feature-title">Мобильная платформа</h3>
          <p className="feature-description">
            Играйте в CRMP на своем мобильном устройстве в любом месте и в любое время. 
            Оптимизировано для смартфонов и планшетов.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3 className="feature-title">Онлайн сообщество</h3>
          <p className="feature-description">
            Присоединяйтесь к тысячам игроков, создавайте фракции, участвуйте в 
            событиях и находите новых друзей.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <a href="#" className="cta-button">Начать играть сейчас</a>
      </section>

      <footer>
        <p>&copy; 2024 Future Mobile. Все права защищены.</p>
        <p>CRMP - Крымская Ролевая Мультиплеер Платформа</p>
      </footer>
    </div>
  )
}

export default App
