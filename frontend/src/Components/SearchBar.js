import React,{ useState } from "react"

const SearchBar = (props) => {
    const [term,setTerm] = useState('')

    const handleInput = (event) => {
        setTerm(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        props.onFormSubmit(term)
    }

    return(
        <div className='bg-black' >
            <form className="" onSubmit={handleFormSubmit}>
                <div className="my-6 mx-10">
                    <label className= 'text-white font-serif text-xl'>Search for your favourite video here!!</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={handleInput}
                        
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar