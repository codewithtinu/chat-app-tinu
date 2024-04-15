const GenerateCheckbox = ({onChangeCheckboxes, selectedGender}) => {
  return (
    <div className="flex flex-row">
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm "
            checked = {selectedGender === "male"}
            onChange = {() => onChangeCheckboxes("male")}
          />
          <span className="label-text ml-2 font-semibold">Male</span>
        </label>
      </div>
      <div className="form-control gap-2">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            checked = {selectedGender === "female"}
            onChange = {() => onChangeCheckboxes("female")}
          />
          <span className="label-text ml-2 font-semibold">Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenerateCheckbox;
