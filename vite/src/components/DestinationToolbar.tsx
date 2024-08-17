function DestinationToolbar() {
  return (
    <ul className="tabs underline-tab text-accent">
      <li className="active" aria-selected="true">Moon</li>
      <li aria-selected="false">Mars</li>
      <li aria-selected="false">Europa</li>
      <li aria-selected="false">Titan</li>
    </ul>
  );
}

export default DestinationToolbar;
