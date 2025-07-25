import { FiInfo } from 'react-icons/fi'; // Ganti dengan ikon yang kamu suka

export default function CardBox({ title, description, icon: Icon = FiInfo }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-start gap-4">
      {/* Icon */}
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full shadow-inner">
        <Icon className="text-xl" />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
