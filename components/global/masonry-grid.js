import Masonry from 'react-masonry-css';

export default function MasonryGrid({ className = '', children }) {
  const breakpointColumnsObject = {
    default: 3,
    991: 2,
    767: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObject}
      className={`masonry-grid ${className}`}
      columnClassName="masonry-grid__column"
    >
      {children}
    </Masonry>
  );
}
