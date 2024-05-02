import React, { Component } from 'react';
import axios from 'axios';
import {Button} from "primereact/button";
import { InputText } from 'primereact/inputtext';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });

    this.fetchIndexes();
    this.fetchValues();
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
        <div>
        <div className="surface-0 text-700 text-center pt-8">
            <div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
            <div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
            <div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

        </div>

        <form onSubmit={this.handleSubmit} className={"pt-2"}>
          <label className={"text-900 font-bold text-5xl m-5"}>Enter your index:</label><br/>

          <div className="card flex justify-content-center my-4">
            <InputText value={this.state.index} onChange={(e) => this.setState({index: e.target.value})}/>
        </div>
          <div className="card flex justify-content-center">
             <Button label="Submit" icon="pi pi-save"
                     className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"/>
        </div>
        </form>

        <h3>Indexes I have seen:</h3>
          {this.renderSeenIndexes()}

          <h3>Calculated Values:</h3>
          {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
