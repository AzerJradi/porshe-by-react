import React from 'react'
import '../CSS/LastPart.css'
function LastPart() {
  return (
    <div className='last-part'>
    <p className="one">Region / Current Language</p>
    <img src="https://i.pinimg.com/564x/b8/7e/ee/b87eeee30014d72be618b915ddae00eb.jpg" alt="" className="france-flag" />
    <p className="two">France French</p>
    <a href="https://www.porsche.com/"><button className='to-change'>To change</button></a>


    <div className="BigDivOne">
        <div className="divNum1">
        <p className="LastPart-title">Newsletter</p>
        <p className="LastPart-des">Subscribe to the Newsletter to receive exclu- <br /> sively the latest news from the brand.</p>
        <a href="https://www.porsche.com/france/dialog/newsletter/"><button className='Subscribe'>Subscribe</button></a>
        <p className="LastPart-title">Business</p>
        <a href="https://www.porsche.com/france/aboutporsche/overview/"><p className="LastPart-sous-titre">Porsche in brief</p></a>
        <a href="https://www.porsche.com/france/aboutporsche/service/"><p className="LastPart-sous-titre">The Porsche Group</p></a>
        <a href="https://www.porsche.com/france/dialog/contactandinformation/"><p className="LastPart-sous-titre">Contact & Information</p></a>
        </div>
        <div className="divNum2">
        <p className="LastPart-title">Contact</p>
        <p className="LastPart-des">Do you have any questions ?</p>
        <a href="https://www.porsche.com/france/dialog/contactandinformation/"><button className='Subscribe' id='Subscribe'>Contact from</button></a>
        <a href="https://www.porsche.com/france/aboutporsche/responsibility/"><p className="LastPart-sous-titre">Responsibility</p></a>
        <a href="https://www.porsche.com/france/aboutporsche/pressreleases/"><p className="LastPart-sous-titre">Newsroom and Press Releases</p></a>
        </div>
        <div className="divNum3">
        <p className="LastPart-title">Social networks</p>
        <p className="LastPart-des">Contact us via social networks.</p>
        <div className="social">
            <a href="https://www.facebook.com/porsche/"><button className="facebook">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-facebook.min.0c2e020d0b61d37e76e6bab67e4d149e.svg" alt="" className="fcb" />
                </button></a>
            <a href="https://www.instagram.com/porsche/"><button className="instagram">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-instagram.min.2f8c578e2472dc13b2f0ec8d1b936442.svg" alt="" className="insta" />
                </button></a>
            <a href="https://www.pinterest.com/porsche/"><button className="Pintrest">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-pinterest.min.101284bac1d7cf468719fccf416069df.svg" alt="pintrest" />
                </button></a>
            <a href="https://www.youtube.com/user/Porsche"><button className="Youtube">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-youtube.min.59c939904cbec0c7793289eb5e68cb99.svg" alt="" className="youtube" />
                </button></a>
            <a href="https://twitter.com/porsche"><button className="Twitter">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-twitter.min.a6a1098cf290c07051a53f14a4efe1b0.svg" alt="" className="X" />
                </button></a>
            <a href="https://www.linkedin.com/company/porsche-ag"><button className="LinkdLin">
                <img src="https://cdn.ui.porsche.com/porsche-design-system/icons/logo-linkedin.min.e4848fd4b74404e504fd1a4d5a25b960.svg" alt="" className="linkdlin" />
                </button></a>
        </div>
            <a href="https://www.porsche.com/france/dialog/contactandinformation/"><p className='LastPart-sous-titre'> Jobs & Career </p></a>
            <a href="https://www.porsche.com/france/dialog/contactandinformation/"><p className='LastPart-sous-titre'>Porsche Partner Forum</p></a>
        </div>
    </div>

    <div className="BigDivTwo">
    <p className="porsheC">© 2024 Porsche in France.</p>
    <div className="Big-href">
        <a href="https://www.porsche.com/france/legal-notice/" className="DivTwoHref">Legal Notice.</a>
        <a href="https://www.porsche.com/france/privacy-policy/" className="DivTwoHref">Privacy Policy.</a>
        <a href="https://www.porsche.com/france/cookies/" className="DivTwoHref">Cookie policy.</a>
        <a href="https://www.porsche.com/france/fuel-consumption/" className="DivTwoHref">Consumption / Emissions.</a>
        <a href="https://www.porsche.com/licenses/" className="DivTwoHref">Open Source Software Notice.</a>
        <a href="https://www.porsche.com/france/reach-regulation/" className="DivTwoHref">List of endocrine disruptors.</a>
        <a href="https://www.porsche.com/france/aboutporsche/overview/compliance/whistleblower-system/" className="DivTwoHref">The reporting system.</a>
        <a href="https://www.porsche.com/france/environmental-characteristics/" className="DivTwoHref">Environmental characteristics.</a>
    </div>
    <p className="BigDivTwo-text">
    * Values ​​determined according to the mandatory legal measurement method. Since September 1, 2018, vehicles have been approved according to the WLTP standard (Worldwide Harmonized Light Vehicles Test Procedure). To the extent that the WLTP values ​​are given in the form of ranges of values, they do not relate to a single vehicle and are not an integral part of the offer: their sole objective is to allow comparisons between the different types of vehicles. Certain options and equipment may vary certain vehicle parameters such as weight, rolling resistance or air resistance and, in addition to weather conditions, traffic conditions or driving style, may vary consumption. fuel, electricity, CO₂ emissions and vehicle performance.
    </p>

    <p className="BigDiv-Txt-1">FOR SHORT TRIPS, PREFER WALKING OR CYCLING</p>
    <p className="BigDiv-Txt-1">THINK ABOUT CARPARTING</p>
    <p className="BigDiv-Txt-1">IN DAILY DAY, TAKE PUBLIC TRANSPORT</p>
    <p className="BigDiv-Txt-2">#MoveLessPollute</p>
    <img src="./porsheWriting-removebg-preview.png" alt="" className="Porshe-logo-in-white" />



    </div>


    </div>
  )
}

export default LastPart
