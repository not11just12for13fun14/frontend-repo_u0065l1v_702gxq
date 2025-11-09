import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-white font-bold">K</div>
              <span className="text-lg font-semibold">Kabi</span>
            </div>
            <p className="mt-3 text-sm text-gray-600">نكهات أصيلة وخدمة راقية. نرحب بكم يوميًا.</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">مواعيد العمل</h4>
            <p className="text-sm text-gray-600">السبت - الخميس: 12 ظهرًا - 12 صباحًا</p>
            <p className="text-sm text-gray-600">الجمعة: 2 ظهرًا - 1 صباحًا</p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">تواصل</h4>
            <p className="text-sm text-gray-600">الهاتف: 9200 000 00</p>
            <p className="text-sm text-gray-600">العنوان: الرياض - حي الياسمين</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Kabi. جميع الحقوق محفوظة.</span>
          <a href="#" className="hover:text-gray-700">سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  );
}
