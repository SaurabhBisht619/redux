import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./View.css";
import { useSelector } from "react-redux";

const View = () => {
  const { contacts } = useSelector((state) => state.contact);

  const [contact, setContact] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const newContact = contacts.find((item) => item.id == id);
    setContact(newContact);
  }, [contacts, id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          {<span>{contact.name}</span>}
          <br />
          <br />
          <strong>Email: </strong>
          {<span>{contact.email}</span>}
          <br />
          <br />
          <strong>Status: </strong>
          {<span>{contact.status}</span>}
          <br />
          <br />
          <strong>Phone: </strong>
          {<span>{contact.phone}</span>}
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
