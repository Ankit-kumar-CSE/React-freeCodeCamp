export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const moodBoard = [
    { color: 'green', image: 'https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg', description: 'Caribbean' },
    { color: 'purple', image: 'https://cdn.freecodecamp.org/curriculum/labs/shore.jpg', description: 'Gawadar Beach' },
    { color: 'blue', image: 'https://cdn.freecodecamp.org/curriculum/labs/grass.jpg', description: 'Cape Town' },
    { color: 'pink', image: 'https://cdn.freecodecamp.org/curriculum/labs/ship.jpg', description: 'Suez Canal' },
    { color: 'red', image: 'https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg', description: 'Santorini' },
    { color: 'grey', image: 'https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg', description: 'Istanbul' },
  ];

  return (
    <div>
    <h1 className='mood-board-heading'>Destination Mood Board</h1>
    <div className='mood-board'>
      {moodBoard.map((mood, index) => (
        <MoodBoardItem 
          key={index}
          color={mood.color}
          image={mood.image}
          description={mood.description}
        />
      ))}
      </div>
    </div>
  );
}
