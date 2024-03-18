import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../photo/1.jpg'
import Photo2 from '../photo/2.jpg'
import Photo3 from '../photo/3.jpg'
function DarkVariantExample() {
  return (
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
  );
}

export default DarkVariantExample;