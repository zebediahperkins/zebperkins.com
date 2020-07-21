import React from 'react';

export default function Footer() {
    return(
        <footer>
            <ul className='footer-links'>
                <li><a href='https://github.com/zebediahperkins'><img src='https://i.imgur.com/fKBRIaD.png' alt='github' /></a></li>
                <li><a href='https://www.linkedin.com/in/zebediah-perkins-a6772a1b1/'><img src='https://i.imgur.com/zCVhD7r.png' alt='linkedin' /></a></li>
                <li><a href='https://www.npmjs.com/~zebediahperkins'><img src='https://i.imgur.com/Sr9lOAF.png' alt='npmjs' /></a></li>
                <li><a href='https://stackoverflow.com/users/13578873/zebediah-perkins?tab=profile'><img src='https://i.imgur.com/6wNKc00.png' alt='stackoverflow' /></a></li>
            </ul>
            <p>&copy; 2020 Zebediah Perkins</p>
        </footer>
    );
}