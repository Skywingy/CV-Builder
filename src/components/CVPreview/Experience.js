import React from 'react';
import styled from 'styled-components';

export default function Experience({parentToChild, childtoParent}){
        return (
            <ExperienceP>
            <h3>Experience:</h3>
            <ul className='here'>
                
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
            
            </ExperienceP>
        );
};

const ExperienceP = styled.div`
background-color: #BFD834;
`;
