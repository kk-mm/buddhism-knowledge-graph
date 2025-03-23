import React from "react";
import KnowledgeGraph from "../components/KnowledgeGraph";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
    return (
        <div>
            <SearchBar />
            <KnowledgeGraph />
        </div>
    );
};

export default HomePage;
