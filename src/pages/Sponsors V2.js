import React from 'react'

import '../_styles/sponsors.css'
import Header from '../_templates/Header'
import Footer from '../_templates/Footer'

// assets
import sponsorImage from '../assets/sponsor.png'

import DNVGL from '../assets/sponsors/colored/DNV.png'
import NTNU from '../assets/sponsors/colored/NTNU.png'
import Ouster from '../assets/sponsors/colored/Ouster.png'
import AlvaIndustries from '../assets/sponsors/colored/Alva_industries.svg'
import Enova from '../assets/sponsors/colored/Enova.svg'
import Eker from '../assets/sponsors/colored/Eker.svg'
import Zolve from '../assets/sponsors/colored/Zolve.png'
import LindbergLund from '../assets/sponsors/colored/Lindberg_lund.png'
import SKF from '../assets/sponsors/colored/SKF.png'
import Altair from '../assets/sponsors/colored/Altair.svg'
import HPC from '../assets/sponsors/colored/HPC.png'
import TrondheimStaal from '../assets/sponsors/colored/Trondheim_staal.png'
import IDE from '../assets/sponsors/IDEhouse.png'
import SciDart from '../assets/sponsors/scichart.png'
import FourTest from '../assets/sponsors/colored/4test.png'

export default function Sponsors() {
    return (
        <>
            <Header />
            <section>
                <div className="grid">
                    <div className="two-thirds">
                        <h1 className="heavy">Sponsors</h1>
                        <p>As a student organization we depend on the support from our sponsors. They support us both financially and by supporting us with components and services. We are therefore grateful for their contribution into the project.</p>
                        <img alt="hands formed as a heart" src={sponsorImage} width="64px" />
                    </div>
                </div>
            </section>
            <section style={{background: '#f8f8f8'}} >
                <div className="grid">
                    <h2>Main sponsor</h2>
                    <div className="sponsor-main two-thirds">
                        <img alt="DNV GL" src={DNVGL} />
                        <p>We are the independent expert in risk management and quality assurance. Driven by our purpose, to safeguard life, property and the environment, we empower our customers and their stakeholders with facts and reliable insights so that critical decisions can be made with confidence. As a trusted voice for many of the world’s most successful organizations, we use our knowledge to advance safety and performance, set industry benchmarks, and inspire and invent solutions to tackle global transformations.</p>
                        <a target="_blank" rel="noopener noreferrer" className="button flat suggested-action" href="https://www.dnv.com/" >Visit</a>
                    </div>
                </div>
            </section>
            <section>
                <div className="grid">
                    <h2>Platinum sponsors</h2>
                    <div className="sponsor third">
                        <img alt="NTNU" src={NTNU}  />
                        <p>NTNU is a university with an international focus, with headquarters in Trondheim and campuses in Ålesund and Gjøvik. NTNU has a main profile in science and technology<br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.ntnu.edu/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="Ouster" src={Ouster}  />
                        <p>Ouster is a team of software, hardware, business, and manufacturing experts building the next generation of high-resolution lidar sensors.<br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://ouster.com/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="Alva industries" src={AlvaIndustries} />
                        <p>Alva was founded to meet the growing global energy demand with renewable technologies. We develop electric generators for production of clean energy and electric motors to convert this energy into motion.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://alvaindustries.com/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="Enova" src={Enova} />
                        <p>Enova arbeider for Norges omstilling til lavutslippssamfunnet. Omstillingen krever at vi kutter utslipp av klimagasser, ivaretar forsyningssikkerheten og skaper nye verdier. Derfor jobber Enova for å få de gode løsningene ut i markedet og bidra til nye energi- og klimateknologier.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.enova.no/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="Eker" src={Eker}  />
                        <p>The EKER team consists of highly skilled personnel from a wide range of disciplines. Industrial designers, art directors, graphic designers, engineers, tool- and mechanical technicians, economists and project leaders all work hand in hand to create the next high leveled product.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://ekerdesign.com/" className="button flat">Visit</a>
                    </div>
                </div>
                <div className="grid">
                    <h2>Gold sponsors</h2>
                    <div className="sponsor third">
                        <img alt="Zolve" src={Zolve} />
                        <p>Zolve AS har utspring fra teknologimiljøet i Trondheim, og tilbyr konsulenttjenester til et vidt spekter av bedrifter. Vi er spesialister innen elektronikk, FPGA og software, med til sammen over 30 års erfaring som blant annet utviklingsingeniører og prosjektledere.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://zolve.no/" className="button flat">Visit</a>
                    </div> 
                </div>
                <div className="grid" >
                    <h2>Silver sponsors</h2>
                    <div className="sponsor third" >
                        <img alt="4test" src={FourTest} />
                        <p>4Test is a leader in measurement solutions and expertise, building on the foundation of Keysight Technologies measurement equipment and technology. Our Mission is to provide engineers, Scientists and technicians the best-fit measurement solutions to help them to measure, test and validate the performance of their electronic, wireless and photonic devices.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.4test.no" className="button flat">Visit</a>
                    </div>
                </div>
                <div className="grid">
                    <h2>Bronze sponsors</h2>
                    <div className="sponsor third">
                        <img alt="Lindberg & Lund" src={LindbergLund} />
                        <p>Lindberg & Lund AS importerer og distribuerer konstruksjonslim, smøremidler, slippmidler, komposittmaterialer, innstøpingsmasser og hjelpestoffer for elektronikkindustrien.<br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://lindberg-lund.no/" className="button flat">Visit</a>
                    </div> 
                    <div className="sponsor third">
                        <img alt="SKF" src={SKF} />
                        <p>Our expertise is built on the development, design and manufacture of bearings, seals and lubrication systems.<br/><br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.skf.com/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="Altair" src={Altair} />
                        <p>Solving your toughest challenges. Helping the innovators innovate, drive better decisions, and turning today’s problems into tomorrow’s opportunities.<br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.altair.com/" className="button flat">Visit</a>
                    </div>
                </div>
                <div className="grid">
                    <h2>Other sponsors</h2>
                    <div className="sponsor third">
                        <img alt="HPC" src={HPC} />
                        <p>Vi utfører tjenester for industri, næring og private kunder. Vi ønsker å være med i utviklingen, og vi ønsker å gjøre din produksjon mulig. Ved å bruke oss vil du se at dere sparer tid og penger, og øker kvaliteten.</p>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.hpcomposites.no/" className="button flat">Visit</a>
                    </div> 
                    <div className="sponsor third">
                        <img alt="Trondheim stål" src={TrondheimStaal} />
                        <p>Trondheim Stål ble stiftet i 1989 og er en stålentreprenør med hovedtyngde i stålkonstruksjoner for bygg, anlegg, smelteverk og prosessindustri.<br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.trondheimstaal.com/" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="IDE House" src={IDE} />
                        <p>IDÉ House of Brands leverer profilprodukter, klær, gaver, merkevarer og kampanjeprodukter til bedriftsmarkedet.<br/><br/><br/></p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.idegroup.no" className="button flat">Visit</a>
                    </div>
                    <div className="sponsor third">
                        <img alt="SciChart" src={SciDart} />
                        <p>SciChart is a cross-platform WPF (desktop), iOS, macOS, Android, Xamarin, and Web charting library. Used by customers across the world in sectors ranging from oil and gas and engineering, financial and trading to tech medical and research and more. The product is leading in its niche, because there is no competitor matching the performance of the drawing the data.</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.scichart.com/" className="button flat">Visit</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}