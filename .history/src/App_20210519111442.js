import React, { useReducer } from "react";

function App() {
    let [state , dispatch ] = useReducer(()=>{
        
    },{
        name:'wade',
        count:10
    })
    return (
        <div>
            <h1>
                {count} --- {name}
            </h1>
        </div>
    );
}

export default App;
