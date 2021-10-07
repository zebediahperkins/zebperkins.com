import React from 'react';

export default function About() {
    return(
        <div>
            <h1>Hey, I'm 
                <a href='https://docs.google.com/document/d/e/2PACX-1vTa8C5vDFhm4Urr7vjvXS1y0CBxjCq7DlqGjfYn9xWfdcY1qwvyQCympdGlHQJ66R98rZ_UXRijxwt5/pub'>
                    Zebediah Perkins
                </a>
            </h1>

            <h2>Education</h2>
            <p>I'm a third year student at the University of Massachusetts Amherst.</p>

            <h2>Skills</h2>
            <p>Projects I've worked on have used the following:</p>
            <ul className='circleList'>
                <li>React and Node.js/Javascript</li>
                <li>.NET Framework</li>
                <li>Python</li>
                <li>Java</li>
            </ul>

            <h2>Work Experience</h2>
            <p>You can find projects I've worked on in the 'Portfolio' section of this website. I am actively seeking an internship.</p>
        </div>
    );
}
