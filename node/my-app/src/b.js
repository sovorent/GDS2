import React, { Component } from 'react';
import Card from './card'

const cards = ['A', 'B', 'C', 'D', 'E', 'F']

class B extends Component {
    render() {
        return (
            <section class="hero is-dark is-fullheight">
                <div class="hero-body">
                    <div className="container">
                        <div className="columns" style={{display:'flex', flexFlow:'row wrap'}}>
                            {cards.map(card => (
                                <div class="column  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
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
