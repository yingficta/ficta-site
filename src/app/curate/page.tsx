"use client";

import { useEffect, useState, useCallback } from "react";

function useIsLocalhost() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    setOk(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
  }, []);
  return ok;
}

const WORKER_URL = "https://fable-friends-worker.charlieevett.workers.dev";
const ADMIN_KEY = "letmecurate";

type ItemType = "character" | "story";

interface GalleryItem {
  id: string;
  type: ItemType;
  image_url: string;
  description?: string;
  words?: string[];
  opener?: string;
  content?: string;
  created_at: string;
  featured: boolean;
  curated_at: number | null;
}

export default function CuratePage() {
  const isLocalhost = useIsLocalhost();
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | ItemType>("all");
  const [toggling, setToggling] = useState<Set<string>>(new Set());

  const fetchGallery = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${WORKER_URL}/admin/gallery`, {
        headers: { "x-admin-key": ADMIN_KEY },
      });
      if (res.status === 401) { setError("Unauthorized."); return; }
      if (!res.ok) { setError("Failed to load gallery."); return; }
      const data = await res.json() as { characters: GalleryItem[]; stories: GalleryItem[] };
      setItems([...data.characters, ...data.stories]);
    } catch {
      setError("Network error.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLocalhost) fetchGallery();
  }, [isLocalhost, fetchGallery]);

  const toggle = async (item: GalleryItem) => {
    if (toggling.has(item.id)) return;
    setToggling(prev => new Set(prev).add(item.id));
    try {
      const res = await fetch(`${WORKER_URL}/admin/featured/toggle`, {
        method: "POST",
        headers: { "x-admin-key": ADMIN_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ item_id: item.id, item_type: item.type }),
      });
      if (!res.ok) return;
      const { featured } = await res.json() as { featured: boolean };
      setItems(prev => prev.map(i =>
        i.id === item.id
          ? { ...i, featured, curated_at: featured ? Math.floor(Date.now() / 1000) : null }
          : i
      ));
    } finally {
      setToggling(prev => { const s = new Set(prev); s.delete(item.id); return s; });
    }
  };

  if (!isLocalhost) return null;

  const visible = items.filter(i => filter === "all" || i.type === filter);
  const featuredCount = items.filter(i => i.featured).length;
  const charFeatured = items.filter(i => i.featured && i.type === "character").length;
  const storyFeatured = items.filter(i => i.featured && i.type === "story").length;

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-card border-b border-border px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-lg tracking-tight">Curation</h1>
          <span className="text-xs text-muted-foreground font-mono">
            {featuredCount} selected ({charFeatured} characters · {storyFeatured} stories)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {(["all", "character", "story"] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {f === "all" ? `All (${items.length})` : f === "character" ? `Characters (${items.filter(i => i.type === "character").length})` : `Stories (${items.filter(i => i.type === "story").length})`}
            </button>
          ))}
          <button
            onClick={() => fetchGallery()}
            disabled={loading}
            className="ml-2 px-4 py-1.5 rounded-full text-xs font-medium bg-foreground text-background hover:opacity-80 disabled:opacity-40 transition-opacity"
          >
            {loading ? "Updating…" : "Update"}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {loading && (
          <div className="flex items-center justify-center py-24 text-muted-foreground text-sm">
            Loading…
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center py-24 text-destructive text-sm">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {visible.map(item => (
              <button
                key={item.id}
                onClick={() => toggle(item)}
                disabled={toggling.has(item.id)}
                className={`relative rounded-2xl overflow-hidden text-left transition-all duration-150 group
                  ${item.featured
                    ? "ring-3 ring-primary shadow-lg scale-[1.02]"
                    : "ring-1 ring-border hover:ring-primary/40 hover:scale-[1.01]"
                  }
                  ${toggling.has(item.id) ? "opacity-60" : ""}
                `}
              >
                <div className={`w-full bg-muted overflow-hidden ${item.type === "story" ? "aspect-[4/3]" : "aspect-square"}`}>
                  <img
                    src={item.image_url}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {item.featured && (
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                <div className={`absolute top-2 left-2 px-1.5 py-0.5 rounded-full text-[9px] font-mono
                  ${item.type === "character" ? "bg-primary/80 text-white" : "bg-secondary/80 text-white"}`}>
                  {item.type === "character" ? "char" : "story"}
                </div>

                <div className="p-2 bg-card space-y-1">
                  {item.type === "character" && item.words && (
                    <div className="flex flex-wrap gap-0.5">
                      {item.words.map(w => (
                        <span key={w} className="text-[9px] font-mono text-primary bg-primary/10 px-1 py-0.5 rounded-full">{w}</span>
                      ))}
                    </div>
                  )}
                  {item.type === "character" ? (
                    <p className="text-[10px] text-foreground/70 leading-snug line-clamp-2">{item.description}</p>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-[10px] font-medium text-foreground leading-snug">{item.opener}</p>
                      <p className="text-[10px] text-foreground/60 leading-snug line-clamp-4">{item.content}</p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
