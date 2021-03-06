import Layout from '../components/layout/layout';

export default function Contactos() {
  return (
    <Layout>
      <h1>Contactos</h1>
      <div>
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
        <input type="email" id="mail" name="name" placeholder="Your email.. " />
        <br />
        <textarea name="subject" id="subject" cols="30" rows="10"></textarea>
      </div>
    </Layout>
  );
}
