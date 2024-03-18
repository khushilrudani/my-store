import React from 'react'
import Container from 'react-bootstrap/Container';

import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../photo/1.jpg'
import Photo2 from '../photo/2.jpg'
import Photo3 from '../photo/3.jpg'

import alb1 from '../photo/thumb1.jpg';
import alb2 from '../photo/thumb2.jpg';
import alb3 from '../photo/thumb3.jpg';
import alb4 from '../photo/about-4.jpg';

// import Row from 'react-bootstrap/Row';
import team1 from '../photo/team-1.jpg';
import team2 from '../photo/team-2.jpg';
import team3 from '../photo/team-3.jpg';
import team4 from '../photo/team-4.jpg';

import Row from 'react-bootstrap/Row';
import ablum1 from '../photo/about-img.jpg';

const Home = () => {
    return (
 // HEADER..........
 <div>
        
{/* slide......................... */}

                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 class="h-2">Welcome to MY Store</h2>
                            <p>Technology News, Development and Trends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 class="h-2">The Best Coding Blog</h2>
                            <p>Technology News, Development and Trends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Photo3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 class="h-2">Award winning Blog</h2>
                            <p>Technology News, Development and Trends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

 {/* TOPICS............. */}

                <div class="container my-4 ">
                    <div class="row mb-2">
                        <div class="col-md-6 p2">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                                    <h3 class="mb-0">Global Conferences</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto ">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={alb1} class="bd-placeholder-img" width="200" height="250" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-success">Design</strong>
                                    <h3 class="mb-0">Learn Designing</h3>
                                    <div class="mb-1 text-muted">Nov 11</div>
                                    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={alb2} class="bd-placeholder-img" width="200" height="250" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row mb-2">
                        <div class="col-md-6 p2">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-danger">FrontEnd</strong>
                                    <h3 class="mb-0"> Templates</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={alb3} class="bd-placeholder-img" width="200" height="250" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-warning">Python</strong>
                                    <h3 class="mb-0">Learn Python</h3>
                                    <div class="mb-1 text-muted">Nov 11</div>
                                    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={alb4} class="bd-placeholder-img" width="200" height="250" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

 {/* team................ */}

                <Container>
                    {/* <Row> */}
                    <section id="team" class="team section-bg team12">
                        <div class="container" data-aos="fade-up">
                            <div class="section-header ">
                                <h3>Team</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                            </div>

                            <div class="row">

                                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                    <div class="member">
                                        <img src={team1} class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Walter White</h4>
                                                <span>Chief Executive Officer</span>
                                                <div class="social">
                                                    <a href=".."><i class="bi bi-twitter"></i></a>
                                                    <a href=".."><i class="bi bi-facebook"></i></a>
                                                    <a href=".."><i class="bi bi-instagram"></i></a>
                                                    <a href=".."><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div class="member">
                                        <img src={team2} class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Sarah Jhonson</h4>
                                                <span>Product Manager</span>
                                                <div class="social">
                                                    <a href=".."><i class="bi bi-twitter"></i></a>
                                                    <a href=".."><i class="bi bi-facebook"></i></a>
                                                    <a href=".."><i class="bi bi-instagram"></i></a>
                                                    <a href=".."><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div class="member">
                                        <img src={team3} class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>William Anderson</h4>
                                                <span>CTO</span>
                                                <div class="social">
                                                    <a href=".."><i class="bi bi-twitter"></i></a>
                                                    <a href=".."><i class="bi bi-facebook"></i></a>
                                                    <a href=".."><i class="bi bi-instagram"></i></a>
                                                    <a href=".."><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                    <div class="member">
                                        <img src={team4} class="img-fluid" alt="" />
                                        <div class="member-info">
                                            <div class="member-info-content">
                                                <h4>Amanda Jepson</h4>
                                                <span>Accountant</span>
                                                <div class="social">
                                                    <a href=".."><i class="bi bi-twitter"></i></a>
                                                    <a href=".."><i class="bi bi-facebook"></i></a>
                                                    <a href=".."><i class="bi bi-instagram"></i></a>
                                                    <a href=".."><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* </Row> */}
                </Container>

 {/* ABOUT US........... */}

                <Container>
                    <Row>
                        <section id="about" class="about">
                            <div class="container" data-aos="fade-up">
                                <div class="row">

                                    <div class="col-lg-5 col-md-6">
                                        <div class="about-img" data-aos="fade-right" data-aos-delay="100">
                                            <img src={ablum1} alt="" />
                                        </div>
                                    </div>

                                    <div class="col-lg-7 col-md-6">
                                        <div class="about-content" data-aos="fade-left" data-aos-delay="100">
                                            <h2>About Us</h2>
                                            <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error. Et repudiandae eum iste qui et ut ab alias.</p>
                                            <ul>
                                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Row>
                </Container>
            
        </div>

    );
}



export default Home