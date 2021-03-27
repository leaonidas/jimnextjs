import Button from 'components/global/Button';
import Link from 'next/link';

export default function ObraThumbnail(props, { className = '' }) {
  const { title, location, year, slug, imagePath, imageAlt } = props;

  return (
    <Link href={`/${slug}`}>
      <a className={`obra-thumbnail ${className}`}>
        <div className="project-info">
          <div className="project-info__inner">
            <h2>{title}</h2>
            <div>
              <p>{location}</p>
              <p>{year}</p>
            </div>
            <div className="project-info__inner-cta">
              <Button variant="secondary">Ver mais</Button>
            </div>
          </div>
        </div>
        <img src={`${imagePath}`} alt={imageAlt} />
      </a>
    </Link>
  );
}
