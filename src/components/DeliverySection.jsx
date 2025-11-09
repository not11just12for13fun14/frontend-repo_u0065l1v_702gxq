import React, { useState } from 'react';

export default function DeliverySection() {
  const [items, setItems] = useState([
    { id: 1, name: 'كبسة لحم', price: 48, qty: 1 },
    { id: 3, name: 'سلطة تبولة', price: 22, qty: 1 },
  ]);
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(null);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const handleOrder = async (e) => {
    e.preventDefault();
    if (!address.trim() || items.length === 0) return;
    setStatus('loading');
    try {
      // Placeholder submit - backend can be connected later
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setItems([]);
      setAddress('');
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="delivery" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">توصيل الطلبات</h2>
          <p className="mt-2 text-gray-600">اختر أطباقك المفضلة وحدد العنوان وسنصل إليك بسرعة.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">سلة الطلب</h3>
            {items.length === 0 ? (
              <p className="text-gray-600">لا توجد عناصر في السلة.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((it) => (
                  <li key={it.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{it.name}</p>
                      <p className="text-sm text-gray-600">{it.price} ر.س</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(it.id, -1)} className="rounded-full border px-3 py-1">-</button>
                      <span className="w-6 text-center">{it.qty}</span>
                      <button onClick={() => updateQty(it.id, 1)} className="rounded-full border px-3 py-1">+</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex items-center justify-between border-t pt-4">
              <span className="font-semibold">الإجمالي</span>
              <span className="text-lg font-bold text-amber-700">{total} ر.س</span>
            </div>
          </div>

          <form onSubmit={handleOrder} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">تفاصيل التوصيل</h3>
            <div className="grid gap-2">
              <label className="text-sm font-medium">العنوان</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows={4} className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="اكتب عنوانك بالتفصيل" />
            </div>
            <button disabled={items.length === 0 || !address.trim()} type="submit" className="mt-4 w-full rounded-full bg-amber-600 px-6 py-3 text-white hover:bg-amber-700 disabled:opacity-50">
              {status === 'loading' ? 'جاري الإرسال...' : 'تأكيد الطلب'}
            </button>
            {status === 'success' && <p className="mt-3 text-green-600">تم استلام طلبك! سنقوم بالتجهيز والتوصيل.</p>}
            {status === 'error' && <p className="mt-3 text-red-600">حدث خطأ، حاول مرة أخرى.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
