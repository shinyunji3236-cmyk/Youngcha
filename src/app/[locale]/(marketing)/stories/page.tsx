import Link from 'next/link';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { STORIES_DATA } from '@/data/marketData';

export const metadata = {
  title: '시장 이야기 | 영등포 전통시장',
  description: '영등포 전통시장 상인분들의 진솔하고 정성 가득한 이야기를 들려드립니다.',
};

export default function StoriesPage() {
  const stories = STORIES_DATA;

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
                📖 MARKET STORIES
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                People & Stories
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              📖 시장 이야기 (점포 스토리)
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
              전통시장 골목을 지켜온 베테랑 상인부터 새로운 활력을 불어넣는 청년 상인까지, 정성 가득한 삶의 이야기를 만나보세요.
            </p>
          </div>

          {/* 스토리 매거진 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex flex-col justify-between rounded-3xl bg-white overflow-hidden border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* 대표 썸네일 이미지 & 뱃지 */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <span className={`absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold shadow-md ${story.badgeColor}`}>
                      {story.category}
                    </span>
                    <span className="absolute bottom-3 right-3 rounded-md bg-black/60 backdrop-blur-md px-2 py-0.5 text-[11px] font-medium text-white">
                      ⏱️ {story.readTime}
                    </span>
                  </div>

                  {/* 텍스트 본문 */}
                  <div className="p-6 sm:p-7">
                    <span className="text-xs font-bold text-blue-600">
                      {story.author}
                    </span>
                    <h2 className="text-xl font-black text-slate-900 mt-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {story.title}
                    </h2>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                      {story.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>스토리 전문 읽기</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 하단 스토리 제보 안내 배너 */}
          <div className="rounded-3xl bg-white p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                ✨ 당신의 정겨운 시장 이야기를 들려주세요
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                영등포 전통시장에서의 소중한 추억이나 인터뷰하고 싶은 상인 점포를 추천해 주시면 매거진에 소개해 드립니다.
              </p>
            </div>
            <a
              href="tel:02-2634-1388"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 hover:bg-blue-600 text-white text-xs sm:text-sm font-bold px-5 py-3 transition-colors shrink-0"
            >
              <span>스토리 제보 문의</span>
            </a>
          </div>
        </div>
      </main>

      {/* 글로벌 푸터 */}
      <Footer />
    </div>
  );
}
