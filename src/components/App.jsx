import '../styles/components/App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

const date = new Date();

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      year: date.getFullYear(),
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <Router>
        <div className="container">
          <div className="py-5 text-center">
            <img
              className="d-block mx-auto mb-4"
              src="assets/img/concomsis.svg"
              alt=""
              width="72"
              height="72"
            />
            <h2>Concomsis</h2>
            <p className="lead">Templet React, Boostrap 5, Babbel, SCSS </p>
            <p className="lead my-4">
              <a href="https://comsis.mx/" className="btn btn-primary">
                comsis.mx
              </a>
            </p>
          </div>

          <div className="row">
            <div className="col-4">
              <ul className="list-group bg-dark text-light">
                <li className="list-group-item bg-secondary">
                  <Link to="/link1" className="text-light">
                    Link 1
                  </Link>
                </li>
                <li className="list-group-item bg-secondary">
                  <Link to="/link2" className="text-light">
                    Link 2
                  </Link>
                </li>
                <li className="list-group-item bg-secondary">
                  <Link to="/link3" className="text-light">
                    Link 3
                  </Link>
                </li>
                <li className="list-group-item bg-secondary">
                  <Link to="page" className="text-light">
                    Página
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-8">
              <Switch>
                <Route path="/page" children={<Page />} />
                <Route path="/:id" children={<Child />} />
                <Route path="/" children={<Welcome />} />
              </Switch>
            </div>
          </div>
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">
              &copy; 2015-
              {this.state.year}
              {' '}
              Concomsis S.A. de C.V.
            </p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacidad</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Términos</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Soporte</a>
              </li>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams();

  return (
    <div>
      <h3>
        ID:
        {id}
      </h3>
    </div>
  );
}
function Page() {
  return (
    <div>
      <h3>Title Page </h3>
    </div>
  );
}
function Welcome() {
  return (
    <div>
      <h3>Bienvenido </h3>
    </div>
  );
}
export default App;
