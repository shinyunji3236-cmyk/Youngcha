import { Footer } from '@/templates/Footer';
import { Navbar } from '@/templates/Navbar';

export const metadata = {
  title: '오늘의 시장 (야시장 & 공연) | 영등포 전통시장',
  description: '영등포 전통시장에서 펼쳐지는 실시간 야시장과 문화 공연, 혜택 이벤트를 확인하세요.',
};

export default function TodayPage() {
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
                🎉 EVENTS & FESTIVALS
              </span>
              <span className="
                text-xs font-bold tracking-wider text-slate-500 uppercase
              "
              >
                Live News
              </span>
            </div>
            <h1 className="
              mt-2 text-2xl font-extrabold tracking-tight text-slate-900
              sm:text-4xl
            "
            >
              🎉 오늘의 시장 (야시장 & 공연 정보)
            </h1>
            <p className="
              mt-2 max-w-2xl text-sm text-slate-600
              sm:text-base
            "
            >
              오늘 영등포 전통시장에서 펼쳐지는 생생한 야시장과 문화 공연 소식, 풍성한 환급 이벤트를 전합니다.
            </p>
          </div>

          {/* 실시간 이벤트 2단 비주얼 카드 */}
          <div className="
            grid grid-cols-1 gap-8
            md:grid-cols-2
          "
          >
            {/* 카드 1: 금요 달빛 야시장 & 버스킹 */}
            <div className="
              group relative flex flex-col justify-between overflow-hidden
              rounded-3xl bg-linear-to-br from-amber-600 via-orange-600
              to-rose-700 p-8 text-white shadow-xl shadow-orange-500/20
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-2xl
              sm:p-10
            "
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="
                    inline-flex items-center gap-1.5 rounded-full border
                    border-white/20 bg-black/40 px-3.5 py-1 text-xs
                    font-extrabold text-white backdrop-blur-md
                  "
                  >
                    <span className="
                      size-2 animate-pulse rounded-full bg-emerald-400
                    "
                    >
                    </span>
                    LIVE 진행중
                  </span>
                  <span className="
                    rounded-full bg-white/20 px-3 py-1 text-xs font-bold
                    text-amber-100 backdrop-blur-md
                  "
                  >
                    매주 금요일
                  </span>
                </div>

                <h2 className="
                  mt-6 text-2xl font-black tracking-tight
                  sm:text-3xl
                "
                >
                  금요 달빛 야시장 & 버스킹 공연
                </h2>
                <p className="
                  mt-4 text-sm/relaxed font-normal text-amber-100
                  sm:text-base
                "
                >
                  매주 금요일 밤! 다양한 길거리 푸드트럭과 버스킹 뮤지션들의 신나는 공연이 펼쳐집니다. 가족, 연인과 함께 정겨운 밤 산책을 즐겨보세요!
                </p>
              </div>

              <div className="
                relative z-10 mt-8 flex flex-col justify-between gap-2 border-t
                border-white/20 pt-6 text-xs font-semibold text-amber-100
                sm:flex-row sm:items-center sm:text-sm
              "
              >
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span>장소: 시장 중앙 광장 특별무대</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>⏰</span>
                  <span>시간: 18:00 ~ 22:00</span>
                </div>
              </div>

              {/* 배경 장식 원형 효과 */}
              <div className="
                pointer-events-none absolute -right-12 -bottom-12 size-48
                rounded-full bg-white/10 blur-2xl
              "
              />
            </div>

            {/* 카드 2: 온누리상품권 환급 이벤트 */}
            <div className="
              group relative flex flex-col justify-between overflow-hidden
              rounded-3xl bg-linear-to-br from-blue-700 via-indigo-800
              to-slate-900 p-8 text-white shadow-xl shadow-blue-500/20
              transition-all duration-300
              hover:-translate-y-1.5 hover:shadow-2xl
              sm:p-10
            "
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="
                    inline-flex items-center gap-1.5 rounded-full
                    bg-emerald-500/90 px-3.5 py-1 text-xs font-extrabold
                    text-white shadow-md
                  "
                  >
                    <span>🎁</span>
                    {' '}
                    이번 주 주말 혜택
                  </span>
                  <span className="
                    rounded-full bg-white/10 px-3 py-1 text-xs font-bold
                    text-slate-300 backdrop-blur-md
                  "
                  >
                    선착순 환급
                  </span>
                </div>

                <h2 className="
                  mt-6 text-2xl font-black tracking-tight
                  sm:text-3xl
                "
                >
                  온누리상품권 환급 이벤트
                </h2>
                <p className="
                  mt-4 text-sm/relaxed font-normal text-slate-200
                  sm:text-base
                "
                >
                  전통시장에서 5만 원 이상 구매 시 온누리상품권 1만 원권을 현장에서 즉시 환급해 드립니다. 알뜰하고 즐거운 전통시장 쇼핑을 경험하세요.
                </p>
              </div>

              <div className="
                relative z-10 mt-8 flex flex-col justify-between gap-2 border-t
                border-white/20 pt-6 text-xs font-semibold text-slate-300
                sm:flex-row sm:items-center sm:text-sm
              "
              >
                <div className="flex items-center gap-1.5">
                  <span>📍</span>
                  <span>장소: 고객지원센터 1층 접수처</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>⏰</span>
                  <span>기간: ~ 예산 소진 시까지 (당일 영수증 합산 가능)</span>
                </div>
              </div>

              {/* 배경 장식 원형 효과 */}
              <div className="
                pointer-events-none absolute -right-12 -bottom-12 size-48
                rounded-full bg-white/10 blur-2xl
              "
              />
            </div>
          </div>

          {/* 하단: 행사 관람 및 방문 안내 팁 */}
          <div className="
            space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm
            sm:p-8
          "
          >
            <h3 className="
              flex items-center gap-2 text-lg font-black text-slate-900
            "
            >
              <span>💡</span>
              {' '}
              야시장 및 행사 방문 관람 안내
            </h3>
            <div className="
              grid grid-cols-1 gap-4 text-xs text-slate-600
              sm:text-sm
              md:grid-cols-3
            "
            >
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="mb-1 block font-bold text-slate-800">야외 테이블 & 쉼터 운영</span>
                <p className="text-xs/relaxed text-slate-500">
                  중앙 광장에 자유롭게 취식 가능한 야외 파라솔 테이블과 쓰레기 분리수거 부스가 마련되어 있습니다.
                </p>
              </div>
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="mb-1 block font-bold text-slate-800">영수증 합산 및 환급</span>
                <p className="text-xs/relaxed text-slate-500">
                  당일 시장 내 여러 점포에서 구매한 카드/현금영수증을 합산하여 5만 원 단위로 환급 신청이 가능합니다.
                </p>
              </div>
              <div className="
                rounded-2xl border border-slate-100 bg-slate-50 p-4
              "
              >
                <span className="mb-1 block font-bold text-slate-800">우천 시 행사 일정</span>
                <p className="text-xs/relaxed text-slate-500">
                  영등포 전통시장은 전 구역에 현대식 비가림 아케이드가 설치되어 있어 우천 시에도 정상 진행됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
