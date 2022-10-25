import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import StarPicker from 'react-star-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDown, faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.testi = [React.createRef(),React.createRef(),React.createRef()];
    this.testiPart = React.createRef();
    this.state = { 
      screenWidth: window.innerWidth,
      testi: 0,
      faq: null
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.prevTesti = this.prevTesti.bind(this);
    this.nextTesti = this.nextTesti.bind(this);
    this.faqVisible = this.faqVisible.bind(this);
  }

  faqVisible(index) {
    this.setState({
      faq: index
    })
  }

  prevTesti() {
    let current;
    if(this.state.testi > 0)
      current = this.state.testi - 1;
    else
      current = this.testi.length - 1;
    this.setState({
      testi: current
    }, () => {
      console.log(`prevtesti ${this.state.testi} ${this.testi[this.state.testi]}`)
      this.testiPart.current.scrollIntoView()
      setTimeout(() => {
        this.testi[this.state.testi].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }, 300)
    });
  }

  nextTesti() {
    let current;
    if(this.state.testi < this.testi.length - 1)
      current = this.state.testi + 1;
    else
      current = 0;
    this.setState({
      testi: current
    }, () => {
      console.log(`nexttesti ${this.state.testi} ${this.testi[this.state.testi]}`)
      this.testiPart.current.scrollIntoView()
      setTimeout(() => {
        this.testi[this.state.testi].current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center'
        });
      }, 300)
    });
  }

  componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
     this.setState({ screenWidth: window.innerWidth });
  }

  //<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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
                <Nav.Link href="#services">Our Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#why">Why Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#faq">FAQ</Nav.Link>
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
              <Row className="mt-3 mb-5">
                <Col>
                <Button className="btn-success" href="/cari" style={{backgroundColor: '#5CB85F', borderColor: '#5CB85F'}}>Mulai Sewa Mobil</Button>
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

          <Row id="services" className="p-1 p-lg-5">
            <Col className="align-self-center py-3 px-2" lg="6">
              <Row>
              <Figure className="text-center text-lg-end">
                <Figure.Image style={{margin: 0}}
                  src="/assets/img_service.png"
                />
              </Figure>
              </Row>
            </Col>
            
            <Col className="align-self-center ps-lg-5" lg="6">
              <Row>
                <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
              </Row>
              <Row className="mt-3">
                <Col className="fw-bolder">
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className='fw-bolder'>
                  <Figure>
                    <Figure.Image style={{margin: 0,marginBottom: 5,marginRight: 10}}
                      src="/assets/icon_check.png"
                    />
                  </Figure>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className='fw-bolder'>
                  <Figure>
                    <Figure.Image style={{margin: 0,marginBottom: 5,marginRight: 10}}
                      src="/assets/icon_check.png"
                    />
                  </Figure>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className='fw-bolder'>
                  <Figure>
                    <Figure.Image style={{margin: 0,marginBottom: 5,marginRight: 10}}
                      src="/assets/icon_check.png"
                    />
                  </Figure>
                  Sewa Mobil Jangka Panjang Bulanan
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className='fw-bolder'>
                  <Figure>
                    <Figure.Image style={{margin: 0,marginBottom: 5,marginRight: 10}}
                      src="/assets/icon_check.png"
                    />
                  </Figure>
                  Gratis Antar - Jemput Mobil di Bandara
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className='fw-bolder'>
                  <Figure>
                    <Figure.Image style={{margin: 0,marginBottom: 5,marginRight: 10}}
                      src="/assets/icon_check.png"
                    />
                  </Figure>
                  Layanan Airport Transfer / Drop In Out
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="why" className="p-1 p-lg-5">
            <Col className="align-self-center">
              <Row>
                <h3 className="text-center text-lg-start">Why Us?</h3>
              </Row>
              <Row>
                <Col className="fw-bolder text-center text-lg-start">
                  Mengapa harus pilih Binar Car Rental?
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-12 col-lg-3 px-5 px-lg-2 py-2">
                <Card className="w-100 h-100">
                  <Card.Body>
                    <Figure>
                      <Figure.Image style={{margin: 0}}
                        src="/assets/icon_complete.png"
                      />
                    </Figure>
                    <Card.Title><h5 className="fw-bold">Mobil Lengkap</h5></Card.Title>
                    <Card.Text className="fw-bold">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 col-lg-3 px-5 px-lg-2 py-2">
                <Card className="w-100 h-100">
                  <Card.Body>
                    <Figure>
                      <Figure.Image style={{margin: 0}}
                        src="/assets/icon_price.png"
                      />
                    </Figure>
                    <Card.Title><h5 className="fw-bold">Harga Murah</h5></Card.Title>
                    <Card.Text className="fw-bold">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 col-lg-3 px-5 px-lg-2 py-2">
                <Card className="w-100 h-100">
                  <Card.Body>
                    <Figure>
                      <Figure.Image style={{margin: 0}}
                        src="/assets/icon_24hrs.png"
                      />
                    </Figure>
                    <Card.Title><h5 className="fw-bold">Layanan 24 Jam</h5></Card.Title>
                    <Card.Text className="fw-bold">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col className="col-12 col-lg-3 px-5 px-lg-2 py-2">
                <Card className="w-100 h-100">
                  <Card.Body>
                    <Figure>
                      <Figure.Image style={{margin: 0}}
                        src="/assets/icon_professional.png"
                      />
                    </Figure>
                    <Card.Title><h5 className="fw-bold">Sopir Professional</h5></Card.Title>
                    <Card.Text className="fw-bold">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          
          <Row id="testimonial" ref={this.testiPart} className="mx-0">
            <Col className="align-self-center mx-0">
              <Row className="pt-1 pt-lg-5">
                <h3 className="text-center mt-3">Testimonial</h3>
              </Row>
              <Row className="px-1 px-lg-5">
                <Col className="fw-bolder text-center">
                Berbagai review positif dari para pelanggan kami
                </Col>
              </Row>
              <Row className="mx-2">
                <Col className="mt-3 mx-2 py-2">
                  <div className="d-flex flex-row overflow-hidden px-1">
                    <Col ref={this.testi[0]} className="col-12 col-lg-7 px-2">
                    <Card className="w-100 h-100 bg-theme">
                      <Card.Body className="row">
                        <Col className="col-12 col-lg-3 text-lg-end text-center align-self-center ps-2 ps-lg-5">
                          <Figure>
                            <Figure.Image style={{margin: 0}}
                              src="/assets/img_photo2.png"
                            />
                          </Figure>
                        </Col>
                        <Col className="col-12 col-lg-9 text-lg-start text-center align-self-center pe-2 pe-lg-5">
                          <StarPicker value={5} />
                          <Card.Text className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                          </Card.Text>
                          <Card.Text>
                          John Dee 32, Bromo
                          </Card.Text>
                        </Col>
                      </Card.Body>
                    </Card>
                    </Col>
                    <Col ref={this.testi[1]} className="col-12 col-lg-7 px-2">
                    <Card className="w-100 h-100 bg-theme">
                      <Card.Body className="row">
                        <Col className="col-12 col-lg-3 text-lg-end text-center align-self-center ps-2 ps-lg-5">
                          <Figure>
                            <Figure.Image style={{margin: 0}}
                              src="/assets/img_photo2.png"
                            />
                          </Figure>
                        </Col>
                        <Col className="col-12 col-lg-9 text-lg-start text-center align-self-center pe-2 pe-lg-5">
                          <StarPicker value={5} />
                          <Card.Text className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                          </Card.Text>
                          <Card.Text>
                          John Dee 32, Bromo
                          </Card.Text>
                        </Col>
                      </Card.Body>
                    </Card>
                    </Col>
                    <Col ref={this.testi[2]} className="col-12 col-lg-7 px-2">
                    <Card className="w-100 h-100 bg-theme">
                      <Card.Body className="row">
                        <Col className="col-12 col-lg-3 text-lg-end text-center align-self-center ps-2 ps-lg-5">
                          <Figure>
                            <Figure.Image style={{margin: 0}}
                              src="/assets/img_photo3.png"
                            />
                          </Figure>
                        </Col>
                        <Col className="col-12 col-lg-9 text-lg-start text-center align-self-center pe-2 pe-lg-5">
                          <StarPicker value={5} />
                          <Card.Text className="fw-bold">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                          </Card.Text>
                          <Card.Text>
                          John Dee 32, Bromo
                          </Card.Text>
                        </Col>
                      </Card.Body>
                    </Card>
                    </Col>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center py-2">
                <Col className="text-end">
                <Button className="btn-danger text-black" onClick={this.prevTesti} style={{backgroundColor: 'white', borderColor: 'black', borderRadius: '30px'}}><FontAwesomeIcon icon={faAngleLeft}/></Button>
                </Col>
                <Col className="text-start">
                <Button className="btn-success" onClick={this.nextTesti} style={{backgroundColor: '#5CB85F', borderColor: '#5CB85F', borderRadius: '30px'}}><FontAwesomeIcon icon={faAngleRight}/></Button>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="p-1 p-lg-5">
            <Col className="align-self-center">
                <Card className="w-100 h-100 bg-navy-light p-4">
                  <Card.Body>
                    <h2 className="text-white text-center">Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <Row className="justify-content-center">
                      <Col lg={{span: 6}}>
                      <Card.Text className="text-white text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      </Card.Text>
                      </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                      <Col className="col-md-4 col-lg-3">
                        <Button className="btn-success text-center w-100" href="/cari" style={{backgroundColor: '#5CB85F', borderColor: '#5CB85F'}}>Mulai Sewa Mobil</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

          
          <Row id="faq" className="p-1 p-lg-5 mt-3">
            <Col className="col-12 col-lg-5">
              <Row>
                <h3 className="text-center text-lg-start">Frequently Asked Question</h3>
              </Row>
              <Row>
                <Col className="fw-bolder text-center text-lg-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Col>
              </Row>
            </Col>
            <Col className="col-12 col-lg-7 mt-lg-0 mt-3">
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex flex-row p-0 m-0">
                    <div className="d-flex flex-column align-self-center me-auto">
                    <Card.Text className="fw-bold">
                      Apa saja syarat yang dibutuhkan?
                    </Card.Text>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => this.faqVisible(0)}/>
                    </div>
                  </div>
                  {this.state.faq == 0 ? 
                  <Card.Text className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>: null}
                </Card.Body>
              </Card>
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex flex-row p-0 m-0">
                    <div className="d-flex flex-column align-self-center me-auto">
                    <Card.Text className="fw-bold">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </Card.Text>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => this.faqVisible(1)}/>
                    </div>
                  </div>
                  {this.state.faq == 1 ? 
                  <Card.Text className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>: null}
                </Card.Body>
              </Card>
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex flex-row p-0 m-0">
                    <div className="d-flex flex-column align-self-center me-auto">
                    <Card.Text className="fw-bold">
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                    </Card.Text>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => this.faqVisible(2)}/>
                    </div>
                  </div>
                  {this.state.faq == 2 ? 
                  <Card.Text className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>: null}
                </Card.Body>
              </Card>
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex flex-row p-0 m-0">
                    <div className="d-flex flex-column align-self-center me-auto">
                    <Card.Text className="fw-bold">
                      Apakah Ada biaya antar-jemput?
                    </Card.Text>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => this.faqVisible(3)}/>
                    </div>
                  </div>
                  {this.state.faq == 3 ? 
                  <Card.Text className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>: null}
                </Card.Body>
              </Card>
              <Card className="my-2">
                <Card.Body>
                  <div className="d-flex flex-row p-0 m-0">
                    <div className="d-flex flex-column align-self-center me-auto">
                    <Card.Text className="fw-bold">
                      Bagaimana jika terjadi kecelakaan?
                    </Card.Text>
                    </div>
                    <div className="d-flex flex-column align-self-center">
                    <FontAwesomeIcon icon={faAngleDown} onClick={() => this.faqVisible(4)}/>
                    </div>
                  </div>
                  {this.state.faq == 4 ? 
                  <Card.Text className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  </Card.Text>: null}
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

export default App;
