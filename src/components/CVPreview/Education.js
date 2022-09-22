import React from 'react'

export default function Education({parentToChild, childtoParent}) {
  return (
    <ul>
        {parentToChild.map((infos) => {
        return <div key={infos.id}>
            
                <p>Institution Name:{infos.instit}</p>
                <p>City:{infos.city}</p>
                <p>Degree:{infos.degree}</p>
                <p>Subject:{infos.subject}</p>
                <p>Profile Info:{infos.prof}</p>
                <p>From:{infos.from}</p>
                <p>To{infos.to}</p>
                <button
                onClick={()=> childtoParent(infos.id)}>Delete</button>
                </div>
        })}
    </ul>
);
}
