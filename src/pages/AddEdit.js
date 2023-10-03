import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import { addContact, updateContact } from "../redux/Feature/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { userConfig } from "../config";

const AddEdit = () => {
  const { contacts, contact } = useSelector((state) => state.contact);
  const { id } = useParams();

  const [state, setState] = useState({
    ...userConfig,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // getContact(id);
    const currentContact = contacts.find((item) => item.id == id);
    setState({ ...currentContact });
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    !id ? dispatch(addContact(state)) : dispatch(updateContact(state));

    // Clear the form and remove data from localStorage
    // setState(initialState);
    localStorage.removeItem("formData");

    setTimeout(() => history.push("/"), 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name ..."
          value={state.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email ..."
          value={state.email}
          onChange={handleInputChange}
        />
        <label htmlFor="status">Status</label>
        <select
          className="dropdown"
          name="status"
          onChange={handleDropdownChange}
        >
          <option>Please Select Status</option>
          <option
            value="Active"
            selected={state.status === "Active" ? state.status : ""}
          >
            Active
          </option>
          <option
            value="Inactive"
            selected={state.status === "Inactive" ? state.status : ""}
          >
            Inactive
          </option>
        </select>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Contact No ..."
          value={state.phone}
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
