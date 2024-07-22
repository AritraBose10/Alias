import "./sidebar.css";

function renderPes() {
  return (window.location.href = "http://localhost:3000/pes");
}
const Sidebar = () => {
  return (
    <div id="nav-bar">
      <input id="nav-toggle" type="checkbox" defaultChecked/>
      <div id="nav-header">
        <h1 id="nav-title">ALIAS</h1>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>
      <div id="nav-content">
        <div className="nav-button" onClick={renderPes}>
          <span>PES</span>
        </div>
        <div className="nav-button">
          <span>Assets</span>
        </div>
        <div className="nav-button">
          <span>Pinned Items</span>
        </div>
        <hr />
        <div className="nav-button">
          <span>Following</span>
        </div>
        <div className="nav-button">
          <span>Trending</span>
        </div>
        <div className="nav-button">
          <span>Challenges</span>
        </div>
        <div className="nav-button">
          <span>Spark</span>
        </div>
        <hr />
        <div className="nav-button">
          <span>Codepen Pro</span>
        </div>
        <div id="nav-content-highlight"></div>
      </div>
      <input id="nav-footer-toggle" type="checkbox" />
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img
              src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547"
              alt="Avatar"
            />
          </div>
          <div id="nav-footer-titlebox">
            <span id="nav-footer-subtitle">Admin</span>
          </div>
          <label htmlFor="nav-footer-toggle"></label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
