import React from 'react'

const login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
  <div className="max-w-sm w-full bg-gray-200 rounded-xl shadow-md p-6">
    <h2 className="text-2xl font-semibold text-center mb-4">Login Form</h2>
    <hr className="my-4 border-gray-300" />
    <form className="flex flex-col gap-4">
      <div>
        <label className="block mb-1 font-medium text-gray-700">Name:</label>
        <input
         required="true minLength={3} maxLength={6}"
          type="text"
          placeholder="Enter your name"
          className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Email:</label>
        <input
          required="true minLength={3} maxLength={6}"
          type="email"
          placeholder="Enter your email"
          className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Password:</label>
        <input
          required="true minLength={3} maxLength={6}"
          type="password"
          placeholder="Enter your password"
          className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">Confirm Password:</label>
        <input
          required="true minLength={3} maxLength={6}"
          type="password"
          placeholder="Confirm your password"
          className="border border-black rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>



      <button
        type="submit"
        className="bg-blue-600 text-white rounded-md py-2 mt-2 hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</div>

  )
}

export default login