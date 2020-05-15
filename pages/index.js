export default function Home() {
    return (
        <div>
        <div id="startCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#startCarousel" data-slide-to="0" className="active"/>
                <li data-target="#startCarousel" data-slide-to="1"/>
                <li data-target="#startCarousel" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">

                    <img srcSet="
                        /img/unten_ddlipt_c_scale,w_250.jpg 250w,
                        /img/unten_ddlipt_c_scale,w_566.jpg 566w,
                        /img/unten_ddlipt_c_scale,w_798.jpg 798w,
                        /img/unten_ddlipt_c_scale,w_990.jpg 990w,
                        /img/unten_ddlipt_c_scale,w_1182.jpg 1182w,
                        /img/unten_ddlipt_c_scale,w_1354.jpg 1354w,
                        /img/unten_ddlipt_c_scale,w_1380.jpg 1380w"
                         src="/img/unten_ddlipt_c_scale,w_1380.jpg"
                         alt="Most Pressers im Einsatz"/>
                        <div className="carousel-text">
                            <h3>Servus!</h3>
                            <h4 className="d-none d-sm-block"> Willkommen bei den Most Pressers! </h4>
                        </div>
                </div>
                <div className="carousel-item">
                    <img srcSet="
                        /img/2_ovguth_c_scale,w_250.jpg 250w,
                        /img/2_ovguth_c_scale,w_615.jpg 615w,
                        /img/2_ovguth_c_scale,w_858.jpg 858w,
                        /img/2_ovguth_c_scale,w_1091.jpg 1091w,
                        /img/2_ovguth_c_scale,w_1282.jpg 1282w,
                        /img/2_ovguth_c_scale,w_1380.jpg 1380w"
                         src="/img/2_ovguth_c_scale,w_1380.jpg"
                         alt="Florian Möseneder im Einsatz"/>
                        <div className="carousel-text d-none d-sm-block">
                            <h4> Wir sind ein junges, fetziges Blasmusikensemble aus Oberösterreich, welches
                                böhmisch-mährische
                                Tradition und Moderne verbindet.</h4>
                            <a className="btn btn-gold" href="#Mitglieder" role="button">Unsere Mitglieder</a>
                            <a className="btn btn-gold" href="#Medien" role="button">Medien</a>
                        </div>
                </div>
                <div className="carousel-item">
                    <img srcSet="
                     /img/3_blkdr8_c_scale,w_250.jpg 250w,
                     /img/3_blkdr8_c_scale,w_463.jpg 463w,
                     /img/3_blkdr8_c_scale,w_632.jpg 632w,
                     /img/3_blkdr8_c_scale,w_768.jpg 768w,
                     /img/3_blkdr8_c_scale,w_895.jpg 895w,
                     /img/3_blkdr8_c_scale,w_1022.jpg 1022w,
                     /img/3_blkdr8_c_scale,w_1147.jpg 1147w,
                     /img/3_blkdr8_c_scale,w_1260.jpg 1260w,
                     /img/3_blkdr8_c_scale,w_1368.jpg 1368w,
                     /img/3_blkdr8_c_scale,w_1380.jpg 1380w"
                         src="/img/3_blkdr8_c_scale,w_1380.jpg"
                         alt="Christoph Überlacker im Einsatz"/>
                        <div className="carousel-text d-none d-sm-block">
                            <h4> Hier findet ihr Alles über uns, bei weiteren Fragen könnt ihr uns gerne
                                kontaktieren! </h4>
                            <a className="btn btn-gold" href="#Kontakt" role="button">Kontakt</a>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#startCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#startCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="jumbotron jumbotron-fluid d-sm-none">
            <div className="container">
                <h3>Willkommen bei den Most Pressers! </h3>
                <p className="lead">Wir sind ein junges, fetziges Blasmusikensemble aus Oberösterreich,
                    welches böhmisch-mährische Tradition und Moderne verbindet. Hier findet ihr Alles über uns, bei
                    weiteren
                    Fragen könnt ihr uns gerne kontaktieren!</p>
            </div>
        </div>

        <div className="container-fluid" id="Medien">
            <div className="container">
                <h1 className="text-center">Medien</h1>
                <div className="yt-player" id="player1"/>
                <div className="yt-player" id="player2"/>
                <script src="js/youtube.js"/>
            </div>
            </div>

            <div className="container-fluid" id="Juicer">
                <div className="container">
                    <script src="https://assets.juicer.io/embed.js" type="text/javascript"/>
                    <link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css"/>
                    <ul className="juicer-feed" data-feed-id="mostpressers" data-truncate="200">
                        <h1 className="referral"><a href="https://www.juicer.io">Powered by Juicer.io</a></h1>
                    </ul>
                </div>
            </div>

            <div className="container-fluid" id="Mitglieder">

                <div className="container">
                    <h1 className="text-center">Mitglieder</h1>

                    <div id="memberAccordion">
                        <div className="card">
                            <div id="headingKlarinetten" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapseKlarinetten"
                                 aria-expanded="false" aria-controls="collapseKlarinetten">
                                <img src="/img/icons/clarinet.png" alt="Klarinette"/>
                                    <span>Klarinetten</span>
                            </div>
                            <div id="collapseKlarinetten" className="collapse" aria-labelledby="headingKlarinetten">
                                <div className="card-body">
                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Judith Durstberger ernst"
                                                     src="/img/members/durstberger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Judith Durstberger lustig"
                                                         src="/img/members/durstberger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Judith Durstberger</h3>
                                                <p>
                                                    Viele Ensembles haben keine Es Klarinette. Wir haben den Luxus sogar
                                                    zwei
                                                    zu haben, wenn auch nicht zeitgleich auf der Bühne. Unsere Blondine
                                                    sorgt
                                                    nicht nur für eine optische Aufwertung in unseren Reihen, sondern
                                                    teilt sich
                                                    mit unserem Bamsch einen sehr gefüllten Terminkalender und das
                                                    höchste
                                                    Instrument unserer Formation. Die zugezogene Wienerin ist im
                                                    normalen Leben
                                                    Lehrerin und studiert aktuell auch noch Klarinette bei niemand
                                                    geringerem
                                                    als Johann Hindler. Man hört sie auch bei Formationen wie der Vöckla
                                                    Böhmischen, dem Wiener Jeunesse Orchester und der Wiener
                                                    Akademischen
                                                    Philharmonie.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Christoph Bamschoria ernst"
                                                     src="/img/members/bamschoria1.jpg"/>
                                                    <img className="img-thumbnail" alt="Christoph Bamschoria lustig"
                                                         src="/img/members/bamschoria2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Christoph Bamschoria</h3>
                                                <p>
                                                    Unser Bamschi sorgt auf seiner Es-Klarinette für die höchsten Töne
                                                    in
                                                    unseren Reihen. Er ist nicht nur musikalisch eine große
                                                    Bereicherung,
                                                    sondern auch beinahe für jeden Spaß zu haben. Aktuell absolviert der
                                                    gebürtige Mühlviertler sein Probejahr bei den Nürnberger
                                                    Symphonikern auf
                                                    der Klarinette.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Alexander Falzberger ernst"
                                                     src="/img/members/falzberger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Alexander Falzberger lustig"
                                                         src="/img/members/falzberger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Alexander Falzberger</h3>
                                                <p>
                                                    Für die B-Klarinette ist hingegen Alexander Falzberger zuständig.
                                                    Doch nicht
                                                    nur das,
                                                    auch mit seiner Stimme ist er je nach Programm tatkräftig im Einsatz
                                                    - von
                                                    DJ Ötzi bis Earth, Wind & Fire, kommt ganz darauf an, welches
                                                    Arrangement
                                                    gerade wieder aus dem Hut gezaubert wurde.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingFluegelhoerner" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapseFluegelhoerner"
                                 aria-expanded="false" aria-controls="collapseFluegelhoerner">
                                <img src="/img/icons/fluegelhorn.png" alt="Flügelhorn"/>
                                    <span>Flügelhörner und Trompeten</span>
                            </div>
                            <div id="collapseFluegelhoerner" className="collapse" aria-labelledby="headingFluegelhoerner">
                                <div className="card-body">
                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Julian Mörzinger ernst"
                                                     src="/img/members/moerzinger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Julian Mörzinger lustig"
                                                         src="/img/members/moerzinger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Julian Mörzinger</h3>
                                                <p>
                                                    Ohne Julian würde es uns wahrscheinlich heute so in dieser Form
                                                    nicht geben.
                                                    Er ist eines der Gründungsmitglieder und hat Anfangs für das
                                                    notwendige
                                                    Notenmaterial gesorgt. Der aus dem Mühlviertel stammenden
                                                    Flügelhornist
                                                    prägt mit seinem musikalischen Know How den Klang unseres Ensembles.
                                                    Man
                                                    kennt ihn auch von Formationen wie den Blech Brass Brothers oder der
                                                    Jungendbrassband Oberösterreich. Aktuell arbeitet Julian bei der
                                                    Firma Linde
                                                    MH als Servicetechniker.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Clemens Preining ernst"
                                                     src="/img/members/preiningc1.jpg"/>
                                                    <img className="img-thumbnail" alt="Clemens Preining lustig"
                                                         src="/img/members/preiningc2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Clemens Preining</h3>
                                                <p>
                                                    Wenn Clemens gerade nicht damit beschäftigt ist ein Haus zu bauen,
                                                    teilt er
                                                    sich mit Julian das Pult am Flügelhorn. Sein kritisches Denken in
                                                    unserer
                                                    doch sehr künstlerisch angehauchten Gruppe ermöglicht es uns bei
                                                    wichtigen
                                                    Entscheidungen dann doch wirklich zum Punkt zu kommen. Der
                                                    Mühlviertler
                                                    findet neben seiner Tätigkeit als Bauleiter bei der Firma Kapl Bau
                                                    auch noch
                                                    Zeit, um bei der Jugendbrassband Oberösterreich zu spielen und sich
                                                    bei
                                                    seinem Heimatmusikverein zu engagieren.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Florian Möseneder ernst"
                                                     src="/img/members/moeseneder1.jpg"/>
                                                    <img className="img-thumbnail" alt="lustig"
                                                         src="/img/members/moeseneder2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Florian Möseneder</h3>
                                                <p>
                                                    Unser Haus- und Hofkomponist Florian hat schon so manches
                                                    musikalisches
                                                    Schmankerl für uns gezaubert, welche er auch am Flügelhorn erklingen
                                                    lässt.
                                                    Der Hausruckviertler studiert aktuell Musiktheorie mit Schwerpunkt
                                                    Blasorchesterleitung in Salzburg und ist als freischaffender
                                                    Künstler
                                                    bereits von so manch bekanntem Ensemble engagiert worden. Florian
                                                    ist
                                                    Kapellmeister in Raab (SD) und spielt bei Orchestern wie der
                                                    Stadtmusik
                                                    Salzburg mit.</p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Stefan Fehringer ernst"
                                                     src="/img/members/fehringer1.jpg"/>
                                                    <img className="img-thumbnail" alt="Stefan Fehringer lustig"
                                                         src="/img/members/fehringer2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Stefan Fehringer</h3>
                                                <p>
                                                    Musik regiert die Welt! Oder hieß es doch anders?
                                                    Stefan ist unser Finanzminister, Wirt und Medienreferent. Der
                                                    Hausruckviertler sorgt durch seine Qualifikationen für die
                                                    notwendigen
                                                    Strukturen, um nicht durch beispielsweise verschmissene Rechnungen
                                                    in
                                                    Teufels Küche zu geraten. Stefan studiert aktuell Ingenieurwesen für
                                                    Metall-
                                                    und Kunststofftechnik in Wels und teilt sich das Pult am Flügelhorn
                                                    mit
                                                    Florian. Hören kann man ihn bei den verschiedensten Musikvereinen
                                                    seiner
                                                    Region und dem Bezierksjugendorchester Vöcklabruck.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingTrompeten" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapseTrompeten"
                                 aria-expanded="false" aria-controls="collapseTrompeten">
                                <img src="/img/icons/trumpet.png" alt="Trompete"/>
                                    <span>Signaltrompeten</span>
                            </div>
                            <div id="collapseTrompeten" className="collapse" aria-labelledby="headingTrompeten">
                                <div className="card-body">

                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Alexander Großalber ernst"
                                                     src="/img/members/grossalber1.jpg"/>
                                                    <img className="img-thumbnail" alt="Alexander Großalber lustig"
                                                         src="/img/members/grossalber2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Alexander Großalber</h3>
                                                <p>
                                                    Fels in der Brandung, Hightrompeter, Stier – dies sind die
                                                    Spitznamen für
                                                    unseren Alex. Mit seiner enormen Kraft in den höchsten Lagen ist der
                                                    Mostviertler der geborene Obligat-Trompeter. Durch sein gewaltiges
                                                    musikalisches Gespür kann es auch einmal vorkommen, dass er bei so
                                                    manchem
                                                    traditionellem Stück plötzlich ganz bewusst eine dritte Stimme dazu
                                                    komponiert. Alex kennt man auch von anderen Ensembles wie zum
                                                    Beispiel
                                                    maehrBLECH. Im Berufsalltag ist Alexander Versuchstechniker in der
                                                    mechanischen Entwicklung bei Steyr Motors.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Thomas Bauer ernst"
                                                     src="/img/members/bauer1.jpg"/>
                                                    <img className="img-thumbnail" alt="Thomas Bauer lustig"
                                                         src="/img/members/bauer2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Thomas Bauer</h3>
                                                <p>Thomas teilt sich mit Alex das Pult an der Obligat-Trompete und
                                                    bereichert
                                                    unser Ensemble sowohl mit seinen technischen Fertigkeiten als auch
                                                    seinem
                                                    strahlenden Klang. Auch in anstrengenden Situationen schafft er es
                                                    durch
                                                    sein heiteres Gemüt immer alle zum Lachen zu bringen. Man kennt den
                                                    gebürtigen Hausruckviertler auch von der Jugendbrassband
                                                    Oberösterreich oder
                                                    dem Ensemble s´Hüzane Blech. Aktuell absolviert Thomas den
                                                    Studiengang
                                                    Elektrotechnik-Toningenieur in Graz.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingBariton" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapseBariton"
                                 aria-expanded="false" aria-controls="collapseBariton">
                                <img src="/img/icons/tuba.png" alt="Tenorhorn"/>
                                    <span>Bariton und Tenorhorn</span>
                            </div>
                            <div id="collapseBariton" className="collapse" aria-labelledby="headingBariton">
                                <div className="card-body">
                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Christoph Schamberger ernst"
                                                     src="/img/members/schamberger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Christoph Schamberger lustig"
                                                         src="/img/members/schamberger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Christoph Schamberger</h3>
                                                <p>Christoph ist nicht nur Kapellmeister in Pram, sondern auch unser
                                                    musikalischer Leiter. Der Hausruckviertler versucht in jeder Sekunde
                                                    unsere
                                                    musikalische Qualität zu verbessern, was bei ihm möglicherweise
                                                    schon so
                                                    manches graues Haar hervorgebracht hat. Gelegentlich mutiert er mit
                                                    seinem
                                                    Tenorhorn zum Trompeter und sucht für Normalsterbliche unerreichbare
                                                    Höhen
                                                    auf. Beruflich ist er als Sales Engineer international bei der Firma
                                                    Scheuch
                                                    Ligno tätig.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Christoph Überlacker ernst"
                                                     src="/img/members/ueberlacker1.jpg"/>
                                                    <img className="img-thumbnail" alt="Christoph Überlacker lustig"
                                                         src="/img/members/ueberlacker2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Christoph Überlacker</h3>
                                                <p>Chrisi ist der zweite Niederösterreicher in unseren Reihen und unser
                                                    neuestes
                                                    Mitglied. Der Mostviertler ist ein Blasmusiker durch und durch, was
                                                    wahrscheinlich auch irgendwie familiär bedingt ist. Mit seinem
                                                    feinen Klang
                                                    am Bariton rundet er unsere Melodieregister erst so richtig ab und
                                                    brilliert
                                                    auch bei technisch unvorstellbar schweren Stellen noch mit
                                                    Perfektion.
                                                    Christoph ist aktuell Tenorist bei der Militärmusik Oberösterreich.
                                                    Man hört
                                                    ihn weiters bei Ensembles wie dem Ybbstola Blech oder der
                                                    SaatbaunMusi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingPosaunen" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapsePosaunen"
                                 aria-expanded="false" aria-controls="collapsePosaunen">
                                <img src="/img/icons/trombone.png" alt="Posaune"/>
                                    <span>Posaunen</span>
                            </div>
                            <div id="collapsePosaunen" className="collapse" aria-labelledby="headingPosaunen">
                                <div className="card-body">

                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Paul Preining ernst"
                                                     src="/img/members/preiningp1.jpg"/>
                                                    <img className="img-thumbnail" alt="Paul Preining lustig"
                                                         src="/img/members/preiningp2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Paul Preining</h3>
                                                <p>Pauli, das Kücken unserer Partie, ist das beste Beispiel für einen
                                                    Wolf im
                                                    Schafspelz. Es gibt nichts was für ihn zu hoch, zu schnell oder zu
                                                    anstrengend ist. Egal ob Solopassage oder massive Klänge im Satz,
                                                    Paul
                                                    liefert immer 100% mit seiner Posaune ab. Seine Fähigkeiten durfte
                                                    er
                                                    bereits bei Orchestern wie dem Wiener Jeunesse Orchester, dem
                                                    Jugendsinfonieorchester Oberösterreich oder der Jugendbrassband
                                                    Oberösterreich unter Beweis stellen. Aktuell besucht der
                                                    Mühlviertler das
                                                    Linzer Musikgymnasium wo er im Vorbereitungslehrgang Posaune bei
                                                    Johann
                                                    Reiter ist.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Fabian Kronberger ernst"
                                                     src="/img/members/kronberger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Fabian Kronberger lustig"
                                                         src="/img/members/kronberger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Fabian Kronberger</h3>
                                                <p>Unser Poidl erweitert unsere Partie um einen, für einen Innviertler
                                                    typischen, immer fröhlichen und stets hilfsbereiten Charakter. Durch
                                                    seinen
                                                    kraftvollen, strahlenden Klang an der Posaune sorgt er dafür, dass
                                                    man auch
                                                    nach etlichen Metern noch jedes Bassthema spüren kann. Fabian
                                                    arbeitet
                                                    aktuell in der Arbeitsvorbereitung bei Aptiv Connection Systems
                                                    Services
                                                    Austria. Hören kann man ihn auch bei der Formation Heavy Böhm.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Lukas Stelzhammer ernst"
                                                     src="/img/members/stelzhammer1.jpg"/>
                                                    <img className="img-thumbnail" alt="Lukas Stelzhammer lustig"
                                                         src="/img/members/stelzhammer2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Lukas Stelzhammer</h3>
                                                <p>Unser Innenminister Stelzi sorgt dafür, dass immer alle beim selben
                                                    Probenort, zur selben Probenzeit am selben Probentag erscheinen. Als
                                                    wäre
                                                    das noch nicht genügend Arbeit, arrangiert der Hausruckviertler auch
                                                    immer
                                                    wieder bekannte Hits für uns. Mit seiner Bassposaune sorgt er in den
                                                    tiefen
                                                    Lagen für die spezielle Würze im Klang, welche er auch bei der
                                                    Jugendbrassband Oberösterreich, dem Jugendsinfonieorchester
                                                    Oberösterreich
                                                    und dem Ensemble s´Hüzane Blech beimischt. Aktuell studiert Lukas
                                                    Kulturtechnik und Wasserwirtschaft in Wien.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div id="headingBass" className="card-header btn btn-light collapsed"
                                 data-toggle="collapse" data-target="#collapseBass"
                                 aria-expanded="false" aria-controls="collapseBass">
                                <img src="/img/icons/drumsticks.png" alt="Drumsticks"/>
                                    <span> Tuba und Schlagwerk </span>
                            </div>
                            <div id="collapseBass" className="collapse" aria-labelledby="headingBass">
                                <div className="card-body">
                                    <div className="container-fluid">
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Martin Brummer ernst"
                                                     src="/img/members/brummer1.jpg"/>
                                                    <img className="img-thumbnail" alt="Martin Brummer lustig"
                                                         src="/img/members/brummer2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Martin Brummer</h3>
                                                <p>Unser Brummi sorgt mit seiner Tuba für das wuchtige Bassfundament
                                                    unserer
                                                    Formation. Der gelernte Schweißtechniker aus dem Hausruckviertel ist
                                                    immer
                                                    zur Stelle, wenn Hilfe benötigt wird. Bei Formationen wie der
                                                    Jugendbrassband Oberösterreich, dem SBO Ried oder auch dem
                                                    Landesjugendblasorchester Oberösterreich kann man Martins Töne zu
                                                    hören
                                                    bekommen. Aktuell leistet er seinen Präsenzdienst bei der
                                                    Militärmusik
                                                    Oberösterreich ab. </p>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                <img className="img-thumbnail" alt="Josef Söllinger ernst"
                                                     src="/img/members/soellinger1.jpg"/>
                                                    <img className="img-thumbnail" alt="Josef Söllinger lustig"
                                                         src="/img/members/soellinger2.jpg"/>
                                            </div>
                                            <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                <h3 className="permanent-black">Josef Söllinger</h3>
                                                <p>Organisator, Arrangeur, Produzent, Ansprechpartner – all diese sind
                                                    die
                                                    Funktionen, welcher unser Pepi bei uns hat. Als lebendes Metronom am
                                                    Schlagwerk sorgt er dafür, dass wir bei unseren Auftritten immer die
                                                    richtige „Time“ haben. Hören kann man den Hausruckviertler bei
                                                    Ensembles wie
                                                    der Jugendrassband Oberösterreich, dem Landesjugendblasorchester
                                                    Oberösterreich oder auch dem Hausruckkammerorchester. Aktuell
                                                    studiert er
                                                    ME/IME und IGP mit den Hauptfächern Schlagwerk und Gesang und dem
                                                    Schwerpunkt Blasorchesterleitung in Salzburg. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="Termine">
                <div className="container">
                    <h1>Termine</h1>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th colSpan="4">2020</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="clickable-row" data-href="http://www.mv-altenhof.at/">
                            <th scope="row">Freitag, 24. April</th>
                            <td>Maitanz Altenhof</td>
                            <td>4674 Altenhof</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.uni-mozarteum.at/de/events/index.php?d=19.05.2020-19.05.2020">
                            <th scope="row">Dienstag, 19. Mai</th>
                            <td>MozFest 2020</td>
                            <td>5020 Salzburg</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.blechlawine.at/portfolio/most-pressers/">
                            <th scope="row">Freitag, 22. Mai</th>
                            <td>Blechlawine</td>
                            <td>6290 Mayrhofen</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.facebook.com/events/414748426142771/">
                            <th scope="row">Freitag, 5. Juni</th>
                            <td>ZWISL - Open Air '20</td>
                            <td>4714 Meggenhofen</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://bmf2020steyregg.at/">
                            <th scope="row">Samstag, 20. Juni</th>
                            <td>Bezirksmusikfest Urfahr-Umgebung</td>
                            <td>4221 Steyregg</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.mideurope.at/">
                            <th scope="row">Donnerstag, 16. Juli</th>
                            <td>Mid Europe 2020 - Lange Nacht der Musik</td>
                            <td>8970 Schladming</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://www.mvsteinerkirchen.at/">
                            <th scope="row">Freitag, 5. September</th>
                            <td>Musikverein Steinerkirchen Jubil&auml;umsfest</td>
                            <td>4652 Steinerkirchen a.d. Traun</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.egerlaender-blasmusik.com/index.php?target=SUEDFEST&inc=MAINNAVINC&section=SEC001">
                            <th scope="row">Samstag, 12. September</th>
                            <td>7. S&uuml;dtiroler Festival der Blasmusik</td>
                            <td>IT - 39037 Mühlbach</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.egerlaender-blasmusik.com/index.php?target=SUEDFEST&inc=MAINNAVINC&section=SEC001">
                            <th scope="row">Sonntag, 13. September </th>
                            <td>7. S&uuml;dtiroler Festival der Blasmusik</td>
                            <td>IT - 39037 Mühlbach</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://leben-blasmusik-festival.at/">
                            <th scope="row">Sonntag, 27. September</th>
                            <td>leben.blasmusik.festival</td>
                            <td>4710 Grieskirchen</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table table-hover">
                        <thead>
                        <tr className="cursor-pointer collapsed" data-toggle="collapse" href="#collapseTermine2019"
                            role="button"
                            aria-expanded="false" aria-controls="collapseTermine2019">
                            <th colSpan="4">
                                <span>2019</span>
                                <i className="fa fa-chevron-down pull-right"/>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="collapse" id="collapseTermine2019">
                        <tr className="clickable-row" data-href="https://www.jamnightderblasmusik.at/ ">
                            <th scope="row">Samstag, 23. M&auml;rz</th>
                            <td>Jam Night der Blasmusik</td>
                            <td>4614 Marchtrenk</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.tmk-leonhard.at/felberpower/">
                            <th scope="row">Freitag, 14. Juni</th>
                            <td>Felberpower</td>
                            <td>3340 Waidhofen an der Ybbs</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.woodstockderblasmusik.at/de/programm/kuenstler/334/details/most-pressers.html">
                            <th scope="row">Freitag, 28. Juni</th>
                            <td>Woodstock der Blasmusik</td>
                            <td>4974 Ort im Innkreis</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://bmf-2019.at/">
                            <th scope="row">Samstag, 29. Juni</th>
                            <td>Bezirksmusikfest Grieskirchen</td>
                            <td>4680 Haag am Hausruck</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://bmf2019.at/">
                            <th scope="row">Sonntag, 7. Juli</th>
                            <td>Bezirksmusikfest Sch&auml;rding</td>
                            <td>4092 Esternberg</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.mideurope.at/">
                            <th scope="row">Donnerstag, 11. Juli</th>
                            <td>Mid Europe 2019 - Lange Nacht der Musik</td>
                            <td>8970 Schladming</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.facebook.com/4730er-Zeltrummel-1449683295286898/">
                            <th scope="row">Freitag, 6. September</th>
                            <td>4730er Zeltrummel</td>
                            <td>4730 Waizenkirchen</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.grossraming.at/Oktoberfest_2019">
                            <th scope="row">Samstag, 7. September</th>
                            <td>Oktoberfest Gro&szlig;raming</td>
                            <td>4463 Gro&szlig;raming</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="table table-hover">
                        <thead>
                        <tr className="cursor-pointer collapsed" data-toggle="collapse" href="#collapseTermine2018"
                            role="button"
                            aria-expanded="false" aria-controls="collapseTermine2018">
                            <th colSpan="4">
                                <span>2018</span>
                                <i className="fa fa-chevron-down pull-right"/>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="collapse" id="collapseTermine2018">
                        <tr className="clickable-row" data-href="https://www.facebook.com/events/580756808929002/">
                            <th scope="row">Freitag, 13. April</th>
                            <td>Maitanz</td>
                            <td>4674 Altenhof</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.facebook.com/events/1741213019505354/">
                            <th scope="row">Freitag, 11. Mai</th>
                            <td>Nacht der Blasmusik</td>
                            <td>4101 Feldkirchen an der Donau</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.facebook.com/events/1906597216319007/">
                            <th scope="row">Sonntag, 20. Mai</th>
                            <td>Casting für Bezirksmusikfest 2019</td>
                            <td>4550 Kremsm&uuml;nster</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="http://www.bad-griesbach.de/freizeit/terminkalender.html#/de/bad-griesbach/default/search/Event/view:gallery/sort:chronological/mode:next_days,7/calView:month">
                            <th scope="row">Samstag, 26. Mai</th>
                            <td>D&auml;mmerschoppen</td>
                            <td>D-94086 Bad Griesbach</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://tv.orf.at/unterwegs/stories/tourplan/">
                            <th scope="row">Dienstag, 12. Juni</th>
                            <td>Guten Morgen Österreich</td>
                            <td>4076 St.Marienkirchen a.d. Polsenz</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://www.musifest18.at/">
                            <th scope="row">Samstag, 16. Juni</th>
                            <td>Musikfest</td>
                            <td>4782 St. Florian am Inn</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="http://www.bad-griesbach.de/freizeit/terminkalender.html#/de/bad-griesbach/default/search/Event/view:gallery/sort:chronological/mode:next_days,7/calView:month">
                            <th scope="row">Sonntag, 24. Juni</th>
                            <td>Fr&uuml;hschoppen</td>
                            <td>D-94086 Bad Griesbach</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="http://www.brauhaus-zipf.at/kellerbier-donnerstag/">
                            <th scope="row">Donnerstag, 5. Juli</th>
                            <td>Kellerbier Brauerei Zipf</td>
                            <td>4871 Zipf</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="https://www.ebensee.at/49_Ebenseer_Volksfest_mit_Bierzelt_und_Gamsjagatage_">
                            <th scope="row">Sonntag, 22. Juli</th>
                            <td>Ebenseer Volksfest</td>
                            <td>4802 Ebensee</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="http://www.bad-griesbach.de/freizeit/terminkalender.html#/de/bad-griesbach/default/search/Event/view:gallery/sort:chronological/mode:next_days,7/calView:month">
                            <th scope="row">Sonntag, 5. August</th>
                            <td>Fr&uuml;hschoppen</td>
                            <td>D-94086 Bad Griesbach</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row"
                            data-href="http://www.spielraum.at/index.php?option=com_wrapper&view=wrapper&Itemid=16">
                            <th scope="row">Sonntag, 12. August</th>
                            <td>Kulturkirtag</td>
                            <td>4674 Gaspoltshofen</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        <tr className="clickable-row" data-href="#">
                            <th scope="row">Samstag, 18. August</th>
                            <td>Musiauflauf</td>
                            <td>4085 Waldkirchen am Wesen</td>
                            <td className="table-link"/>
                        </tr>
                        <tr className="clickable-row" data-href="https://www.voigasplattler.at/plattlbewerb-2018">
                            <th scope="row">Samstag, 27. Oktober</th>
                            <td>O&Ouml; Plattlerbewerb</td>
                            <td>4632 Pichl bei Wels</td>
                            <td className="table-link">Mehr</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="Kontakt">
                <h1>Kontakt</h1>
                <h5>Josef Söllinger</h5>
                <p><span className="fas fa-phone"/> +43 (0) 699 110 543 98</p>
                <p><a href="mailto:mail@mostpressers.at"> <span className="fas fa-envelope"/> mail@mostpressers.at
                </a></p>
            </div>
        </div>
);
}
