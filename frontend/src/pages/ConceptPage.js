import React from "react";

const ConceptPage = ({ concept }) => {
    return (
        <div>
            <h1>{concept.name}</h1>
            <p>{concept.description}</p>
        </div>
    );
};

export default ConceptPage;
