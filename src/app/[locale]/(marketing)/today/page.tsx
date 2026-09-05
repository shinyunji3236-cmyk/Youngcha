import Link from 'next/link';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { EVENTS_DATA } from '@/data/marketData';

export const metadata = {
  title: '오늘의 시장 (야시장 & 공연) | 영등포 전통시장',
  description: '영등포 전통시장에서 펼쳐지는 실시간 야시장과 문화 공연, 혜택 이벤트를 확인하세요.',
};

export default function TodayPage() {
  const events = EVENTS_DATA;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* 글로벌 네비게이션 */}
      <Navbar />

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* 상단 타이틀 영역 */}
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-800">
                🎉 EVENTS & FESTIVALS
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Live News
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              🎉 오늘의 시장 (야시장 & 공연 정보)
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
              오늘 영등포 전통시장에서 펼쳐지는 생생한 야시장과 문화 공연 소식, 풍성한 환급 이벤트를 전합니다.
            </p>
          </div>

          {/* 실시간 이벤트 2단 비주얼 카드 (상세 페이지 링크 연결) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((evt, idx) => (
              <Link
                key={evt.id}
                href={`/today/${evt.slug}`}
                className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ${
                  idx === 0
                    ? 'bg-gradient-to-br from-amber-600 via-orange-600 to-rose-700 shadow-orange-500/20'
                    : 'bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 shadow-blue-500/20'
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1 text-xs font-extrabold text-white border border-white/20 backdrop-blur-md">
                      <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      {evt.status}
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-amber-100 backdrop-blur-md">
                      {evt.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black mt-6 tracking-tight group-hover:text-amber-200 transition-colors">
                    {evt.title}
                  </h2>
                  <p className="mt-4 text-slate-100 text-sm sm:text-base leading-relaxed font-normal">
                    {evt.summary}
                  </p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span>📍 {evt.location}</span>
                  </div>
                  <span className="font-bold text-white group-hover:underline">상세보기 ➔</span>
                </div>

                <div className="absolute -bottom-12 -right-12 size-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              </Link>
            ))}
          </div>

          {/* 하단: 행사 관람 및 방문 안내 팁 */}
          <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span>💡</span> 야시장 및 행사 방문 관람 안내
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">야외 테이블 & 쉼터 운영</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  중앙 광장에 자유롭게 취식 가능한 야외 파라솔 테이블과 쓰레기 분리수거 부스가 마련되어 있습니다.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">영수증 합산 및 환급</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  당일 시장 내 여러 점포에서 구매한 카드/현금영수증을 합산하여 5만 원 단위로 환급 신청이 가능합니다.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <span className="font-bold text-slate-800 block mb-1">우천 시 행사 일정</span>
                <p className="text-xs text-slate-500 leading-relaxed">
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
