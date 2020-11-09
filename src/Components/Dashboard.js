import React from 'react';
import Header from './Header';
import Body from './Body'
import ParticlesBg  from "particles-bg";


function Dashboard(props) {
    return (
        <div>
            <Header/>
            <ParticlesBg type="circle" bg={true} />
             <Body/>
        </div>
    );
}

export default Dashboard;






























































































































