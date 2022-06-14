import React,{useState} from 'react'

export default function ControlledComponent() {
    const [name, setName] = useState("");
    const [essay, setEssay] = useState("PLEAVE WRITE AN ESSAY");
    const [flavor, setFlavor] = useState("coconut");

    const handleChange = (event) => {
        const name = event.target.name;

        //const type = event.target.type;

        if(name === 'name'){
            setName(event.target.value);
        }
        if(name === 'essay'){
            setEssay(event.target.value);
        }
        if(name === 'flavor'){
            setFlavor(event.target.value);
        }


        // if(type === 'number'){
        //     setName(event.target.value);
        // }
        // if(type === 'text'){
        //     setEssay(event.target.value);
        // }
        // if(type === 'select'){
        //     setFlavor(event.target.value);
        // }
    }
    
    const handleSubmit = (event) => {
        alert(`name : ${name}, essay:${essay}, flavor : ${flavor}`);
        event.preventDefault();
    }

    // const handleEssayChange = (event) => {
    //     setEssay(event.target.value);
    // }

    // const handleFlavorChange = (event) => {
    //     setFlavor(event.target.value);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="number" name= "name" value={name} onChange={handleChange} />
            </label>
    
            <label>
                ESSAY:
                <textarea name="essay" alue={essay} onChange={handleChange} />
            </label>
            <label>
                Pick your favorite flavor:
                <select value={flavor} name="flavor" onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
    
}
