function CardGrid() {
    const cards = [
      { title: 'Project One', description: 'A cool thing I built.' },
      { title: 'Project Two', description: 'Another neat experiment.' },
      { title: 'Project Three', description: 'Something retro and fun.' },
    ];
  
    return (
      <section className="card-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default CardGrid;
  