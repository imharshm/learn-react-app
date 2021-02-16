import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

export class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: {},
      persons: [],
    };
  }

  componentDidMount() {
    // axios.get(`https://react.indexial.in/api/blog.php/list`).then((res) => {
    //   this.setState({ persons: res.data.blogs });
    //   console.log("contact " + this.state.persons);
    // });

    this.setState({
      persons: [
        {
          id: "1",
          title: "blog title",
          blog_desc: "blog desc",
          image_path: "",
          auther: "Somanath",
          created_on: "2021-01-11 09:02:50",
          status: "1",
        },
        {
          id: "2",
          title: "blog title",
          blog_desc: "blog desc",
          image_path: "",
          auther: "image path",
          created_on: "2021-01-11 09:08:16",
          status: "1",
        },
        {
          id: "3",
          title: "blog title",
          blog_desc: "blog desc",
          image_path: "image path",
          auther: "Somanath",
          created_on: "2021-01-11 09:09:13",
          status: "1",
        },
        {
          id: "4",
          title: "blog title4",
          blog_desc: "blog desc4",
          image_path: "image path4",
          auther: "Somanath",
          created_on: "2021-01-11 09:10:34",
          status: "1",
        },
      ],
    });
  }

  handleChange = (event) => {
    this.state.inputData[event.target.name] = event.target.value;
    this.setState({ inputData: this.state.inputData });
  };

  handleSubmit = (event) => {
    console.log("Contact form data", this.state.inputData);
    event.preventDefault();

    const contactData = this.state.inputData;

    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: "JWT fefege...",
    // };

    axios
      .post(`https://react.indexial.in/api/contacts.php/create`, {
        // headers,
        contactData,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.persons &&
            this.state.persons.length > 0 &&
            this.state.persons.map((person, index) => <li key={index}>{person.title}</li>)}
        </ul>
        <Form className="bg-white p-5 rounded shadow-sm" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label> Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label> Mobile:</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Enter mobile"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label> Email:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label> Company:</Form.Label>
            <Form.Control
              type="text"
              name="company"
              placeholder="Enter company"
              value={this.state.company}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label> Message:</Form.Label>
            <Form.Control
              type="text"
              name="message"
              as="textarea"
              row={3}
              placeholder="Enter message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Button type="submit" className="btn btn-lg btn-primary">
            Add
          </Button>
        </Form>
      </>
    );
  }
}
export default Contacts;
