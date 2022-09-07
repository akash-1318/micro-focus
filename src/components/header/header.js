import "./header.css";

function Header() {
  return (
    <header className="header flex">
      <div className="left__sub-header flex">
        <p>Position : </p>
        <div className="radio">
          <label for="radio-1">
            <input type="radio" name="rating-radio" className="radio__input" checked />
          </label>
          Center
        </div>
        <div className="radio">
          <label for="radio-1">
            <input type="radio" name="rating-radio" className="radio__input" />
          </label>
          Lower Right
        </div>
      </div>
      <div className="middle__sub-header">
        <p>Press ESC key to hide the window, Enter to show it again</p>
      </div>
      <div className="right__sub-header">
        <p>Hello</p>
      </div>
    </header>
  );
}

export { Header };
