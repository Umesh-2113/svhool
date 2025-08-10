export default function Gallery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-800">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <img src="https://images.unsplash.com/photo-1600880291834-1cc65b7df74a" className="rounded-lg shadow-md" />
        <img src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238" className="rounded-lg shadow-md" />
        <img src="https://images.unsplash.com/photo-1596495577743-4b823d9a7d3c" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
}
