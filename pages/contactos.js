import Container from 'components/global/Container';
import BaseLayout from 'components/layout/BaseLayout';

export default function Contactos() {
  return (
    <BaseLayout>
      <Container>
        <section>
          <div className="section__header">
            <h1>Contactos</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium quaerat assumenda et alias. Aut quidem tenetur laborum
              natus nemo, sunt, labore ullam perferendis adipisci, pariatur
              dolorem facilis beatae magni laboriosam.
            </p>
          </div>

          <form>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />
            <br />
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />
            <br />
            <input
              type="email"
              id="mail"
              name="name"
              placeholder="Your email.. "
            />
            <br />
            <textarea
              name="subject"
              id="subject"
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </section>
      </Container>
    </BaseLayout>
  );
}
