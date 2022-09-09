import React, { Component } from 'react';
import {Header, Card} from 'components';

export default class Board extends Component {
  render() {
    return (
      <>
        <Header/>
        <section className="container p-4">
          <div className="row align-items-center px-3">
            <div className="col-auto">
              <Card/>
            </div>
          </div>
        </section>
      </>
    )
  }
}
