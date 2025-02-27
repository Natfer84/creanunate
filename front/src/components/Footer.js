import React from "react";
import Logo from "./Logo";
//import insta2 from "../public/images/insta2.jpg";
//import face from "../public/images/face.jpg";
import '../styles/Footer.css';



export default function Footer() {



    return (
        <div className="Box__Footer">
            <div className="Box_Footer__Logo">
                <Logo />
            </div>
            <div className="Box__Footer__Networks">

                <div className="Box__Footer__Networks_Contact">
                    <p className="Box__Footer__Networks_p1">Contacto:</p>
                    <a href="https://workspace.google.com/intl/es/gmail/">creanunate@gmail.com</a>
                </div>

                <div className="Box__Network">
                    <div className="Box__Network__Insta">

                        <a href="https://www.instagram.com/">
                            <img src="images/intagood.jpg" alt='logo instagram'></img>
                        </a>
                    </div>

                    <div className="Box__Network__Facebook">
                        <a href="https://www.facebook.com/">
                            <img src="/images/face.jpg" alt='logo facebook'></img>
                        </a>

                    </div>
                </div>
                <p className="Box__Footer__Networks_p2">
                    © CreaNuNate
                </p>
            </div>



        </div>
    )
}