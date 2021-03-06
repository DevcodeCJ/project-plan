import React from "react";
import moment from "moment";

function Notifications(props) {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0 grey notification-card">
        <div className="card-content">
          <span className="card-title white-text">
            <strong>Notifications</strong>
          </span>
          <ul className="notifications white-text">
            {notifications &&
              notifications.map((item) => {
                return (
                  <li key={item.id}>
                    <span className="note-user">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="note-date">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
