import React, { useState } from 'react';

export default function ReservationSection() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // Placeholder submit - backend can be connected later
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' });
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="reserve" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">حجز طاولة</h2>
          <p className="mt-2 text-gray-600">احجز مكانك في Kabi بسهولة وخلال ثوانٍ.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">الاسم الكامل</label>
            <input name="name" value={form.name} onChange={handleChange} required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="أدخل اسمك" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">رقم الجوال</label>
            <input name="phone" value={form.phone} onChange={handleChange} required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="05xxxxxxxx" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">التاريخ</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">الوقت</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">عدد الضيوف</label>
            <input type="number" min={1} max={12} name="guests" value={form.guests} onChange={handleChange} required className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm font-medium">ملاحظات</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-amber-500" placeholder="أي طلبات خاصة؟" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="rounded-full bg-amber-600 px-6 py-3 text-white hover:bg-amber-700">
              {status === 'loading' ? 'جاري الإرسال...' : 'تأكيد الحجز'}
            </button>
            {status === 'success' && <span className="text-green-600">تم استلام طلب الحجز! سنتواصل معك قريبًا.</span>}
            {status === 'error' && <span className="text-red-600">حدث خطأ، حاول مرة أخرى.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
