'use client';

import Link from 'next/link';

export const QuickServiceBar = () => {
  const services = [
    { name: '시장지도', icon: '🗺️', href: '/map', badge: '길찾기' },
    { name: '점포안내', icon: '🏪', href: '/stores', badge: '디렉토리' },
    { name: '떡/맛집', icon: '🍞', href: '/stores/ricecake', badge: '대표먹거리' },
    { name: '시장이야기', icon: '📖', href: '/stories', badge: '스토리' },
    { name: '야시장달력', icon: '🎉', href: '/today', badge: 'LIVE' },
    { name: '추천코스', icon: '🚶', href: '/map', badge: '코스안내' },
    { name: '온누리혜택', icon: '🎁', href: '/today/onnuri-event', badge: '환급' },
    { name: '고객안내', icon: '📞', href: 'tel:02-2634-1388', badge: '쉼터/주차' },
  ];

  return (
    <div className="bg-white border-b border-slate-200/80 py-8 shadow-xs">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-sm font-extrabold text-slate-800 tracking-tight mb-5 flex items-center gap-2">
          <span>✨</span>
          <span>편리한 시장 방문을 위한 바로가기 서비스</span>
        </h3>

        {/* 가로 스크롤 & 슬라이딩 아이콘 바 */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
          {services.map((svc) => (
            <Link
              key={svc.name}
              href={svc.href}
              className="group flex flex-col items-center gap-2 shrink-0 p-2 text-center transition-transform hover:-translate-y-1"
            >
              <div className="relative flex size-16 sm:size-18 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/90 text-2xl sm:text-3xl shadow-xs group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:shadow-md transition-all">
                <span>{svc.icon}</span>
                {svc.badge && (
                  <span className="absolute -top-1.5 -right-1.5 rounded-full bg-blue-600 px-1.5 py-0.2 text-[9px] font-bold text-white shadow-xs">
                    {svc.badge}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                {svc.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
