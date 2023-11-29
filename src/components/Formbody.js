import Form from "./Form";

const Formbody = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="form-wrapper" style={{ text: "center" }}>
      <Form name="Name" />
      <Form name="Profession" />
      <Form name="Address" />

      <button type="submt" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Formbody;
