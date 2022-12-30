import React, { useState } from 'react'

const Message = (props) => {
  const [input, setInput] = useState('')

  const handleInputChange = e =>{
    setInput(e.target.value)
  }
   const handlePostComment = e =>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random() * 10000),
      text:input
    })
    setInput('')
   }

  return (
    <div>
                <form
          // onSubmit={handlePostComment}
          onSubmit={handlePostComment}
          noValidate=""
          action=""
          className="space-y-12 px-12 ng-untouched ng-pristine ng-valid"
        >
          <input
            onChange={handleInputChange}
            type="text"
            name="comment"
            placeholder="Add a comment..."
            className="w-full px-3 py-1 border rounded-md  border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
          />
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400"
          >
            Comment
          </button>
        </form>
    </div>
  )
}

export default Message