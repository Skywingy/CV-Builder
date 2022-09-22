import React from 'react'

export default function Experience({parentToChild, childtoParent}){
        return (
            <ul>
                {parentToChild.map((infos) => {
                return <div key={infos.id}>
                    
                        <p>Company:{infos.company}</p>
                        <p>Position:{infos.position}</p>
                        <p>From:{infos.from}</p>
                        <p>To:{infos.to}</p>
                        <p>Description:{infos.description}</p>
                        <button
                        onClick={()=> childtoParent(infos.id)}>Delete</button>
                        </div>
                })}
            </ul>
        );
    
};
