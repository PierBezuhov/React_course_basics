function Login() {
  function handleFormSubmit(event) {
    event.preventDefault() //устраняет перезагрузку и добавление параметров в адресной строке при сабмите
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    alert(JSON.stringify(userData))
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login