import React from 'react'
import { home3Context} from './App'

export default function Home3(props) {

   const onBtn = ()=>{
        console.log('clicked')
    }
    return (
        <div>
            <p>home 3</p>
           
            <home3Context.Consumer>
                {
                    
                   x=>{
                        return(
                            <div>
                               <p>{x.name}</p> 
                               <input />
                               <button onClick={x.reset}>Reset</button>
                            </div> 
                            )
                    }
                       
                        
                }
            </home3Context.Consumer>
            
        </div>
    )
}
