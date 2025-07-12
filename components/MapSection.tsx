"use client";

export default function MapSection() {
  return (
    <div className="mt-12 w-full max-w-4xl px-4">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        📍 Lokalizacja ślubu i wesela
      </h2>
      <div className="overflow-hidden rounded-lg shadow-lg border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.727435866652!2d20.434550077119997!3d50.76208747165324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471785fdfa042deb%3A0xfd6532c92f537b56!2sWilaneska!5e0!3m2!1spl!2spl!4v1751715707608!5m2!1spl!2spl"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
