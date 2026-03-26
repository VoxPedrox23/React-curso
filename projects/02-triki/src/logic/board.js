import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (board) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return board[a] // 'x' o 'o'
        }

    }
    return null
}

export const checkEndGame = (board) => {
    return board.every(square => square !== null)
}

