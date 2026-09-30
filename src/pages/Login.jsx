import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    // bloqueia o comportamento padrão do evento.
    event.preventDefault();
    // Executa o request para o backend
    // Tratamento da resposta: login ok, carrega outra página, senão mostra o erro
    alert(email);
    console.log({email, senha});

  }

  return (
    <form
      className="max-w-sm mx-auto mt-10 space-y-4"
      onSubmit={handleSubmit}
    >   
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="E-mail"
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="password"
        value={senha}
        onChange={ (ev) => setSenha(ev.target.value)}
        placeholder="Senha"
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;