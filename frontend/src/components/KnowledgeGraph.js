import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const KnowledgeGraph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/concepts")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return <div id="graph"></div>;
};

export default KnowledgeGraph;
