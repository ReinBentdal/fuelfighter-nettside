import React from 'react';
import '../_styles/footer.css'

export default function Footer() {
    return (
        <footer>
            <div>
                <p>© { (new Date().getFullYear())} DNV GL Fuel Fighter</p>
            </div>
            <ul>
                <li><a href="mailto:leder@fuelfighter.no" >Contact</a></li>
            </ul>
        </footer>
    )
}