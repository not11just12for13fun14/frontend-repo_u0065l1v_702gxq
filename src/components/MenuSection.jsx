import React from 'react';

const menu = [
  {
    id: 1,
    name: 'كبسة لحم',
    desc: 'أرز بسمتي مطبوخ مع بهارات خاصة وقطع لحم طرية.',
    price: 48,
    img: 'https://images.unsplash.com/photo-1617191518009-7c2c8d501386?q=80&w=1200&auto=format&fit=crop',
    category: 'الأطباق الرئيسية',
  },
  {
    id: 2,
    name: 'مشاوي مشكلة',
    desc: 'تشكيلة من الكباب والشيش طاووق واللحم المشوي مع صلصات جانبية.',
    price: 65,
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop',
    category: 'الأطباق الرئيسية',
  },
  {
    id: 3,
    name: 'سلطة تبولة',
    desc: 'برغل مع بقدونس وطماطم طازجة وزيت زيتون.',
    price: 22,
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    category: 'السلطات',
  },
  {
    id: 4,
    name: 'حمص بالطحينة',
    desc: 'حمص كريمي مع طحينة ولمسة ليمون وزيت زيتون.',
    price: 18,
    img: 'https://images.unsplash.com/photo-1604908554049-480269bbf3b7?q=80&w=1200&auto=format&fit=crop',
    category: 'المقبلات',
  },
  {
    id: 5,
    name: 'بيتزا مارجريتا',
    desc: 'عجينة رقيقة مع صلصة الطماطم والجبن الطازج والريحان.',
    price: 42,
    img: 'https://images.unsplash.com/photo-1548365328-9f547fb09530?q=80&w=1200&auto=format&fit=crop',
    category: 'البيتزا',
  },
  {
    id: 6,
    name: 'تشيز كيك التوت',
    desc: 'حلى مخملي مع صوص توت طبيعي.',
    price: 28,
    img: 'https://images.unsplash.com/photo-1516214104703-4c7d6a3c9a2d?q=80&w=1200&auto=format&fit=crop',
    category: 'الحلويات',
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">قائمة الطعام</h2>
            <p className="mt-2 text-gray-600">أطباق مختارة بعناية لتحسين تجربتك.</p>
          </div>
          <div className="hidden gap-3 md:flex">
            {['الكل', 'المقبلات', 'السلطات', 'الأطباق الرئيسية', 'البيتزا', 'الحلويات'].map((c) => (
              <span key={c} className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" loading="lazy" />
                <div className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-gray-800 shadow">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">{item.price} ر.س</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600">{item.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <button className="rounded-full bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700">أضف إلى الطلب</button>
                  <button className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-800 hover:bg-gray-50">التفاصيل</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
