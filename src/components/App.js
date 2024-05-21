 "use client"
import { useState } from "react"

const App = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")

  return (
 <div className="bg-[#161649fb]  flex justify-center overflow-hidden items-center h-screen m-0 ">
 <div className="flex justify-between content-center w-full ">

<div className="flex relative justify-center opacity-5 items-center scale-150 ">
  <div className="absolute top-[-180px] -skew-x-12 -skew-y-12 left-[-80px] rotate-[35deg] bg-gray-400 w-[250px] h-[400px]"></div>
  <div className="absolute top-[0px] skew-x-12 skew-y-12 left-[-80px] -rotate-[35deg] bg-gray-400 w-[250px] h-[400px]"></div>
</div>

    <div className="flex flex-col">
    <h1 className=" text-slate-400 font-bold text-5xl">LOGIN</h1>
    <input 
      className="border text-white bg-[#1A2162] border-gray-600 pt-2 pb-2 pl-5 mt-5"
      placeholder="Username"
      type="text" 
      value={userName} 
      onChange={(event) => setUserName(event.target.value)}
      />       
    <input 
      className="border text-white bg-[#1A2162] border-gray-600 pl-5 pt-2 pb-2 mt-5"
      placeholder="Password"
      type="password" 
      value={password} 
      onChange={(event) => setPassword(event.target.value)}
      />      
      <button className="text-[#FFFFFF] text-lg border border-[#161649fb] mt-5 pl-12 pr-12 p-2 hover:border-blue-900 hover:text-blue-950 hover:bg-gray-400">LOGIN</button>
    </div>
 
<div className="flex justify-center items-center   relative scale-150 opacity-5 ">
  <div className="absolute top-[0px] right-[-80px]  rotate-[35deg] -skew-y-12 -skew-x-12 bg-gray-400 w-[250px] h-[400px]"></div>
  <div className="absolute top-[-180px] right-[-80px] -rotate-[35deg] skew-y-12 skew-x-12 bg-gray-400 w-[250px] h-[400px]"></div>
</div>
      </div>

</div>
  )
}
export default App



