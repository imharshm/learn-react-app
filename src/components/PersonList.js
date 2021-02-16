import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Capitalize } from "../utils/Methods";
import CustomTable from '../common/Table';


const tableHeader = [
  {
      id: 1,
      name: 'Name'
          
  },
  {
      id: 2,
      name: 'Mobile'
  },
  {
      id: 3,
      name: 'Address'
  }
]

const PersonList = () => {
  const [persons, setPersons] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log("API Response", response);
        setPersons([...response.data.results]);
      })
      .catch((error) => {
        console.log("Api Error", error);
        setErrorMsg("API Error");
      });
  }, []);

  return (
    <div className="card border-0 p-4 persons-list">
      <h3 className="mb-3">List of Persons</h3>

      {errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <Table bordered>
          <thead>
            <tr>
              <th>Sr. NO</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>User Image</th>
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
                      <img src={person.picture.medium} alt="user" />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </Table>
      )}
      <CustomTable tableHeader={tableHeader}></CustomTable>
    </div>
  );
};

export default PersonList;
