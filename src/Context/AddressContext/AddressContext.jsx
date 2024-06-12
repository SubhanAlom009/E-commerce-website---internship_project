import React, { createContext, useState, useContext } from 'react';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");

    return (
        <AddressContext.Provider value={{ name, setName, email, setEmail, phone, setPhone, address, setAddress, country, setCountry}}>
            {children}
        </AddressContext.Provider>
    );
};
