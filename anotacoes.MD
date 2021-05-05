# React Router

Este projeto foi feito para estudar como funciona a navegação com o react entre componentes por meio de rotas.
Para começarmos é necessário instalar o pacote:
<code> npm i react-router-dom </code>

# Roteamento

Para o uso do roteamento é necessário que todos os componentes que vão ser navegados estejam circundados pelo component <b>Switch</b> com o <b>Route</b>
por exemplo:

<code>
    < Switch>
        < Route>
            < Home />
        < Route/>
    </ Switch>
</code>

Além disso para fazer a aplicação ir para aquele link é necessário que vc utilize o component <b>Link</b> dessa forma :

<code>
    < Link to="/" > Inicio </> 
</code>

Todos esses recursos estão disponíveis na react-router-dom.

# Passando parâmetros

Para passar parâmetros basta usar um coringa, na url: <code> <Link to="/param/:id"> Enviando parâmetro </Link> </code> E do outro lado, você usar o Hook para capturar o valor no componente
<code>
import { useParams } from "react-router-dom";

    export default Param(props) => {
        const { id } = useParams();

        return (
            <div>
                <h1> { id } </h1>
            </div>
        )
    }

</code>

# Route Exact

Caso você não passe o atributo exact no link dentro das rotas no switch, e seu componente "/" for o primeiro cara, vai ser comum
todas as rotas exibirem esse componente, porque todas começam com o / também! Então é interessante que apenas na home, você diga "exact"
para evitar esse problema.

# useState

Hook usado sempre que você precisa atualizar o estado de um determinado dado.

# useEffect

Hook usado como efeito colateral, supondo que alguma variável tenha uma modificação e sempre que ela sofrer alguma mudança vc precisa ou pode fazer algo
é interessante usar esse Hook, para ele ficar observando as mudanças e fazer sua lógica.

# useRef

O hook useRef é semelhante o useState, ele também serve para atualizar o estado de um determinado dado, a diferença é que ele não atualiza o seu componente
e apenas o estado da memória, então pra ter acesso ao valor atual da variável que está vinculada ao useRef, é necessário acessar o .current dela.

# useMemo

Hook utilizado para trazer um valor cacheado.

# useCallback

Este hook é utilizado para cachear o valor de uma função, ele é perfeito quando vc precisa ter um componente cacheado, ou seja que o seu estado não precisa
ser renderizado a cada ação que ele irá executar, é preciso utilizar com o React.memo(component) na criação do componente, para conseguir obter todo o
fluxo do hook.
