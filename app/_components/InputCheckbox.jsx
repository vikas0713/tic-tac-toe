"use client";
import { useState } from "react";
import styles from "./component.module.css";


export default function InputCheckbox({ playerData }) {

    const wonCombinations = [
        [1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 6, 9], [4, 5, 6], [7, 8, 9]
    ]
    const { id, player, setPlayer, clickedDiv, setClickedDiv, player1Move, setPlayer1Move, player2Move, setPlayer2Move } = playerData;
    const [color, setColor] = useState(styles.default_box);

    const alreadyWon = async (currentPlayerMoves) => {
        let won = false;
        wonCombinations.forEach((subArr) => {
            if (subArr.every((item) => currentPlayerMoves.includes(item))) {
                console.log("Player WON!!");
                won = true;
            }
        });
        return won;
    };

    const handleChange = async () => {
        if (clickedDiv.includes(id)) {
            console.log("Already clicked");
        } else {
            if (player === 0) {
                setPlayer1Move([...player1Move, id])
            } else {
                setPlayer2Move([...player2Move, id])
            }
            const currentPlayerMoves = player === 1? player2Move: player1Move;
            if (! await alreadyWon(currentPlayerMoves)) {
                setColor(prevColor => (player === 1 ? styles.blue_box : styles.red_box));
                setPlayer(prevPlayer => (prevPlayer === 1 ? 0 : 1));
                setClickedDiv([...clickedDiv, id]);
            } else {
                console.log("Player won");
            }

        }

    }


    return (
        <div className={`${color} ${styles.grid_item}`} onClick={handleChange}>
        </div>
    );
}