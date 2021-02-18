import Head from 'next/head'
/*import styles from '../styles/globals.css'*/

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header>
        <nav>
          <ul>
            <li><a href="/empresa">Empresa</a></li>
            <li><a href="/underconstruction">Serviços</a></li>
            <li><a href="/underconstruction">Obras</a></li>
            <li><a href="/underconstruction">Projectos</a></li>
            <li><a href="/underconstruction">Contactos</a></li>
          </ul>
        </nav>

        <div className="logo">
          <a href="/">
            <img src="/images/logos/Base_JIMBuilding_mini.png" alt="JIM Building logo"/>
          </a>
        </div>
      </header>

      <section>
        <div>
          <figure className="slide">
            <img src="/images/slideshow/first.jpg" alt="Construcion picture"/>
          </figure>
        </div>
      </section>

      <footer>
        <div className="impic">
          <a href="http://www.impic.pt/impic/">
            <img src="/images/logos/Símbolo_Impic_JIMBUILDING-removebg.png" alt="Impic"/>
          </a>
        </div>

        <div className="ruis">
          <img src="/images/logos/Logotipo_versao_cor-removebg.png" alt="RUIS"/>
        </div>
        
        <div className="aiccopn">
          <a href="https://www.aiccopn.pt/">
            <img src="/images/logos/Logo_Associado_AICCOPN-removebg.png" alt="AICCOPN"/>
          </a>
        </div>

        <table>
          <tbody>
            <tr>
              <td>jorge.leao@jimbuilding.pt</td>
              <td>|</td>
              <td className="number">919191919</td>
            </tr>
            <tr>
              <td>joao.leao@jimbuilding.pt</td>
              <td>|</td>
              <td className="number">919191919</td>
            </tr>
          </tbody>
        </table>
      </footer>

        
    </div>
  )
}
