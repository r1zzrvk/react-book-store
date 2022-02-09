import React from 'react';
import s from "../../styles/Select/MySelect.module.css"

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={s.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}>
      <option
        disabled
        selected>{defaultValue}</option>
      {options.map(option => {
        return (
          <option
            key={option.value}
            value={option.value}>
            {option.name}
          </option>
        )
      })}
    </select>
  )
}

export default MySelect;