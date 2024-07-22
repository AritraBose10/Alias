import Feed from "./feed";
import "./mainindex.css";
import Sidebar from "./sidebar";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className="main_container">
        <Sidebar />
        <nav className="navbar">
          <h1>Alias</h1>

          <button className="white_btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div></div>
      </div>
      <div>
        <Feed />
      </div>
    </>
  );
};

export default Main;
