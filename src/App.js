import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);

  const channels = {
    Sports: [
      { name: 'ESPN', url: 'http://example.com/espn.m3u8' },
      { name: 'Sky Sports', url: 'http://example.com/skysports.m3u8' },
    ],
    Movies: [
      { name: 'HBO', url: 'http://example.com/hbo.m3u8' },
      { name: 'Netflix Live', url: 'http://example.com/netflix.m3u8' },
    ],
    News: [
      { name: 'CNN', url: 'http://example.com/cnn.m3u8' },
      { name: 'BBC', url: 'http://example.com/bbc.m3u8' },
    ],
  };

  const handleSearch = (e) => setSearchQuery(e.target.value);
  const playVideo = (url) => setCurrentVideo(url);

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="Logo" className="logo" /> Pro IPTV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#favorites">Favorites</Nav.Link>
              <Nav.Link href="#settings">Settings</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Channels"
                className="me-2"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="main-container">
        <Row>
          <Col md={4} className="channel-list">
            <Accordion defaultActiveKey="0">
              {Object.keys(channels).map((category, index) => (
                <Accordion.Item eventKey={index.toString()} key={category}>
                  <Accordion.Header>{category}</Accordion.Header>
                  <Accordion.Body>
                    {channels[category]
                      .filter((channel) =>
                        channel.name.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((channel) => (
                        <div
                          key={channel.name}
                          className="channel-item"
                          onClick={() => playVideo(channel.url)}
                        >
                          {channel.name}
                        </div>
                      ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
          <Col md={8} className="video-player">
            {currentVideo ? (
              <video controls autoPlay className="video">
                <source src={currentVideo} type="application/x-mpegURL" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="placeholder">Select a channel to start watching</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
