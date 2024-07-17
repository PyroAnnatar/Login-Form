import Form from "./Form";
import Header from "./Header";

// App/Header/Form bileşenlerine ayırın, kendi adlarıyla ayrı dosyalara koyun

export default function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form />
        <p className="mt-10 text-center text-sm text-gray-500">
          Üye değil misiniz?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            14 günlük ücretsiz deneme başlatın
          </a>
        </p>
      </div>
    </div>
  );
}
