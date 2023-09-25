import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{ id: 1 }],
    };
  }

  cloneButton = () => {
    this.setState(prevState => ({
      cards: [...prevState.cards, { id: prevState.cards.length + 1 }]
    }));
  };

  backgroundColor = () => {
    const card = document.querySelector('.card');
    card.classList.toggle('light-mode');
    card.classList.toggle('dark-mode');
  };

  changeText = () => {
    const heading = document.querySelector('h1');
    heading.textContent = "Something Else";
  };

  deleteCard = () => {
    const cards = document.querySelectorAll('.card');
    if (cards.length > 1) {
        const lastCard = cards[cards.length - 1];
        lastCard.remove();
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <button onClick={this.cloneButton} >Clone</button>
        <button onClick={this.backgroundColor}>Background Color</button>
        <button onClick={this.changeText}>Change Text</button>
        <button onClick={this.deleteCard}>Delete Last Card</button>
          {cards.map((card) => (
            <Card key={card.id} />
          ))}
      </div>
    );
  }
}

export default App;
