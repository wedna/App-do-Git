
import React, {useState}from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Tela = styled.View`
  flex: 1;
`;
const Titulo = styled.View`
  background-color: #C4C4C4;
  height: 65px;
  padding: 0 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top:30px;
`;
const Busca = styled.TextInput`
  width:80%;
  color : #000000;
  font-size: 20px;
`;
const Botao = styled.TouchableOpacity`
  
`;
const BuscarImagem = styled.Image`
width: 30px;
height: 30px;
`;
const DivImagem = styled.View`
  background-color: #FFFFFF;
  align-items: center;
  height: 402px;
  width: 100%;
  margin-top: 10px;
`;
const Poster = styled.Image`
  align-items: center;
  height:425px;
  width: 300px;
`;
const DivInfo = styled.View`
  background-color:  #FFFFFF;
  
  flex: 1;
`;

const Linha = styled.View`
  flex-direction: row;
  
  width: 100%;
  margin-top: 10px;
`;
const Texto= styled.Text`
  font-size: 14px;
  padding-left: 20px;
  padding-right:10px;
`;

export default function App() {
  const[nome, alteranome] = useState('');
  const[git, alteragit] = useState({});
  const buscaGit =  async () => {
    const requisicao = await fetch(`https://api.github.com/users/${nome}`)
    const resposta = await requisicao.json();
    alteragit (resposta);
    console.log({resposta});
  }
  return (
    <Tela>
      <Titulo>
        <Busca placeholder="Digite sua busca..." values={nome} onChangeText={(git) => {alteranome(git)}}/>
        <Botao activeOpacity={0.3} onPress={buscaGit}>
          <BuscarImagem source={require('./assets/icons8-pesquisar-50.png')}/>
        </Botao>
      </Titulo>
      <DivImagem>
        <Poster source ={{uri:git.avatar_url}}/>
      </DivImagem>
      <DivInfo>
       
        <Linha>
          <Texto>Nome: {git.name}</Texto>
         
        </Linha>
        <Linha>
          
          <Texto>Trabalho: {git.company}</Texto>
        </Linha>
        <Linha>
        <Texto>Plub. no Github: {git.public_repos}</Texto>
        <Texto>Seguidores: {git.followers}</Texto>
       
        </Linha>
        <Linha>
        <Texto>Localização: {git.location}</Texto>
        </Linha>
      </DivInfo>
    </Tela>
      
      
  );
}


