import React from "react";

export var SearchBar = ({handleSubmit, handleChange, value}) => {
  return (
    <form className="col s12" onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="input-field col s12">
          <input type="text" class="col s12 9m" placeholder="example: Star Wars" value={value} onChange={(e) => handleChange(e.target.value)} />
          <div class="center-align">
            <button className="btn waves-effect waves-light center-align" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}