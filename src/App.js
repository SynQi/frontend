/* Toda informação que for manipulada pelo Component
 * deve-se salvar no no state
 */

/* Tipos de Componentes!
 *
 * Component Statefull - Possui um estado
 * (isso requer criar um campo state para utilizar o método 'render')
 * Ex: state = { newBox: "" }; <- isso passará a renderizar o método
 *
 * Component Stateless - Não possui estado
 * (isso permite criar uma função ou váriavel para chamar o método 'render')
 * Ex: function App () { return <Main /> }
 */

/* Propriedade - Uma informação que se passa para um Component
 * Ex: id="box-container" <-Isso permite manipular o conteúdo
 */
 import React from 'react';
import "./App.css";

import Router from './routes';

const App = () => <Router />;

// Stateless
//function App() {
//  return <Main /> 
//}

/*class App extends Component {
 * render() {
 *  return <Main />;       <-Statefull
 * }
 *}
 */
export default App;
