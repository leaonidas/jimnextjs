import Container from 'components/global/Container';

export default function PreFooter({ children }) {
  return (
    <div className="pre-footer">
      <Container>
        <div className="pre-footer__content">{children}</div>
      </Container>
    </div>
  );
}
