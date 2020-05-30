import '../styles.scss'
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description"
                      content="Willkommen bei den Most Pressers!
                      Nein, kein Obstsaftverein, sondern ein junges, fetziges Ensemble, welches sich zur Aufgabe macht,
                      böhmisch-mährische und moderne Blasmusik zum Besten zu geben."/>
                <meta name="author" content="Alexander Falzberger"/>
                <link rel="icon" href="img/favicon.ico"/>
                <title>Most Pressers • Moderne Blasmusik vom Feinsten</title>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                      crossOrigin="anonymous"/>

                <script src="https://kit.fontawesome.com/82a5270144.js" crossOrigin="anonymous"/>

                <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
            </Head>

            <header>
                <div className="container-fluid" id="top">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-light white-sm">
                        <a className="navbar-brand" href="#top">
                            <img src={require(`../public/img/logo_transparent.png`)} alt="Most Pressers Logo"/>
                        </a>

                        <a role="button" href="https://www.facebook.com/mostPressers" target="_blank">
                            <span className="fab fa-facebook-square fa-2x ml-2"/>
                        </a>
                        <a role="button" href="https://www.instagram.com/mostpressers/" target="_blank">
                            <span className="fab fa-instagram fa-2x ml-3 mr-auto"/>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNav"
                                aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="headerNav">
                            <ul className="navbar-nav navbar-right ml-auto mt-2 mt-lg-0">
                                <li className="nav-item" key={"top"}>
                                    <a className="nav-link" href="#top">Home</a>
                                </li>
                                <li className="nav-item" key={"medien"}>
                                    <a className="nav-link" href="#Medien">Medien</a>
                                </li>
                                <li className="nav-item" key={"mitglieder"}>
                                    <a className="nav-link" href="#Mitglieder">Mitglieder</a>
                                </li>
                                <li className="nav-item" key={"termine"}>
                                    <a className="nav-link" href="#Termine">Termine</a>
                                </li>
                                <li className="nav-item" key={"kontakt"}>
                                    <a className="nav-link" href="#Kontakt">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                <div className="container-fluid">
                    <p>&copy; 2017 - 2020 Most Pressers || <a href="impressum">Impressum und Haftungsausschluss</a>
                    </p>
                </div>
            </footer>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                    crossOrigin="anonymous"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
                    integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
                    crossOrigin="anonymous"/>
            <script src="js/mostpressers.js"/>
        </div>
    );
}

export default MyApp
