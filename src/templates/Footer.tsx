import Link from 'next/link';

export const Footer = () => {
  const footerLinks = [
    { label: '오시는 길', href: '/map' },
    { label: '점포안내', href: '/stores' },
    { label: '시장이야기', href: '/stories' },
    { label: '오늘의시장', href: '/today' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      {/* 1. 상단 안내 영역 */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl shadow-md">
                🏛️
              </div>
              <div>
                <h2 className="text-xl font-black text-white tracking-tight">
                  영등포 전통시장
                </h2>
                <p className="text-xs text-blue-400 font-semibold">
                  공식 안내 및 상인회 포털
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-3 max-w-lg leading-relaxed">
              정성과 정이 가득한 영등포 전통시장에서 신선한 먹거리와 풍성한 문화 이벤트, 상인들의 따뜻한 이야기를 만나보세요.
            </p>
          </div>

          {/* 4대 네비게이션 빠른 링크 */}
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl bg-slate-900/90 hover:bg-blue-600 hover:text-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-300 border border-slate-800 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 2. 상세 운영 안내 및 상인회 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-xs text-slate-400">
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-200 text-sm mb-2">📍 찾아오시는 길</h4>
            <p>서울특별시 영등포구 영등포로 225 (영등포동5가)</p>
            <p className="text-slate-500">지하철 1호선 영등포역 3번/5번 출구 도보 5분</p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-200 text-sm mb-2">📞 고객지원센터 & 상인회</h4>
            <p className="text-slate-300 font-bold">대표전화: 02-2634-1388</p>
            <p className="text-slate-500">운영시간: 09:00 ~ 21:00 (연중무휴 / 점포별 상이)</p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-200 text-sm mb-2">💳 결제 및 편의 안내</h4>
            <p>온누리상품권(지류/모바일/카드) 전 점포 사용 가능</p>
            <p className="text-slate-500">영등포 전통시장 공영주차장 및 고객 쉼터 완비</p>
          </div>
        </div>

        {/* 3. 하단 저작권 및 고지문구 */}
        <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} 영등포 전통시장 공식 홈페이지. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/map" className="hover:text-slate-400">오시는 길</Link>
            <span>|</span>
            <Link href="/stores" className="hover:text-slate-400">점포안내</Link>
            <span>|</span>
            <Link href="/stories" className="hover:text-slate-400">시장이야기</Link>
            <span>|</span>
            <Link href="/today" className="hover:text-slate-400">오늘의시장</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
