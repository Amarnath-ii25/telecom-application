import React from "react";
import "../css/AnnouncementBar.css";

const AnnouncementBar: React.FC = () => {
  return (
    <div className="announcement-bar">
      <span>New:</span>{" "}
      Free, fully hosted OpenEMR for U.S.-based healthcare providers—no servers, no setup, no cost.{" "}
      <a href="#">Try it now →</a>
    </div>
  );
};

export default AnnouncementBar;
