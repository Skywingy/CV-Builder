import React from 'react'

const ExperienceItem = (props) => {
    const { expItems } = props;

    return (
        <div>
            {expItems.map((expItem) => {
                return <h1 key={expItem.id}>{expItem.text}</h1>;
            })}
        </div>
    );
};

export default ExperienceItem;
