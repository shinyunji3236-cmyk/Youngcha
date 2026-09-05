import Link from 'next/link';

export const Footer = () => {
  const footerLinks = [
    { label: '오시는 길', href: '/map' },
    { label: '점포안내', href: '/stores' },
    { label: '시장이야기', href: '/stories' },
    { label: '오늘의시장', href: '/today' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-300">
      {/* 1. 상단 공공 포털 안내 영역 */}
      <div className="
        mx-auto max-w-7xl px-4 py-12
        sm:px-6
        lg:px-8
      "
      >
        <div className="
          flex flex-col items-start justify-between gap-8 border-b
          border-slate-800 pb-10
          lg:flex-row lg:items-center
        "
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="
                flex size-10 items-center justify-center rounded-xl bg-blue-600
                text-xl font-bold text-white shadow-md
              "
              >
                🏛️
              </div>
              <div>
                <h2 className="text-xl font-black tracking-tight text-white">
                  영등포 전통시장
                </h2>
                <p className="text-xs font-semibold text-blue-400">
                  대한민국 구석구석 전통시장 테마관
                </p>
              </div>
            </div>
            <p className="mt-3 max-w-lg text-sm/relaxed text-slate-400">
              정성과 정이 가득한 영등포 전통시장에서 신선한 먹거리와 풍성한 문화 이벤트, 상인들의 따뜻한 이야기를 만나보세요.
            </p>
          </div>

          {/* 4대 네비게이션 빠른 링크 */}
          <div className="
            flex flex-wrap gap-2
            sm:gap-4
          "
          >
            {footerLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5
                  text-xs font-bold text-slate-300 transition-all duration-200
                  hover:bg-blue-600 hover:text-white
                  sm:text-sm
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 2. 상세 운영 안내 및 공공 정보 */}
        <div className="
          grid grid-cols-1 gap-6 pt-10 text-xs text-slate-400
          md:grid-cols-3
        "
        >
          <div className="space-y-1.5">
            <h4 className="mb-2 text-sm font-bold text-slate-200">📍 찾아오시는 길</h4>
            <p>서울특별시 영등포구 영등포로 225 (영등포동5가)</p>
            <p className="text-slate-500">지하철 1호선 영등포역 3번/5번 출구 도보 5분</p>
          </div>

          <div className="space-y-1.5">
            <h4 className="mb-2 text-sm font-bold text-slate-200">📞 고객지원센터 & 상인회</h4>
            <p className="font-bold text-slate-300">대표전화: 02-2634-1388</p>
            <p className="text-slate-500">운영시간: 09:00 ~ 21:00 (연중무휴 / 점포별 상이)</p>
          </div>

          <div className="space-y-1.5">
            <h4 className="mb-2 text-sm font-bold text-slate-200">💳 결제 및 편의 안내</h4>
            <p>온누리상품권(지류/모바일/카드) 전 점포 사용 가능</p>
            <p className="text-slate-500">영등포 전통시장 공영주차장 및 고객 쉼터 완비</p>
          </div>
        </div>

        {/* 3. 하단 저작권 및 고지문구 */}
        <div className="
          mt-10 flex flex-col items-center justify-between gap-4 border-t
          border-slate-900 pt-6 text-center text-xs text-slate-600
          sm:flex-row sm:text-left
        "
        >
          <p>
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            영등포 전통시장 공식 안내 플랫폼. All rights reserved.
          </p>
          <p className="text-slate-500">
            대한민국 구석구석 · 한국관광공사 국내 여행지 테마 서비스 연계
          </p>
        </div>
      </div>
    </footer>
  );
};
