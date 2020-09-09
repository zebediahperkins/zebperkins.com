import React from 'react';

export default function About() {
    return(
        <div>
            <h1>Hey, I'm Zebediah Perkins</h1>
            <h4>Full Stack Software Engineer/Student</h4>

            <h2>Education</h2>
            <p>I'm a third year student at the University of Massachusetts Amherst.</p>

            <h2>Skills</h2>
            <p>I have a solid understanding of many things computer science related. However, I am most proficient in the following:</p>
            <ul className='circleList'>
                <li>MERN Stack (Mongo, Express, React, Node)</li>
                <li>Javascript/Typescript/npm</li>
                <li>.NET Framework</li>
                <li>SpringBoot</li>
                <li>Java/Kotlin/Swift</li>
            </ul>

            <h2>Work Experience</h2>
            <p>To this point, I have no professional work experience in this field. You can find projects I've worked on in the 'Portfolio' section of this website. I am actively searching for an internship for the summer of 2021.</p>
        </div>
    );
}
