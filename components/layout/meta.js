import Head from 'next/head'
export default function Meta(){
    return(
        <Head>
            <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" media="print" onLoad="this.media='all'" />

            <noscript>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
            </noscript>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <title>JIM Building</title>
            <meta name="description" content={`Descrição do site`} />
        </Head>
    )
}