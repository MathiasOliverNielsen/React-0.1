import dropDownStyles from "./dropDown.module.scss";

function DropDown() {
  return (
    <div className={dropDownStyles.dropDown}>
      <button className={dropDownStyles.dropDownButton}>Menu</button>
      <div className={dropDownStyles.dropDownContent}>
        <a href="#profile">Profile</a>
        <a href="#settings">Settings</a>
        <a href="#logout">Logout</a>
      </div>
    </div>
  );
}
export { DropDown };
