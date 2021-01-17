import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Capitalize, ImageSrc } from "../utils/Common";

class PersonList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log("API Response", response);
        this.setState({ persons: response.data.results });
      })
      .catch((error) => {
        console.log("Api Error", error);
        this.setState({ errorMsg: "API Error" });
      });
  }

  render() {
    const { persons, errorMsg } = this.state;
    return (
      <div className="persons-list">
        <h2>List of Persons</h2>

        {errorMsg ? (
          <div>{errorMsg}</div>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Sr. NO</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
              </tr>
            </thead>
            <tbody>
              {persons.length
                ? persons.map((person, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {person.name.title +
                          ". " +
                          person.name.first +
                          " " +
                          person.name.last}
                      </td>
                      <td>{Capitalize(person.gender)}</td>
                      <td>
                        Date: {person.dob.date}
                        <span className="px-3"></span>
                        Age: {person.dob.age}
                      </td>
                      <td>
                        <img src={ImageSrc("/bitmap.png")} alt="user" />
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
}

export default PersonList;
