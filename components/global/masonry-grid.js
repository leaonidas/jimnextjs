import Masonry from 'react-masonry-css';

export default function MasonryGrid({ className = '', children }) {
  return (
    <Masonry
      breakpointCols={3}
      className={`masonry-grid ${className}`}
      columnClassName="masonry-grid__column"
    >
      {children}
    </Masonry>
  );
}
