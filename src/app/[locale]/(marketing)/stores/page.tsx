import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata = {
  title: '점포별 영업 정보 | 영등포 전통시장',
  description: '영등포 전통시장의 카테고리별 상점과 영업 정보를 안내해 드립니다.',
};

export default function StoresPage() {
  const stores = [
    {
      icon: '🍞',
      name: '떡 / 제과',
      countText: '가마솥 할머니 떡집 외 12곳',
      category: '식품 · 전통간식',
      popular: '수제 찹쌀떡, 모시송편, 옛날 꽈배기',
      hours: '06:00 ~ 20:00',
      badge: '대표 먹거리',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
      icon: '🥩',
      name: '정육 / 수산',
      countText: '신선 축산 유통 외 8곳',
      category: '신선식품 · 축수산',
      popular: '한우, 암퇘지 생고기, 활어, 건어물',
      hours: '07:00 ~ 21:00',
      badge: '산지 직송',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    },
    {
      icon: '🍎',
      name: '청과 / 야채',
      countText: '수원 상회 외 15곳',
      category: '농산물 · 제철과일',
      popular: '제철 사과, 친환경 나물, 유기농 채소',
      hours: '06:30 ~ 21:00',
      badge: '당일 수확',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
      icon: '☕',
      name: '식당 / 카페',
      countText: '옛 방앗간 카페 외 10곳',
      category: '음식점 · 쉼터',
      popular: '순대국밥, 전통 팥죽, 곡물 라떼, 핫바',
      hours: '09:00 ~ 22:00',
      badge: '핫플레이스',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-slate-50">
      {/* 글로벌 네비게이션 */}
      <Navbar />

      <main className="
        py-12
        sm:py-16
      "
      >
        <div className="
          mx-auto max-w-7xl space-y-10 px-4
          sm:space-y-12 sm:px-6
          lg:px-8
        "
        >
          {/* 상단 타이틀 영역 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="
                inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5
                text-xs font-bold text-blue-800
              "
              >
                🏪 STORE DIRECTORY
              </span>
              <span className="
                text-xs font-bold tracking-wider text-slate-500 uppercase
              "
              >
                Market Shops
              </span>
            </div>
            <h1 className="
              mt-2 text-2xl font-extrabold tracking-tight text-slate-900
              sm:text-4xl
            "
            >
              🏪 점포별 영업 정보
            </h1>
            <p className="
              mt-2 max-w-2xl text-sm text-slate-600
              sm:text-base
            "
            >
              영등포 전통시장 내 위치한 카테고리별 상점과 대표 메뉴, 영업시간을 손쉽게 확인해 보세요.
            </p>
          </div>

          {/* 점포 카테고리 그리드 */}
          <div className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
          >
            {stores.map(store => (
              <div
                key={store.name}
                className="
                  group flex cursor-pointer flex-col justify-between rounded-3xl
                  border border-slate-200 bg-white p-6 shadow-md
                  shadow-slate-200/50 transition-all duration-300
                  hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl
                  sm:p-7
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="
                      flex size-16 items-center justify-center rounded-2xl
                      bg-slate-50 text-4xl transition-all
                      group-hover:scale-110 group-hover:bg-blue-50
                    "
                    >
                      {store.icon}
                    </div>
                    <span className={`
                      inline-flex items-center rounded-full border px-2.5 py-0.5
                      text-[11px] font-bold
                      ${store.badgeColor}
                    `}
                    >
                      {store.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-bold text-slate-400">
                      {store.category}
                    </span>
                    <h3 className="
                      mt-1 text-xl font-extrabold text-slate-900
                      transition-colors
                      group-hover:text-blue-600
                    "
                    >
                      {store.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-bold text-blue-600">
                      {store.countText}
                    </p>
                  </div>

                  {/* 대표 품목 및 영업시간 */}
                  <div className="mt-5 space-y-2 text-xs text-slate-600">
                    <div className="
                      rounded-xl border border-slate-100 bg-slate-50 p-2.5
                    "
                    >
                      <span className="font-bold text-slate-700">대표 품목: </span>
                      <span>{store.popular}</span>
                    </div>
                    <div className="
                      flex items-center gap-1.5 px-1 text-[11px] text-slate-500
                    "
                    >
                      <span>⏰ 영업시간:</span>
                      <span className="font-semibold text-slate-700">{store.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="
                  mt-6 flex items-center justify-between border-t
                  border-slate-100 pt-4 text-xs font-bold text-slate-500
                  transition-colors
                  group-hover:text-blue-600
                "
                >
                  <span>상세 점포 목록</span>
                  <span className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                  >
                    ➔
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 편의 서비스 안내 배너 */}
          <div className="
            flex flex-col items-center justify-between gap-6 rounded-3xl
            bg-linear-to-r from-blue-900 to-slate-900 p-8 text-white shadow-xl
            md:flex-row
          "
          >
            <div className="
              space-y-2 text-center
              md:text-left
            "
            >
              <div className="
                flex items-center justify-center gap-2
                md:justify-start
              "
              >
                <span className="
                  rounded-full bg-blue-500 px-2.5 py-0.5 text-[11px] font-bold
                  text-white
                "
                >
                  편의 혜택
                </span>
                <h3 className="text-xl font-extrabold">온누리상품권 100% 가맹 시장</h3>
              </div>
              <p className="text-sm text-slate-300">
                영등포 전통시장의 모든 상점에서 지류, 모바일, 카드형 온누리상품권을 편리하게 사용하실 수 있습니다.
              </p>
            </div>
            <div className="
              shrink-0 rounded-2xl border border-white/20 bg-white/10 px-6 py-4
              text-center backdrop-blur-md
            "
            >
              <span className="text-xs text-blue-200">상점 위치 및 입점 문의</span>
              <p className="mt-0.5 text-lg font-black text-white">02-2634-1388</p>
            </div>
          </div>
        </div>
      </main>

      {/* 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
