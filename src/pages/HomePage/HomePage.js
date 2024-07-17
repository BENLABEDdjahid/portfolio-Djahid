import React from 'react';
import './HomePage.css';

function  HomePage  ()  {
    return (
        <div className="home-page">
            <img className="profile-pic" src="/pictures/profile.jpg" alt="Profile" />
            <div className="intro">Bonjour !!!</div>
            <div className="skills" style={{border: '1px solid black', width: '60%',padding: '10px', margin: '10px'}}>Je suis passionné par la commande électrique et j'ai un vif intérêt pour le développement web. Mon parcours académique en commande électrique m'a permis d'acquérir des compétences solides en résolution de problèmes, en logique et en pensée analytique. Ces compétences se sont révélées extrêmement bénéfiques lors de mon immersion dans le domaine du développement web.

J'ai développé une expertise technique dans plusieurs langages de programmation, notamment JavaScript, HTML, CSS, ainsi que dans la bibliothèque React.js. J'ai travaillé sur une gamme de projets qui mettent en évidence mes compétences techniques, ma créativité et ma capacité à travailler en équipe.
            </div>
        </div>
    );
};

export default HomePage;