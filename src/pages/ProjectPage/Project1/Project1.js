import React from 'react';
import './Project1.css';
import { Link } from 'react-router-dom';

function Project1() {
    return (
        // Début du JSX (JavaScript XML) qui décrit l'interface utilisateur de ce composant.
        <div className="project">
            <img src="/pictures/project1.jpg" alt="Projet1" className="project-image" />
            <h2 className="project-title">Projet 1: Jeux TicTacTao</h2>
            <p className="project-description">Le jeu TicTacToe, également connu sous le nom de Morpion, est un jeu de société informel pour deux joueurs, facilement jouable sur une feuille de papier. Il se joue sur une grille de 3x3, où les joueurs prennent à tour de rôle pour placer un marqueur (généralement une croix ou un cercle) dans une cellule vide. Le but du jeu est d'être le premier à aligner trois de ses marqueurs, que ce soit horizontalement, verticalement ou en diagonale.

Du point de vue du développement avec React, le jeu TicTacToe est un excellent exercice pour s'entraîner à utiliser l'état (state) et les propriétés (props) de React, ainsi que pour comprendre le concept de "lifting state up". Ce projet comporte plusieurs composants interactifs, y compris les cellules individuelles de la grille de jeu, ainsi qu'un tableau de bord pour afficher le joueur actuel et le gagnant du jeu. </p>
            <ul className="project-tech-list">
                Liste des technologies utilisées:
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>

            </ul>
            <Link to="https://github.com/BENLABEDdjahid/Jeux-TicTacTao" className="project-link">Code Source (Lien vers le github)</Link>
        </div>
    );
}

export default Project1;
