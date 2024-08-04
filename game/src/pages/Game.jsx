import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Game = () => {
    const location = useLocation();
    const { firstPlayer, secondPlayer } = location.state || { firstPlayer: "Player 1", secondPlayer: "Player 2" };
    const [draw,setDraw]=useState(false)
    const [turn, setTurn] = useState(true); // true for "X", false for "O"
    const initializeArray = () => Array(3).fill(null).map(() => Array(3).fill(""));
    const [matrix, setMatrix] = useState(initializeArray);
    const [win,setWin]=useState("")
    const [won,setWon]=useState(false)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        if(firstPlayer && secondPlayer)
        {
            setLoading(false)
        }
    },[firstPlayer,secondPlayer])
    // Function to update a specific cell in the array
    const updateCell = (rowIndex, colIndex) => {
        if (matrix[rowIndex][colIndex] === "") {
            // Create a new matrix to avoid mutating the existing state directly
            const newMatrix = matrix.map((row, rIndex) =>
                row.map((cell, cIndex) =>
                    rIndex === rowIndex && cIndex === colIndex
                        ? turn
                            ? "X"
                            : "O"
                        : cell
                )
            );
            setMatrix(newMatrix);
            const won=Winning(newMatrix)
            if(!won)
            {

                Draw(newMatrix)
            }
            else{
                return
            }
            setTurn(!turn); // Switch turn
        }
    };
    const Draw=(matrix)=>{
        const isDraw=matrix.flat().every(cell=>cell!=="")
        if(isDraw)
        {
            console.log("Match is drawn")
            setDraw(true);
        }
    }
    const Winning = (matrix) => {
        const checkWin = (a, b, c) => {
            return a === b && b === c && a !== ""; // Check if three cells are the same and not empty
        };
    
        const winner = turn ? firstPlayer : secondPlayer;
    
        if (
            checkWin(matrix[0][0], matrix[1][1], matrix[2][2]) ||  // Diagonal
            checkWin(matrix[0][2], matrix[1][1], matrix[2][0]) ||  // Diagonal
            checkWin(matrix[0][0], matrix[0][1], matrix[0][2]) ||  // Row 1
            checkWin(matrix[1][0], matrix[1][1], matrix[1][2]) ||  // Row 2
            checkWin(matrix[2][0], matrix[2][1], matrix[2][2]) ||  // Row 3
            checkWin(matrix[0][0], matrix[1][0], matrix[2][0]) ||  // Column 1
            checkWin(matrix[0][1], matrix[1][1], matrix[2][1]) ||  // Column 2
            checkWin(matrix[0][2], matrix[1][2], matrix[2][2])     // Column 3
        ) {
            console.log(`${winner} wins!`);
            setWin(winner)
            setWon(true)
            return true;
        }
        return false
    };
    if (loading){
        return (
            <div className="flex justify-center item-center h-screen">
                <div className="text-2xl font-bold">
                    Loading...
                </div>
            </div>
        )
    }
    return (
        <div className=" relative bg-orange-300 h-full">
            <div className="flex justify-center pt-12">
                <div className="flex ">
                    {
                        !draw && !won && (
                            <>
                            <div className="text-center">
                                <div className={`border-2 flex items-center justify-center font-serif font-bold text-2xl rounded-md w-32 h-20 ${turn ? 'bg-green-400' :'bg-orange-300'}`}>
                                {firstPlayer}
                                </div>
                            </div>
                            <div className="p-5 text-2xl">
                                VS
                            </div>
                            <div className={`border-2 flex items-center justify-center font-serif font-bold text-2xl rounded-md w-32 h-20 ${!turn ? 'bg-green-400' :'bg-orange-300'}`}>
                                {secondPlayer}
                            </div>
                            </>
                        )
                    }
                    
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-blue-400 p-4 rounded-lg shadow-lg">
                    <div className="grid grid-rows-3 gap-2">
                        {/* Outer map function is use to iterate over the rows It generate div for each row */}
                        {matrix.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex flex-row space-x-2">
                                {/* Iterate over cell within a row */}
                                {row.map((cell, colIndex) => (
                                    <div
                                        key={colIndex}
                                        className="border-2 rounded-md w-24 text-5xl h-24 flex items-center justify-center cursor-pointer"
                                        onClick={() => updateCell(rowIndex, colIndex)}
                                    >
                                        {cell}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            {draw && (
                <div className="absolute inset-0 flex item-center  justify-center bg-white bg-opacity-60">
                    <div>
                        <div className="border-2 border-transparent w-96 h-56 ">
                            <div className="text-center p-16 text-2xl">
                             Draw!!!
                            </div>
                            <div className="flex item-center justify-center pb-2 ">

                            <button className="w-28 h-12 rounded-md bg-green-400 item-center mb-3" onClick={()=>window.location.reload()}>Play Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {win && (
                <div className="absolute inset-0 flex item-center  justify-center bg-white bg-opacity-60">
                    <div>
                        <div className="border-2 border-transparent w-96 h-56 ">
                            <div className="text-center p-12 ml-6 text-4xl">
                             {win} wins !!
                            </div>
                            <div className="flex item-center justify-center pb-2 ">

                            <button className="w-28 h-12 rounded-md bg-green-400 item-center mb-3" onClick={()=>window.location.reload()}>Play Again</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};
