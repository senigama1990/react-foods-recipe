import React, { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('')

  function handleKey(e) {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  function handleSubmit() {
    cb(value)
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input type="search"
          id="input-field"
          placeholder='Search...'
          value={value}
          onKeyDown={handleKey}
          onChange={handleChange}
        />

        <button className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: 0
          }}        
          onClick={handleSubmit}
        >Search</button>
      </div>
    </div>
  )
}

export default Search;
