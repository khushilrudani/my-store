import React from 'react'
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import team1 from '../photo/team-1.jpg';
import team2 from '../photo/team-2.jpg';
import team3 from '../photo/team-3.jpg';
import team4 from '../photo/team-4.jpg';


const Team = () => {
  return (
    <Container className="dk">
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
              <img src={team2}  class="img-fluid" alt="" />
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
  )
}

export default Team