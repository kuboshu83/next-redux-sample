export const Counter: React.FC = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="w-1/2 flex flex-col items-center gap-1">
        <h1 className="text-4xl font-bold">Counter: 0</h1>
        <div className="flex flex-col gap-2 w-1/2">
          <button className="bg-gray-400 p-2 rounded-md">CounteUp</button>
          <button className="bg-gray-400 p-2 rounded-md">Reset</button>
        </div>
        <div className="text-xl font-bold">ログインしてください</div>
      </div>
    </div>
  );
};
