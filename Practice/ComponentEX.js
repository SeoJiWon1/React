import logo from './logo.svg';
import './App.css';

function Header(props){
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a> </h1>
  </header>
}

function Nav(){
  return <ol>
    <li><a href = "/read/1">html</a></li>
    <li><a href = "/read/2">css</a></li>
    <li><a href = "/read/3">js</a></li>
  </ol>
}

function Article(props){
  return<article>
    <h2>{props.title}</h2>
        {props.body}
  </article>
}


function App() {
  return (
    <div>
      <Header title ="WEB"></Header>   
        <Nav></Nav>    
        <Article title = "Welcome" body ="Hello, WEB"></Article>
        
    </div>
  );
}
export default App;

