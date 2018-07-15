import React, { Component } from 'react';
import Card from './card'



class B extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: ['A', 'B', 'C', 'D', 'E', 'F'],
            newCard: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.AddNewCard = this.AddNewCard.bind(this);
    }

    handleChange(event) {
        this.setState({ newCard: event.target.value });
    }

    AddNewCard(event) {
        alert('A name was submitted: ' + this.state.newCard);
        this.setState(prevState => ({
            cards: [...prevState.cards, this.state.newCard]
        }))
        event.preventDefault();
      }

    render() {
        const cards = this.state.cards
        return (
            <section class="hero is-dark is-fullheight">
                <div class="hero-body">
                    <div className="container">
                        <div class="control">
                            <input class="input" type="text" value={this.state.newCard} onChange={this.handleChange} />
                            <div class="control">
                                <button class="button is-primary" onClick={this.AddNewCard}>Submit</button>
                            </div>
                        </div>
                        <div className="columns" style={{ display: 'flex', flexFlow: 'row wrap' }}>
                            {cards.map(card => (
                                <div class="column  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" key={card.toString()}>
                                    <Card name={card} />
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default B;
