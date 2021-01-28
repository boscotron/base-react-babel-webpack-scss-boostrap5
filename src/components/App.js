import React from 'react';
import '../styles/components/App.scss';

const date = new Date();

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    this.state = {
      year: date.getFullYear(),
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
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
            {' '}
          </p>
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
    );
  }
}

export default App;
