import React from 'react'

const Square = ({ value, onSquareClick }) => {

    return (
        <button className='flex items-center justify-center p-5 border-2 w-14 h-14 font-semibold hover:bg-blue-400'
            onClick={onSquareClick}
        >{value}</button>
    )
}

export default Square
