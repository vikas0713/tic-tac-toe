"use client";
import { useState } from "react";
import styles from "./component.module.css";


export default function InputCheckbox({ playerData }) {

    const wonCombinations = [
        [1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [4, 5, 6], [7, 8, 9]
    ]
    const { id, player, setPlayer, clickedDiv, setClickedDiv, player1Move, setPlayer1Move, player2Move, setPlayer2Move } = playerData;
    const [color, setColor] = useState(styles.default_box);

    const alreadyWon = async () => {
        let won = false;
        wonCombinations.forEach(async (subArr) => {
            if (subArr.every((item) => player1Move.includes(item) || player2Move.includes(item))) {
                console.log("Player WON!!");
                won = true;
            }
        });
        return won;
    };

    const updateGameStatus = async () => {
        setColor(prevColor => (player === 1 ? styles.blue_box : styles.red_box));
        setPlayer(prevPlayer => (prevPlayer === 1 ? 0 : 1));
        setClickedDiv([...clickedDiv, id]);
    }

    const getPlayerName = async () => {
        return player === 0 ? "Player 1" : "Player 2"
    }

    const handleChange = async () => {
        const currentPlayerMoves = player === 1 ? player2Move : player1Move;
        if (player === 0) {
            setPlayer1Move([...player1Move, id])
        } else {
            setPlayer2Move([...player2Move, id])
        }
        await updateGameStatus();
        if (! await alreadyWon(currentPlayerMoves)) {
            if (clickedDiv.includes(id)) {
                console.log("Already clicked");
            }
        } else {
            console.log("Player won");
        }

    }


    return (
        <div className={`${color} ${styles.grid_item}`} onClick={handleChange}>
        </div>
    );
}