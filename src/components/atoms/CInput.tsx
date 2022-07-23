type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
};

const CInput: React.FC<Props> = ({ todo, setTodo, onSubmit }) => {
  console.log(todo);

  return (
    <form className="flex relative items-center w-full md:px-[25%]">
      <input
        onSubmit={onSubmit}
        className="w-full shadow-sm rounded p-5 focus:shadow-xl outline-none"
        type="input"
        placeholder="Enter some lists"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="p-5 border-none bg-orange-300" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CInput;
