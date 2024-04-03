
"use client";
import { useState } from "react";
import InputCheckbox from "./InputCheckbox";
import styles from "./component.module.css";

const Board = () => {

    const [player, setPlayer] = useState(1);
    const [clickedDiv, setClickedDiv] = useState([]);
    const [player1Move, setPlayer1Move] = useState([]);
    const [player2Move, setPlayer2Move] = useState([]);
    


    const playerData = { player, setPlayer, clickedDiv, setClickedDiv, player1Move, setPlayer1Move, player2Move, setPlayer2Move }

    const blocks = [
        { id: 1 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 2 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 3 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 4 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 5 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 6 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 7 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 8 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
        { id: 9 , player, setPlayer, clickedDiv, setClickedDiv,player1Move, setPlayer1Move, player2Move, setPlayer2Move},
    ]



    return <div className={styles.grid_container}>
        {blocks.map((item) => (<InputCheckbox key={item.id} playerData={item} />))}
    </div>

}

export default Board;