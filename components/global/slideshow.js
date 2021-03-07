import Slider from 'react-slick';

export default function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000
  };
  return (
    <Slider {...settings}>
      <div className="slideshow__slide">
        <img src="/images/slideshow/first.jpg" alt="Construction sight" />
      </div>
      <div className="slideshow__slide">
        <img src="/images/slideshow/second.jpg" alt="Construction sight" />
      </div>
      <div className="slideshow__slide">
        <img src="/images/slideshow/third.jpg" alt="Construction sight" />
      </div>
    </Slider>
  );
}
