import Link from 'next/link';

export const Hero = () => {
  const quickLinks = [
    {
      title: '오시는 길 & 코스',
      desc: '위치 안내 및 추천 탐방로',
      href: '/map',
      icon: '📍',
      tag: '지도/교통',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      title: '점포별 영업안내',
      desc: '먹거리, 청과, 정육 등 상점 정보',
      href: '/stores',
      icon: '🏪',
      tag: '상점 디렉토리',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      title: '상인 스토리 매거진',
      desc: '30년 전통과 청년 상인의 이야기',
      href: '/stories',
      icon: '📖',
      tag: '구석구석 이야기',
      color: 'from-amber-600 to-orange-700',
    },
    {
      title: '오늘의 야시장 & 공연',
      desc: '실시간 행사 및 온누리 이벤트',
      href: '/today',
      icon: '🎉',
      tag: 'LIVE 이벤트',
      color: 'from-rose-600 to-red-700',
    },
  ];

  return (
    <section className="
      relative w-full overflow-hidden bg-slate-950 pb-12 text-white
      sm:pb-16
    "
    >
      {/* 1. 메인 배경 비주얼 & 그라데이션 오버레이 */}
      <div
        className="
          absolute inset-0 z-0 scale-105 bg-cover bg-center transition-all
          duration-700
        "
        style={{
          backgroundImage: 'url(\'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=2000&q=85\')',
        }}
      >
        {/* 대한민국 구석구석 감성의 블루/블랙 듀얼 그라데이션 오버레이 */}
        <div className="
          absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/80
          to-blue-950/60
        "
        />
      </div>

      {/* 2. 히어로 텍스트 콘텐츠 */}
      <div className="
        relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16
        sm:px-6 sm:pt-28 sm:pb-24
        lg:px-8
      "
      >
        <div className="max-w-3xl">
          {/* 상단 뱃지 */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="
              inline-flex items-center gap-1.5 rounded-full border
              border-blue-400/30 bg-blue-600/90 px-3.5 py-1 text-xs font-bold
              text-white shadow-sm backdrop-blur-md
            "
            >
              <span className="size-1.5 animate-pulse rounded-full bg-white"></span>
              한국관광공사 선정 테마마켓
            </span>
            <span className="
              inline-flex items-center rounded-full border border-amber-400/30
              bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300
              backdrop-blur-md
            "
            >
              ✨ 대한민국 구석구석 전통시장
            </span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="
            text-3xl/tight font-black tracking-tight drop-shadow-lg
            sm:text-5xl
            lg:text-6xl
          "
          >
            골목마다 피어나는 따뜻한 정과 맛
            <br />
            <span className="
              bg-linear-to-r from-amber-300 via-orange-300 to-yellow-200
              bg-clip-text text-transparent
            "
            >
              영등포 전통시장
            </span>
          </h1>

          {/* 설명 문구 */}
          <p className="
            mt-4 max-w-2xl text-base/relaxed font-normal text-slate-200
            drop-shadow-sm
            sm:mt-6 sm:text-xl
          "
          >
            새벽을 여는 신선한 산지 직송 먹거리부터 신나는 금요 야시장과 문화 버스킹까지,
            대한민국 구석구석이 추천하는 활력 넘치는 전통시장의 매력을 만나보세요!
          </p>

          {/* 메인 CTA 버튼 그룹 */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/map"
              className="
                inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6
                py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30
                transition-all
                hover:bg-blue-500
                active:scale-95
                sm:text-base
              "
            >
              <span>📍 실시간 지도 & 코스 보기</span>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/today"
              className="
                inline-flex items-center gap-2 rounded-2xl border
                border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold
                text-white backdrop-blur-md transition-all
                hover:bg-white/20
                active:scale-95
                sm:text-base
              "
            >
              <span>🎉 오늘의 야시장 정보</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. 대한민국 구석구석 시그니처: 4대 퀵 카테고리 바로가기 카드 바 */}
      <div className="
        relative z-20 mx-auto max-w-7xl px-4
        sm:px-6
        lg:px-8
      "
      >
        <div className="
          -mt-6 grid grid-cols-1 gap-4
          sm:-mt-10 sm:grid-cols-2
          lg:grid-cols-4
        "
        >
          {quickLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="
                group relative flex flex-col justify-between rounded-3xl border
                border-white/40 bg-white/95 p-6 shadow-xl shadow-slate-950/20
                backdrop-blur-md transition-all duration-300
                hover:-translate-y-1.5 hover:bg-white
              "
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="
                    flex size-12 items-center justify-center rounded-2xl
                    bg-slate-100 text-2xl transition-all
                    group-hover:scale-110 group-hover:bg-blue-50
                  "
                  >
                    {link.icon}
                  </span>
                  <span className="
                    rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px]
                    font-bold text-slate-600 transition-colors
                    group-hover:bg-blue-100 group-hover:text-blue-700
                  "
                  >
                    {link.tag}
                  </span>
                </div>
                <h3 className="
                  mt-4 text-lg font-extrabold text-slate-900 transition-colors
                  group-hover:text-blue-600
                "
                >
                  {link.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs/relaxed text-slate-500">
                  {link.desc}
                </p>
              </div>

              <div className="
                mt-5 flex items-center gap-1 text-xs font-bold text-blue-600
                group-hover:text-blue-700
              "
              >
                <span>자세히 보기</span>
                <svg
                  className="
                    size-3.5 transition-transform
                    group-hover:translate-x-1
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
