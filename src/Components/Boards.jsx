import React from 'react';
import Square from './Square';
import CalculateWinner from '../Utility/CalculateWinner';

const Boards = ({ xIsNext, squares, onPlay }) => {
    const handleClick = (i) => {
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquare = squares.slice();
        console.log(nextSquare);
        if (xIsNext) {
            nextSquare[i] = "X";
        }
        else {
            nextSquare[i] = "0";
        }
        onPlay(nextSquare);
    }

    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next Player: " + (xIsNext ? "X" : "0");
    }

    
    return (
        <>
            <h2 className='mb-2 text-lg'>{status}</h2>
            <div className='flex'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='flex'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='flex'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Boards;
