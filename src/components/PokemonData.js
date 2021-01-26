import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const PokemonData = ({ pokeData }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>
              <h4>{pokeData.name.toUpperCase()}</h4>
              <img alt="poke" src={pokeData.sprites.front_default}/>
            </Card.Header>
            <Card.Body>
              <h4>Abilities</h4>
              {pokeData.abilities.map((ability, key) => (
                <div key={key}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
              <h4 className="mt-4">Type</h4>
              {pokeData.types.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
                <h4>Base Stats</h4>
                {pokeData.stats.map((stat, key) => (
                  <div key={key}>
                    <strong>{stat.stat.name}</strong>
                    <ProgressBar 
                      now={stat.base_stat} 
                      max={255} 
                      label={stat.base_stat}
                    />
                  </div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


export default PokemonData