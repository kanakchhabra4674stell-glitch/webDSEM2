import React from 'react'
import{ useState } from 'react';

function SignupForm() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

  return (
    <div>
        <form>
            <input
                type="text"
                placeholder="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <button type="submit">Sign Up</button>
        </form>

        <h2>Name: {data.name}</h2>
        <h2>Email: {data.email}</h2>
        <h2>Password: {data.password}</h2>
    </div>
  )
}

export default SignupForm