type FeatureBlockProps = {
  image: string;
  title: string;
  desc: string;
  points: string[];
  reverse?: boolean;
};

function FeatureBlock({ image, title, desc, points, reverse }: FeatureBlockProps) {
  return (
    <section className="py-24">
      <div
        className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <img src={image} alt={title} className="rounded-2xl shadow-xl" />

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="mt-4 text-gray-600">{desc}</p>

          <ul className="mt-6 space-y-2 text-gray-700">
            {points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;

