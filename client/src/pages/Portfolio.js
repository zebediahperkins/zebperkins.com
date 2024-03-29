import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
    return(
        <div>
            <h1>Projects I've worked on:</h1>
            <Project name='zebperkins.com' imgLink='https://i.imgur.com/drwjAtm.png' redirectLink='https://github.com/zebediahperkins/zebperkins.com' description='My portfolio/informational website' />
            <Project name='Most Trees' imgLink='https://i.imgur.com/DbfFgSJ.png' redirectLink='https://github.com/zebediahperkins/most-trees' description='Small js library for implementing tree structures' />
            <Project name='Bbuu20 Recoil Handler' imgLink='https://i.imgur.com/nQgDIpZ.png' redirectLink='https://github.com/zebediahperkins/bbuu20-s-recoil-handler' description='An anti-recoil "script" I made for the video game Rust' />
            <Project name='bProgressive Miner' imgLink='https://i.imgur.com/HU5Q1A2.png' redirectLink='https://github.com/zebediahperkins/bProgressive-Miner' description='OSRS mining AI, utilizes the Tribot API' />
        </div>
    );
}
