import React from 'react';

export default function NavbarHero() {
  return (
    <header className="relative">
      {/* Top Nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold shadow-lg">K</div>
          <span className="text-xl font-semibold tracking-wide">Kabi</span>
        </div>
        <div className="hidden gap-8 md:flex">
          <a href="#menu" className="text-sm font-medium text-gray-600 hover:text-gray-900">القائمة</a>
          <a href="#reserve" className="text-sm font-medium text-gray-600 hover:text-gray-900">حجز</a>
          <a href="#delivery" className="text-sm font-medium text-gray-600 hover:text-gray-900">توصيل</a>
          <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">تواصل</a>
        </div>
      </nav>

      {/* Hero */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-12 md:pt-10">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            أهلاً بك في <span className="text-amber-600">Kabi</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            مطعمك المفضل للمأكولات الشهية. تصفّح قائمتنا الغنية بالأطباق مع الصور، احجز طاولتك بسهولة،
            أو اطلب وجبتك المفضلة للتوصيل إلى باب منزلك.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-amber-600 px-5 py-3 text-white shadow-md hover:bg-amber-700 transition">استكشف القائمة</a>
            <a href="#reserve" className="rounded-full border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50 transition">احجز الآن</a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              alt="طاولة طعام في مطعم Kabi"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-4 right-4 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-800 shadow">
              تجربة طعام لا تُنسى
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
