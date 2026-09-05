'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';
import { STORE_CATEGORIES } from '@/data/marketData';

type StoreCategoryProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export default function StoreCategoryPage({ params }: StoreCategoryProps) {
  const { slug } = use(params);
  const category = STORE_CATEGORIES.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const otherCategories = STORE_CATEGORIES.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />

      <main className="py-8 sm:py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* 브레드크럼 */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
              <Link href="/" className="hover:text-blue-600">홈</Link>
              <span>&gt;</span>
              <Link href="/stores" className="hover:text-blue-600">점포안내</Link>
              <span>&gt;</span>
              <span className="text-slate-900 font-bold">{category.name}</span>
            </div>

            {/* 카테고리 탭 리스트 */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none text-sm font-bold text-slate-600">
              <Link href="/stores" className="hover:text-blue-600 shrink-0 pb-1">전체보기</Link>
              {STORE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/stores/${cat.slug}`}
                  className={`shrink-0 pb-1 ${
                    cat.slug === slug
                      ? 'text-blue-600 border-b-2 border-blue-600 font-black'
                      : 'hover:text-blue-600'
                  }`}
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 카테고리 헤더 배너 */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 shadow-xl">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35"
              style={{ backgroundImage: `url('${category.image}')` }}
            />
            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{category.icon}</span>
                <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold border ${category.badgeColor}`}>
                  {category.badge}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                {category.name} 상점 모음
              </h1>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {category.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                {category.popularItems.map((item, idx) => (
                  <span key={idx} className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/20">
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 소속 상점 상세 카드 리스트 */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-900">
              소속 대표 점포 목록 ({category.stores.length}곳)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.stores.map((store, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-5"
                >
                  <div className="w-full sm:w-36 h-36 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={store.image}
                      alt={store.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-black text-slate-900">{store.name}</h3>
                        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">
                          {store.location}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{store.desc}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                      <p><span className="font-bold text-slate-800">대표메뉴:</span> {store.menu}</p>
                      <p><span className="font-bold text-slate-800">영업시간:</span> {store.hours}</p>
                      <p><span className="font-bold text-slate-800">문의전화:</span> <a href={`tel:${store.phone}`} className="text-blue-600 font-bold">{store.phone}</a></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 다른 카테고리 둘러보기 */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-lg font-black text-slate-900 mb-4">다른 점포 카테고리 둘러보기</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherCategories.map((other) => (
                <Link
                  key={other.id}
                  href={`/stores/${other.slug}`}
                  className="rounded-2xl bg-white p-4 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-3"
                >
                  <span className="text-2xl">{other.icon}</span>
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900">{other.name}</h4>
                    <p className="text-xs text-slate-500">{other.countText}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
