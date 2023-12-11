export default function NavbarInputs() {
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <label htmlFor="interest" className="label">
            <summary>Interest</summary>
          </label>
          <input
            type="range"
            id="interest"
            min="0"
            max="8"
            className="range range-sm"
            step="1"
          />
        </li>
        <li>
          <details>
            <summary>City</summary>
            <ul className="p-2">
              <li>
                <label className="form-control justify-between cursor-pointer">
                  <span className="label-text">London</span>
                  <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
              </li>
              <li>
                <label className="form-control justify-between cursor-pointer">
                  <span className="label-text">Belfast</span>
                  <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
              </li>
              <li>
                <label className="form-control justify-between cursor-pointer">
                  <span className="label-text">Manchester</span>
                  <input type="checkbox" className="checkbox checkbox-xs" />
                </label>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <a className="btn">Show properties</a>
    </>
  );
}
