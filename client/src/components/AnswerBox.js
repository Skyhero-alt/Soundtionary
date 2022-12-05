const AnswerBox = () => {
  return (
    <div className="card bg-base-300 w-2/3 h-full m-3">
      <div className="alert alert-info w-fit m-2">
        <div>
          <small>Skyhero</small>
          <span>Is it cheap thrills ?</span>
        </div>
      </div>
      <div className="alert alert-success w-fit m-2">
        <div>
          <small>LrnzDc</small>
          <span>Happier</span>
        </div>
      </div>

      <div className="absolute place-self-center bottom-0 flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-md m-3"
        />
        <button className="btn btn-primary m-3">Send</button>
      </div>
    </div>
  );
};

export default AnswerBox;
