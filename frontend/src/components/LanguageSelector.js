import React from "react";

const LanguageSelector = ({ onChangeLanguage }) => {
    return (
        <select onChange={(e) => onChangeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="pali">Pali</option>
            <option value="my">Burmese</option>
        </select>
    );
};

export default LanguageSelector;
