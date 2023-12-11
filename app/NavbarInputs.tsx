export default function NavbarInputs() {
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        <li>
          <summary>Interest</summary>
          <input
            type="range"
            min="0"
            max="10"
            className="range range-sm"
            step="1"
          />
        </li>
        <li>
          <details>
            <summary>City</summary>
            <ul className="p-2">
              <li>
                <a>London</a>
              </li>
              <li>
                <a>Belfast</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
      <a className="btn">Show properties</a>
    </>
  );
}
