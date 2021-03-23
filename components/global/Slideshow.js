import Slider from 'react-slick';

export default function Slideshow({ children, customsettings = {} }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    ...customsettings
  };
  return <Slider {...settings}>{children}</Slider>;
}
