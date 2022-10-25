
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Cari extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.form = {
      'nama': React.createRef(),
      'kategori': React.createRef(),
      'harga': React.createRef(),
      'status': React.createRef(),
    };
    this.state = {
      'nama': undefined,
      'kategori': undefined,
      'harga': undefined,
      'status': undefined,
    }
    if(this.props.params.q) {
      try {
          let qParams = this.props.params.q.split(";", 4);
          console.log(qParams);
          if(qParams[0].length > 0)
            this.state.nama = qParams[0];
          if(qParams[1].length > 0)
            this.state.kategori = qParams[1];
          if(qParams[2].length > 0)
            this.state.harga = qParams[2];
          if(qParams[3].length > 0)
            this.state.status = qParams[3];
      } catch(e) {
          console.log(e);
      }
    }
    this.cariMobil = this.cariMobil.bind(this);
  }

  cariMobil() {
    if(!this.form.nama.current.value.match(/[|\\/~^:,;?!&#%$@*+]/)) {
      let query = `${this.form.nama.current.value};${this.form.kategori.current.value};${this.form.harga.current.value};${this.form.status.current.value}`;
      window.location.href = `/hasil/${query}`;
    } else {
      alert("Nama/Tipe mobil tidak boleh mengandung simbol");
    }
  }

  render() {
    return <div>
        <Navbar expand="lg" className="bg-theme" sticky="top">
          <Container>
            <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav">
              <Nav 
                className="text-end ms-auto ms-lg-0 w-100"
                activeKey="/">
              <Nav.Item>
                <Nav.Link href="#"><h5>BCR</h5></Nav.Link>
              </Nav.Item>
              <Nav.Item
                className="text-end ms-0 ms-lg-auto">
                <Nav.Link href="/#services">Our Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#why">Why Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/#faq">FAQ</Nav.Link>
              </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid>
          <Row style={{backgroundColor: '#F1F3FF'}}>
            <Col className="align-self-center ps-lg-5" lg={{span: 8}}>
              <Row>
                <h2>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
              </Row>
              <Row>
                <Col className="fw-bolder">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </Col>
              </Row>
            </Col>
            <Col className="align-self-end" lg="4">
              <Row>
              <Figure className="text-end ps-4 ps-lg-2" style={{margin: 0, padding: 0}}>
                <Figure.Image style={{margin: 0}}
                  src="/assets/img_car.png"
                />
              </Figure>
              </Row>
            </Col>
          </Row>

          <Row>
              <Col>
                <Card className="mx-3 shadow" style={{
                  zIndex: 1,
                  transform: `translateY(-30px)`
                }}>
                  <Card.Body>
                    <Row>
                      <Col className="col-lg-3 col-12 px-2">
                        <Form.Label htmlFor="namaMobil">Nama Mobil</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Control
                            ref={this.form.nama}
                            id="namaMobil"
                            placeholder="Ketik nama/tipe mobil"
                            aria-label="Nama Mobil"
                            value={this.state.nama}
                            onChange={(event) => {this.setState({nama: event.target.value})}}
                          />
                        </InputGroup>
                      </Col>
                      <Col className="col-lg-3 col-12 px-2">
                        <Form.Label htmlFor="kapasitasMobil">Kategori</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Select
                            ref={this.form.kategori}
                            id="kapasitasMobil"
                            aria-label="Kategori"
                          >
                            {this.state.kategori ? <option disabled value="">Masukan Kapasitas Mobil</option> : <option disabled value="" selected>Masukan Kapasitas Mobil</option>}
                            {this.state.kategori == 1 ? <option value="1" selected>2 - 4 orang</option> : <option value="1" >2 - 4 orang</option>}
                            {this.state.kategori == 2 ? <option value="2" selected>4 - 6 orang</option> : <option value="2">4 - 6 orang</option>}
                            {this.state.kategori == 3 ? <option value="3" selected>6 - 8 orang</option> : <option value="3">6 - 8 orang</option>}
                          </Form.Select>
                        </InputGroup>
                      </Col>
                      <Col className="col-lg-2 col-12 px-2">
                        <Form.Label htmlFor="hargaMobil">Harga</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Select
                            ref={this.form.harga}
                            id="hargaMobil"
                            aria-label="Kategori"
                          >
                            {this.state.harga ? <option disabled value="">Masukan Harga Sewa per Hari</option> : <option disabled value="" selected>Masukan Harga Sewa per Hari</option>}
                            {this.state.harga == 1 ? <option value="1" selected>&lt; Rp. 400.000</option> : <option value="1">&lt; Rp. 400.000</option>}
                            {this.state.harga == 2? <option value="2" selected>Rp. 400.000 - Rp. 600.000</option> : <option value="2">Rp. 400.000 - Rp. 600.000</option>}
                            {this.state.harga == 3 ? <option value="3" selected>&gt; Rp. 600.000</option> : <option value="3">&gt; Rp. 600.000</option>}
                          </Form.Select>
                        </InputGroup>
                      </Col>
                      <Col className="col-lg-2 col-12 px-2">
                        <Form.Label htmlFor="statusMobil">Status</Form.Label>
                        <InputGroup className="mb-3">
                          <Form.Select
                            ref={this.form.status}
                            id="statusMobil"
                            aria-label="Status"
                          >
                            {this.state.status === undefined || this.state.status == 1 ? <option value="1" selected>Belum Disewa</option> : <option value="1">Belum Disewa</option>}
                            {this.state.status == 2 ? <option value="2" selected>Disewa</option> : <option value="2">Disewa</option>}
                          </Form.Select>
                        </InputGroup>
                      </Col>
                      <Col className="col-lg-2 col-12 px-2 align-self-end mb-3">
                        <Button className="btn-success" onClick={this.cariMobil} style={{backgroundColor: '#5CB85F', borderColor: '#5CB85F'}}>Cari Mobil</Button>
                      </Col>
                      {this.props.params.q ? <Col className="col-lg-1 col-12 px-2 align-self-end mb-3">
                          <Button className="btn-outline-primary" href="/cari" style={{backgroundColor: 'white', borderColor: '#0D28A6', color: '#0D28A6'}}>Reset</Button>
                      </Col>: undefined}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
          </Row>

          <Row className="p-1 p-lg-5 mt-3">
            <Col className="col-12 col-lg-3">
              <Row className="mt-3">
                <Col className="fw-bolder">
                  Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="fw-bolder">
                  binarcarrental@gmail.com
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="fw-bolder">
                  081-233-334-808
                </Col>
              </Row>
            </Col>
            <Col className="col-12 col-lg-3">
              <Row className="mt-3">
                <Col>
                  <Nav.Link href="#services">Our Services</Nav.Link>
                  <Nav.Link className="mt-2" href="#why">Why Us</Nav.Link>
                  <Nav.Link className="mt-2" href="#testimonial">Testimonial</Nav.Link>
                  <Nav.Link className="mt-2" href="#faq">FAQ</Nav.Link>
                </Col>
              </Row>
            </Col>
            <Col className="col-12 col-lg-3">
              <Row className="mt-3">
                <Col className="fw-bolder">
                  Connect with us
                </Col>
              </Row>
              <div className="d-flex flex-row me-3">
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: '#0D28A6'}} size="2xs" />
                  <FontAwesomeIcon icon={faFacebookF} className="fa-stack-1x fa-inverse" size="2xs" />
                </span>
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: '#0D28A6'}} size="2xs" />
                  <FontAwesomeIcon icon={faInstagram} className="fa-stack-1x fa-inverse" size="2xs" />
                </span>
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: '#0D28A6'}} size="2xs" />
                  <FontAwesomeIcon icon={faTwitter} className="fa-stack-1x fa-inverse" size="2xs" />
                </span>
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: '#0D28A6'}} size="2xs" />
                  <FontAwesomeIcon icon={faEnvelope} className="fa-stack-1x fa-inverse" size="2xs" />
                </span>
                <span className="fa-stack fa-2x">
                  <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" style={{color: '#0D28A6'}} size="2xs" />
                  <FontAwesomeIcon icon={faTwitch} className="fa-stack-1x fa-inverse" size="2xs" />
                </span>
              </div>
            </Col>
            <Col className="col-12 col-lg-3">
              <Row className="mt-3">
                <Col className="fw-bolder">
                  Copyright Binar 2022
                  <Nav.Link className="mt-3" href="#"><h5>BCR</h5></Nav.Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
    </div>;
  }
}

export default withParams(Cari);