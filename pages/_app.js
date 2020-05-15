import '../styles.scss'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
    <div>
        <Head>
            // required meta tags
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description"
                  content="Willkommen bei den Most Pressers! Nein, kein Obstsaftverein, sondern ein junges, fetziges Ensemble, welches sich zur Aufgabe macht, böhmisch-mährische und moderne Blasmusik zum Besten zu geben."/>
            <meta name="author" content="Alexander Falzberger"/>
            <link rel="icon" href="../public/favicon.ico"/>
            <title>Most Pressers • Moderne Blasmusik vom Feinsten</title>

            // bootstrap CSS
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossOrigin="anonymous"/>
            <script src="https://kit.fontawesome.com/82a5270144.js" crossOrigin="anonymous"/>

            // google fonts
            <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
        </Head>

        <main>
            <Component {...pageProps} />
        </main>

        <footer>
            <div className="container-fluid">
                <p>&copy; 2017 - 2020 Most Pressers || <a href="impressum.html">Impressum und Haftungsausschluss</a>
                </p>
            </div>
        </footer>
    </div>
    );
}

export default MyApp
