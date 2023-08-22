export default function Home() {
  return (
    <div>
      <h1 className="text-white bg-green-600 border-4 border-green-800">
        Custom color
      </h1>

      <h1 className="text-primary-100">Hello World!</h1>
      <h1 className="text-primary-932">Hello World!</h1>

      <h1 className="text-white bg-green-600 border-4 border-green-800">
        Custom size
      </h1>
      <p className="text-xs lg:text-lg mb-1 bg-[#d0ff45]">Hello long sentence</p>
      <p>Another long sentence</p>
    </div>
  );
}
