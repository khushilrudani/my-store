import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ablum1 from '../photo/about-img.jpg';

const About = () => {
  return (
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
  )
}

export default About         