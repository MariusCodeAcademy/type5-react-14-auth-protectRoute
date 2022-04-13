import Container from './../components/UI/Container';
function LoginPage() {
  function formHandler(e) {
    e.preventDefault();
    console.log('Logging in');
  }
  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='email' />
        <br />
        <input type='text' placeholder='password' />
        <br />
        <button type='submit'>Login</button>
      </form>
    </Container>
  );
}

export default LoginPage;
