import React from 'react'
import styled from 'styled-components';


export default function Education({parentToChild, childtoParent}) {
  return (
  <EducationP>
    <h3>Education:</h3>
    <ul className='here'>
        {parentToChild.map((infos) => {
        return <div key={infos.id}>
                <title>Education</title>
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
    </EducationP>
); 
}

const EducationP = styled.div`
background-color: #BFD834;
`;