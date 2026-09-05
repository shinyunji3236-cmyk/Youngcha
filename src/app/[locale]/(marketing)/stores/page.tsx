import Link from 'next/link';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { STORE_CATEGORIES } from '@/data/marketData';

export const metadata = {
  title: '점포별 영업 정보 | 영등포 전통시장',
  description: '영등포 전통시장의 카테고리별 상점과 영업 정보를 안내해 드립니다.',
};

export default function StoresPage() {
  const categories = STORE_CATEGORIES;

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
                🏪 STORE DIRECTORY
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Market Shops
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              🏪 점포별 영업 정보
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
              영등포 전통시장 내 위치한 카테고리별 상점과 대표 메뉴, 영업시간을 손쉽게 확인해 보세요.
            </p>
          </div>

          {/* 점포 카테고리 그리드 (상세 페이지 /stores/[slug] 링크 연결) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((store) => (
              <Link
                key={store.id}
                href={`/stores/${store.slug}`}
                className="group flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-16 items-center justify-center rounded-2xl bg-slate-50 text-4xl group-hover:scale-110 group-hover:bg-blue-50 transition-all">
                      {store.icon}
                    </div>
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold border ${store.badgeColor}`}>
                      {store.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-xs font-bold text-slate-400">
                      {store.category}
                    </span>
                    <h3 className="font-extrabold text-xl text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
                      {store.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-600 mt-1.5">
                      {store.countText}
                    </p>
                  </div>

                  {/* 대표 품목 및 영업시간 */}
                  <div className="mt-5 space-y-2 text-xs text-slate-600">
                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                      <span className="font-bold text-slate-700">대표 품목: </span>
                      <span>{store.popularItems.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-[11px] px-1">
                      <span>⏰ 영업시간:</span>
                      <span className="font-semibold text-slate-700">{store.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span>상세 점포 목록</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 편의 서비스 안내 배너 */}
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="bg-blue-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  편의 혜택
                </span>
                <h3 className="text-xl font-extrabold">온누리상품권 100% 가맹 시장</h3>
              </div>
              <p className="text-sm text-slate-300">
                영등포 전통시장의 모든 상점에서 지류, 모바일, 카드형 온누리상품권을 편리하게 사용하실 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md px-6 py-4 border border-white/20 text-center shrink-0">
              <span className="text-xs text-blue-200">상점 위치 및 입점 문의</span>
              <p className="text-lg font-black text-white mt-0.5">02-2634-1388</p>
            </div>
          </div>
        </div>
      </main>

      {/* 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
