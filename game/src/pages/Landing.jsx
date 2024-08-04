import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

 const Landing=()=>{
    const [showBox,setShowBox]=useState(false)
    const [firstPlayer,setFirstPlayer]=useState("Player 1");
    const [secondPlayer,setsecondPlayer]=useState("Player 2");
    useEffect(()=>{
        setTimeout(()=>setShowBox(true),2000)
    },[])
    const navigate=useNavigate()
    return <div className="flex flex-col item-center jutify-center bg-amber-200 h-full w-full">
      
        <div className="text-center">
            <div className="p-8 font-bold font-serif text-6xl">
                Tic Tac Toe
            </div>
        
       <div>
       <div className={`p-4 font-bold font-serif text-3xl flex justify-center items-center transition-opacity duration-500 ease-in-out ${showBox ? 'opacity-100 blur-none' : 'opacity-0 blur-md'}`}>

            <div className="">
                <div>
                    <img className="size-60 " src="https://play-lh.googleusercontent.com/KZTO1L6r8CzWlg2InJoU_ndRAuvYiaS-35MyYdDPeeVCPNVfM9SBY2qRGjvvADmDIR8" alt="Image" />
                </div>
                <div className="flex flex-col justify-center items-center mt-8">

                    Player 1
                    <div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-20 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>              
                    </div>
                   
                    <div className="p-4 text-center">
                        <input type="text" placeholder="Paras" className="text-center rounded-md w-48" onChange={(e)=>{
                            setFirstPlayer(e.target.value)
                        }}/>
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center mt-8">

                    Player 2
                    <div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 20" stroke-width="1.5" stroke="currentColor" class="size-20 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>              
                    </div>
                   
                    <div className="p-4 text-center">
                        <input type="text" placeholder="Paras" className="text-center rounded-md w-48" onChange={(e)=>
                            setsecondPlayer(e.target.value)
                        }/>
                    </div>

                </div>
                <div className="p-4 mt-8">
                    <button className="bg-green-400 w-48 rounded-md p-2" onClick={()=>{
                        // Use navigate is used to passed state var like this
                        navigate("/game",{state:{firstPlayer,secondPlayer}})
                    }} > Start</button>
                </div>

            </div>
        </div>
       </div>
       </div>
    </div>
}
export default Landing