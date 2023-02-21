import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sed quam nulla dolore accusantium nihil atque quibusdam accusamus. Sed laboriosam minima saepe in fugiat aperiam, veritatis optio autem debitis neque?"

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
            <td><button>Mark as read</button></td>
          </tr>
          <tr className="active">
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>
            <td><button>Mark as read</button></td>
          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>

          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>

          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>

          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>

          </tr>
          <tr>
            <td>Jhon Doe</td>
            <td><Link to="/message/123" className="link">{msg.substring(0, 100)}...</Link></td>
            <td>1 Day ago</td>

          </tr>

        </table>
      </div>
    </div>
  );
};

export default Messages;