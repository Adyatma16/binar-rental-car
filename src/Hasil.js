import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

import { items } from './Items';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Hasil extends React.Component {
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
        'items': items
      }
      if(this.props.params.q) {
        try {
            let qParams = this.props.params.q.split(";", 4);
            if(qParams[0].length > 0)
              this.state.nama = qParams[0];
            if(qParams[1].length > 0)
              this.state.kategori = qParams[1];
            if(qParams[2].length > 0)
              this.state.harga = qParams[2];
            if(qParams[3].length > 0)
              this.state.status = qParams[3];

            let filtered = [];
            for(let i=0; i<this.state.items.length; i++) {
                let item = this.state.items[i];
                if(item.nama.toLocaleLowerCase().includes(qParams[0])) {
                    if(item.kategori == qParams[1] || qParams[1] == '') {
                        var itemPass = false;
                        if(qParams[2] == '') {
                            itemPass = true;
                        } else {
                            if((qParams[2] == 1 && item.harga < 400000) || 
                                (qParams[2] == 2 && item.harga >= 400000 && item.harga <= 600000) || 
                                (qParams[2] == 3 && item.harga > 600000))
                                    itemPass = true;
                        }
                        if(itemPass) {
                            if(item.status == qParams[3] || qParams[3] == '') {
                                filtered.push(item);
                            }
                        }
                    }
                }
            }
            console.log(filtered);
            if(filtered.length > 0)
                this.state.items = filtered;
        } catch(e) {
            console.log(e);
        }
      }
      this.editCariMobil = this.editCariMobil.bind(this);
      this.detailMobil = this.detailMobil.bind(this);
    }

    editCariMobil() {
        window.location.href = `/cari/${this.props.params.q}`;
    }

    detailMobil(id) {
        window.location.href = `/detail/${id}`;
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
                <Row style={{backgroundColor: '#F1F3FF', padding: '70px'}}>
                    
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
                                    disabled
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
                                    disabled
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
                                    disabled
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
                                    disabled
                                >
                                    {this.state.status === undefined || this.state.status == 1 ? <option value="1" selected>Belum Disewa</option> : <option value="1">Belum Disewa</option>}
                                    {this.state.status == 2 ? <option value="2" selected>Disewa</option> : <option value="2">Disewa</option>}
                                </Form.Select>
                                </InputGroup>
                            </Col>
                            <Col className="col-lg-2 col-12 px-2 align-self-end mb-3">
                                <Button className="btn-outline-primary" onClick={this.editCariMobil} style={{backgroundColor: 'white', borderColor: '#0D28A6', color: '#0D28A6'}}>Edit</Button>
                            </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-center px-5">
                    {this.state.items.map((item, key) =>
                    <Col className="col-lg-4 col-12 py-3">
                    <Card>
                        <Card.Body>
                            <div className="d-flex flex-row">
                            <Figure className="mx-auto" style={{margin: 0, padding: 0}}>
                                <Figure.Image style={{margin: 0}}
                                src={item.gambar}
                                />
                            </Figure>
                            </div>
                            <Card.Text>
                                {item.nama}
                            </Card.Text>
                            <p className="fw-bold">Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} / hari</p>
                            <p className="fw-bold">{item.deskripsi}</p>
                            <Button className="btn-success w-100" onClick={() => this.detailMobil(item.id)}style={{backgroundColor: '#5CB85F', borderColor: '#5CB85F'}}>Pilih Mobil</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    )}
                </Row>
            </Container>

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
        </div>;
    }
}
export default withParams(Hasil);