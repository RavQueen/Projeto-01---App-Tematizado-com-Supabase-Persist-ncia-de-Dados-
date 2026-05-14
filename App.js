import { Text, View, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "./src/supabase";
 
export default function App() {
  const [desejo, deMenina] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] =useState('');
  const [session, setSession] = (null);
  const [loading, setLoading] = (true);
  
  async function verificarSessao() {
    const resposta = await supabase.auth.getSession();
    setSession(resposta.data.session);
    setLoading(false);
  }

  async function monitorarSessao() {
    const resposta = supabase.auth.onAuthStateChange((evento, sessao) => {
      setSession(sessao);
    });
    return resposta.data.subscription;
  }

  useEffect(() => {
    verificarSessao();
    const inscricao = monitorarSessao();
    return () => inscricao.unsubscribe();
  }, []);

  /*Login, Cadastro, Logout*/
  async function login() {
    const resposta = await supabase.auth.signInWithPassword(
      {
        email:email,
        password:senha
      }
    )

    if(resposta.error){
      alert("Moio na hora de fazer login ó\n" + resposta.error.message);
    } else {
      alert("Funfou prr!!🤘😛🤘");
    };
  }

  async function registrar() {
    const resposta = await supabase.auth.signUp(
      {
        email:email,
        password:senha
      }
    )

    if(resposta.error){
      alert("Moio na hora de fazer o cadastro ó\n" + resposta.error.message);
    } else {
      alert("Funfou prr!!🤘😛🤘");
    };
  }

  async function logout() {
    const resposta = await supabase.auth.signOut();
  }
  /*-----------------------------------*/

  async function inserirRegistro() {
    const resposta = await supabase
      .from('listadesejos')
      .insert([{
        titulo:desejo,
        descricao:detalhes
    }]);

    if(resposta.error){
      alert('Deu muito certo não ó: ' + resposta.error.message);
    } else {
      alert('Funfou!!')
    }
  }


  return(
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
      />
      <Button title="Login né" onPress={login} />
      <Button title="Registrar né" onPress={registrar} />

      <TextInput
        placeholder="Seu desejo."
        value={desejo}
        onChangeText={deMenina}
      />
      <TextInput
        placeholder="Descreve ai."
        value={detalhes}
        onChangeText={setDetalhes}
      />
      <Button title='Inserir Registro' onPress={inserirRegistro} />
      <Button title="Sair" onPress={logout} />
    </View>
  )
}