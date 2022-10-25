
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
import { faCircle, faEnvelope, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'

import { items } from './Items';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        'item': undefined
    };
    for(let i=0; i<items.length; i++) {
        console.log(items[i].id+" "+this.props.params.id)
        if(items[i].id == this.props.params.id) {
            this.state.item = items[i];
            break;
        }
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
            <Row style={{backgroundColor: '#F1F3FF', padding: '70px'}}>
                
            </Row>

            <Row className="p-lg-5 p-2">
                <Col className="col-12 col-lg-8">
                    <p className="fw-bold">Tentang Paket</p>
                    <p className="fw-bold mt-3">Include</p>
                    <div className="mt-3">
                        {this.state.item.include.map((item, key) =>
                            <p className="fw-bold mt-1 p-0 m-0" style={{color: 'grey'}}>• {item}</p>
                        )}
                    </div>
                    <p className="fw-bold mt-3">Exclude</p>
                    <div className="mt-3">
                        {this.state.item.exclude.map((item, key) =>
                            <p className="fw-bold mt-1 p-0 m-0" style={{color: 'grey'}}>• {item}</p>
                        )}
                    </div>
                    <p className="fw-bold mt-3">Refund, Reschedule, Overtime</p>
                    <div className="mt-3">
                        {this.state.item.other.map((item, key) =>
                            <p className="fw-bold mt-1 p-0 m-0" style={{color: 'grey'}}>• {item}</p>
                        )}
                    </div>
                </Col>

                <Col className="col-12 col-lg-4 mt-lg-0 mt-3">
                    <div className="d-flex flex-row">
                    <Figure className="mx-auto" style={{margin: 0, padding: 0}}>
                        <Figure.Image style={{margin: 0}}
                        src={this.state.item.gambar}
                        />
                    </Figure>
                    </div>
                    <p className="fw-bold p-0 m-0">{this.state.item.nama}</p>
                    <div class="d-flex flex-row p-0 m-0 mt-1">
                        <FontAwesomeIcon className="my-auto me-2" icon={faUserGroup} size="2xs" style={{color: 'grey'}} />
                        {this.state.item.kategori == 1 ? <small className="fw-bold" style={{color: 'grey'}}>2 - 4 orang</small> : undefined}
                        {this.state.item.kategori == 2 ? <small className="fw-bold" style={{color: 'grey'}}>4 - 6 orang</small> : undefined}
                        {this.state.item.kategori == 3 ? <small className="fw-bold" style={{color: 'grey'}}>6 - 8 orang</small> : undefined}
                    </div>
                    <div class="d-flex flex-row p-0 m-0 mt-5">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold ms-auto">Rp {this.state.item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                    </div>
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

export default withParams(Detail);