
import './App.css'
export function Form() {
  function Mybit(event) {
    event.preventDefault();
    const fg = new FormData(event.target)
    const mydata = Object.fromEntries(fg.entries())
    console.log(mydata)
  }

return (
  <>
  <div className='sako'>
    <form onsubmit={Mybit} >
      <h2>Login Form </h2>
      <label htmlFor="email">Email</label><br/><br/>
      <input type="email"
        name="email"
        id="email"></input><br/><br/>
      <label htmlFor="password" >password</label><br/><br/>
      <input type="password"
        name="password"></input><br/><br/>

      <button type="submit" id='gol' >submit</button><br/><br/>
    </form>
    </div>
  </>
)
}