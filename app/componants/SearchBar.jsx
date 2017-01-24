var SearchBar = ({handleSubmit, handleChange, value}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>
  )
}

window.SearchBar = SearchBar;