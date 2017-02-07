import React from "react";

export var SearchBar = ({handleSubmit, handleChange, value}) => {
  return (
    <form className="col s12" onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" placeholder="example: Star Wars" value={value} onChange={(e) => handleChange(e.target.value)} />
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    </form>
  )
}