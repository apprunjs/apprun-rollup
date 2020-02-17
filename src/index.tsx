import { app, Component } from 'apprun';

class App extends Component {
  view = () => 'Hello World!'
}

new App().start(document.body);

