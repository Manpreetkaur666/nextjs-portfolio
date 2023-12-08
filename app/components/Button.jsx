import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button type={props.type} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 w-48 rounded">
        {props.name}
      </button>
    </div>
  );
}

export default Button

