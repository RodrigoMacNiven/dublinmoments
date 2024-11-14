// src/components/Services.js
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './services.css';

function Services() {
  // Dados dos serviços
  const services = [
    { title: 'Impressão de Fotos', description: 'Serviço de impressão com alta qualidade e entrega rápida.' },
    { title: 'Colagem', description: 'Montagem e colagem criativa para álbuns personalizados.' },
    { title: 'Criação de Vídeos', description: 'Produção e edição de vídeos profissionais para qualquer ocasião.' },
    { title: 'Acompanhamento para Eventos', description: 'Cobertura fotográfica completa para eventos.' },
    { title: 'Pacotes', description: 'Pacotes especiais que combinam vários serviços.' },
    { title: 'Produtos', description: 'Produtos personalizados como álbuns, quadros e brindes.' },
  ];

  return (
    <Container className="my-5 corpo">
      <h2 className="text-center mb-4">Nossos Serviços</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="h-100 d-flex justify-content-center align-items-center text-center">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;
