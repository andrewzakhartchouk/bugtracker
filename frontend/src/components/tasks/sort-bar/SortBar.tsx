export const SortBar = () => {
  return (
    <div className="flex flex-row gap-5 justify-end text-white w-full">
      <div className="my-auto bg-main-green font-medium rounded-tr-xl rounded-bl-xl px-5 py-1 cursor-pointer border-2 border-transparent hover:border-main-green">
        Deadline
      </div>
      <div className="my-auto text-main-green font-bold px-5 py-1 cursor-pointer rounded-tr-xl rounded-bl-xl border-2 border-transparent hover:border-main-green">
        Priority
      </div>
      <div className="my-auto text-main-green font-bold px-5 py-1 cursor-pointer rounded-tr-xl rounded-bl-xl border-2 border-transparent hover:border-main-green">
        Project
      </div>
    </div>
  );
};
