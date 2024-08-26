export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}
