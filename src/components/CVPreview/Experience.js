import React from 'react'



export default function Experience({parentToChild, childtoParent}){
        return (
            <ul>
                {parentToChild.map((infos) => {
                return <div key={infos.infos.id}>
                    
                        <p>Company:{infos.infos.company}</p>
                        <p>Position:{infos.infos.position}</p>
                        <p>From:{infos.infos.from}</p>
                        <p>To:{infos.infos.to}</p>
                        <p>Description:{infos.infos.description}</p>
                        <button
                        onClick={()=> childtoParent(infos.infos.id)}>Delete</button>
                        </div>
                })}
            </ul>
        );
    
};
