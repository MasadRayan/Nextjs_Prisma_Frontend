"use client";

import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle, Eye, Flame, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { NewsItem } from '@/lib/types';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const approvedComments = news.comments?.filter((c) => c.status === 'APPROVED').length ?? 0;
  const timeAgo = formatDistanceToNow(new Date(news.createdAt), { addSuffix: true });

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-border/40 transition-all duration-500 hover:bg-card hover:border-primary/50 hover:shadow-2xl">
      {/* Featured Badge */}
      {news.isFeatured && (
        <div className="absolute left-4 top-4 z-100 flex items-center gap-1.5 rounded-full bg-linear-to-r from-green-700 to-gray-500 px-3 py-1.5 shadow-lg">
          <Flame className="h-3.5 w-3.5 text-white" />
          <span className="text-xs font-semibold text-white uppercase tracking-wide">Trending</span>
        </div>
      )}

      {/* Thumbnail Container */}
      <div className="relative h-48 w-full overflow-hidden bg-muted/60">
        <Image
          src={news.thumbnail ?? '/placeholder.svg'}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {/* Premium Badge */}
        {news.isPremium && (
          <div className="absolute right-4 top-4 z-10 rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 px-2.5 py-1">
            <span className="text-xs font-bold text-white">Premium</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Tags */}
        {news.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            {news.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary/80 transition-all duration-200 hover:bg-primary/25 hover:text-primary"
              >
                {tag}
              </span>
            ))}
            {news.tags.length > 2 && (
              <span className="inline-block text-xs font-medium text-muted-foreground/70 ml-1">
                +{news.tags.length - 2}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="line-clamp-2 text-base font-bold text-foreground leading-snug transition-colors duration-200 group-hover:text-primary">
          {news.title}
        </h3>

        {/* Content Preview */}
        <p className="line-clamp-2 text-sm text-muted-foreground/80 leading-relaxed flex-1">
          {news.content}
        </p>

        {/* Author & Time */}
        <div className="flex items-center gap-3 py-3">
          <div className="h-7 w-7 rounded-full bg-linear-to-br from-primary/70 to-primary/40 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-primary-foreground">
              {news.author?.name.charAt(0).toUpperCase() ?? '?'}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-foreground truncate">{news.author?.name ?? 'Unknown'}</p>
            <p className="text-xs text-muted-foreground/60">{timeAgo}</p>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground/70 shrink-0">
            <div className="flex items-center gap-1 hover:text-primary transition-colors">
              <Eye className="h-3.5 w-3.5" />
              <span className="font-medium">{news.views}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageCircle className="h-3.5 w-3.5" />
              <span className="font-medium">{approvedComments}</span>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <Button
          className="w-full px-4 py-2.5 mt-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
        </Button>
      </div>
    </article>
  );
}
