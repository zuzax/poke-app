import React from "react";

const SearchBar = ({handleChange, handleSubmit, handleFiltering, inputVal}) => {

    return (
        <>
            <form onSubmit={handleSubmit}  className="my-2 d-flex justify-content-center">
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">
                            Find Pokemon
                        </label>
                    </div>
                    <div className="col-auto">
                        <input
                            className="form-control"
                            value={inputVal}
                            type="text"
                            onChange={handleChange}
                            placeholder="Enter pokemon name"
                        />
                    </div>
                    <div className="col-auto">  
                        <button 
                            className="btn btn-warning" 
                            onClick={handleFiltering}
                            type="submit">
                                Search
                        </button> 
                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchBar;