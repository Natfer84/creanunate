import React from "react";
import Logo from "./Logo";
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
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png" alt='logo instagram'></img>
                        </a>
                    </div>

                    <div className="Box__Network__Facebook">
                        <a href="https://www.facebook.com/">
                            <img src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet-thumbnail.png" alt='logo facebook'></img>
                        </a>

                    </div>
                </div>
                <p className="Box__Footer__Networks_p2">
                    &#xa9 CreaNuNate
                </p>
            </div>



        </div>
    )
}