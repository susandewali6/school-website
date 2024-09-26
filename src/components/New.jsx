import React, { useState } from 'react';

export default function New() {
    const [name, setName] = useState(false);
    const abc = () => {
        setName(!name);
    };

    return (
        <div>
            <div onClick={abc}>
                {name ? <p> heheh</p> : <p>hahah</p>}
            </div>
            <div>
                {name && (


                    <div>

                        {items.map((item, index) => (
                            <div key={index}>
                                <p>{item.Name}</p>
                                <p>{item.Age}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}



const items = [{
    Name: "Susan",
    Age: 13
}];
