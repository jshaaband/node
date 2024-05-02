import React, { Component } from "react";
import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Message } from "primereact/message";

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    if (!this.state.index) {
      return;
    }

    await axios.post("/api/values", {
      index: this.state.index,
    });
    this.setState({ index: "" });

    this.fetchIndexes();
    this.fetchValues();
  };

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => {
      return <Message severity="contrast" text={number}></Message>;
    });
  }

  renderValues() {
    const productValues = this.state.values;

    const products = Object.keys(this.state.values).map((key, index) => {
      return {
        no: index + 1,
        index: "For index " + key,
        calculated: "calculated " + productValues[key],
        indexValue: key + " | " + productValues[key],
      };
    });

    return (
      <div className="card flex justify-content-center">
        <DataTable value={products} tableStyle={{ minWidth: "40rem" }}>
          <Column field="no" header="#"></Column>
          <Column field="index" header="Index"></Column>
          <Column field="calculated" header="Calculated"></Column>
          <Column field="indexValue" header="Index-Value"></Column>
        </DataTable>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="surface-0 text-700 text-center pt-5">
          <div className="text-900 font-bold text-3xl mb-3">
            Enter your index
          </div>
        </div>
        <div className="text-700 mb-2">
          Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.
        </div>

        <form onSubmit={this.handleSubmit} className={"pt-2"}>
          <div className="card flex justify-content-center">
            <div className="p-inputgroup w-25rem ">
              <InputText
                value={this.state.index}
                onChange={(e) => this.setState({ index: e.target.value })}
              />
              <Button icon="pi pi-check" className="p-button-success" />
            </div>
          </div>
        </form>

        <h3>Indexes I have seen:</h3>
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
          {this.renderSeenIndexes()}
        </div>
        <h3>Calculated Values:</h3>
        {this.renderValues()}

        <div className="text-blue-600 text-sm font-bold m-3">
          <i className="pi pi-calculator"></i>&nbsp;My Fib calculator
        </div>
      </div>
    );
  }
}

export default Fib;
