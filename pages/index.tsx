import {GetStaticProps} from 'next'
import path from "path";
import * as fs from "fs";

// defining the images to access srcSet and src of next-optimized-images
const marchtrenk1 = require('../public/img/marchtrenk1.jpeg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')
const marchtrenk2 = require('../public/img/marchtrenk2.jpeg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')
const marchtrenk3 = require('../public/img/marchtrenk3.jpeg?resize&sizes[]=300&sizes[]=600&sizes[]=1000')

export const getStaticProps: GetStaticProps = async _context => {
    const jsonDirectory = path.join(process.cwd(), 'json')

    const membersPath = path.join(jsonDirectory, 'members.json');
    const members = JSON.parse(fs.readFileSync(membersPath, 'utf-8'));

    const eventsPath = path.join(jsonDirectory, 'events.json');
    let events = JSON.parse(fs.readFileSync(eventsPath, 'utf-8'));

    return {
        props: {
            members: members,
            events: events
        } // will be passed to the page component as props
    };
};


export default function Home(props: any) {
    //@ts-ignore
    return (
        <div>
            <div id="startCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#startCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#startCarousel" data-slide-to="1"/>
                    <li data-target="#startCarousel" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner" role="listbox" data-interval={2500}>
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            srcSet={marchtrenk1.srcSet}
                            src={marchtrenk1.src}
                            alt="Most Pressers im Einsatz"
                        />
                        <div className="carousel-text">
                            <h3>Servus!</h3>
                            <h4 className="d-none d-sm-block"> Willkommen bei den Most Pressers! </h4>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval={8000}>
                        <img
                            className="d-block w-100"
                            srcSet={marchtrenk2.srcSet}
                            src={marchtrenk2.src}
                            alt="Florian Möseneder im Einsatz"
                        />
                        <div className="carousel-text d-none d-sm-block">
                            <h4> Wir sind ein junges, fetziges Blasmusikensemble aus Oberösterreich, welches
                                böhmisch-mährische
                                Tradition und Moderne verbindet.</h4>
                            <a className="btn btn-gold" href="#Mitglieder" role="button">Unsere Mitglieder</a>
                            <a className="btn btn-gold" href="#Medien" role="button">Medien</a>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval={8000}>
                        <img
                            className="d-block w-100"
                            srcSet={marchtrenk3.srcSet}
                            src={marchtrenk3.src}
                            alt="Christoph Überlacker im Einsatz"
                        />
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
                    <h2 className="permanent color-gold text-center">Medien</h2>
                    <div className="yt-player" id="player1"/>
                    <div className="yt-player" id="player2"/>
                    <div className="yt-player" id="player3"/>
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

            <div className="parallax">
                <div className="container-fluid" id="Mitglieder">
                    <div className="container">
                        <h2 className="permanent color-gold text-center">Mitglieder</h2>
                        <div id="memberAccordion">
                            {props.members.groups.map((group: any) =>
                                <div className="card">
                                    <div id={`heading${group.id}`} className="card-header btn btn-light collapsed"
                                         data-toggle="collapse" data-target={`#collapse${group.id}`}
                                         aria-expanded="false" aria-controls={`collapse${group.id}`}>
                                        <img src={require(`../public/img/icons/${group.id}.png`)} alt={group.title}/>
                                        <span>{group.title}</span>
                                    </div>


                                    <div id={`collapse${group.id}`} className="collapse"
                                         aria-labelledby={`heading${group.id}`}>
                                        <div className="card-body">
                                            <div className="container-fluid">
                                                {group.members.map((member: any) =>
                                                    <div className="row align-items-center" key={member.id}>
                                                        <div className="member-image col-12 col-lg-3 col-md-4 col-sm-5">
                                                            <img className="img-thumbnail" alt={`${member.name} ernst`}
                                                                 src={require(`../public/img/members/${member.id}1.jpeg`)}/>
                                                            <img className="img-thumbnail" alt={`${member.name} lustig`}
                                                                 src={require(`../public/img/members/${member.id}2.jpeg`)}/>
                                                        </div>
                                                        <div className="col-12 col-lg-9 col-md-8 col-sm-7">
                                                            <h3 className="permanent color-black mt-4">{member.name}</h3>
                                                            <p>{member.description}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div id="Kontakt">
                    <div className={"textfield"}>
                        <h2 className={"permanent text-center"}>Kontakt</h2>
                        <div>Josef Söllinger</div>
                        <div><i className="fa fas fa-phone"/> +43 (0) 699 110 543 98</div>
                        <div><a href="mailto:mail@mostpressers.at"> <i
                            className="fa fas fa-envelope"/> mail@mostpressers.at
                        </a></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" id="Termine">
                <div className="container">
                    <h2 className={"permanent text-center"}>Termine</h2>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th colSpan={4}>2021</th>
                        </tr>
                        </thead>
                        <tbody>
                        {// replace each event's date with a Date object
                            props.events.events
                                .map((event: any) => (
                                    {
                                        ...event,
                                        date: new Date(parseInt(event.date.slice(0, 4)), parseInt(event.date.slice(5, 7)) - 1, parseInt(event.date.slice(8, 10)))
                                    }
                                ))
                                .sort(((e1: any, e2: any) => e1.date.toISOString().localeCompare(e2.date.toISOString())))
                                .map((event: any) =>
                                    <tr className="clickable-row" data-href={event.link}
                                        key={`${event.date}-${event.title}`}>
                                        <th scope="row">{event.date.toLocaleString('de-DE', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric'
                                        })}</th>
                                        <td>{event.title}</td>
                                        <td>{event.location}</td>
                                        <td className="table-link">Mehr</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>

                    <table className="table table-hover">
                        <thead>
                        <tr className="cursor-pointer collapsed" data-toggle="collapse"
                            data-target="#collapseTermine2020" role="button"
                            aria-expanded="false" aria-controls="collapseTermine2020">
                            <th colSpan={4}>
                                <span>2020</span>
                                <i className="fa fa-chevron-down pull-right"/>
                            </th>
                        </tr>
                        </thead>
                        <tbody className="collapse" id="collapseTermine2020">
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
                            <th scope="row">Sonntag, 13. September</th>
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
                        <tr className="cursor-pointer collapsed" data-toggle="collapse"
                            data-target="#collapseTermine2019" role="button"
                            aria-expanded="false" aria-controls="collapseTermine2019">
                            <th colSpan={4}>
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
                        <tr className="cursor-pointer collapsed" data-toggle="collapse"
                            data-target="#collapseTermine2018" role="button"
                            aria-expanded="false" aria-controls="collapseTermine2018">
                            <th colSpan={4}>
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
        </div>
    );
}
