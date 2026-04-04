"use client";
import React, { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, X, Upload, Info, MessageSquare, Clock, Tag } from "lucide-react";
import Image from "next/image";

export default function StoriesAdmin() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingStory, setEditingStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const theme = {
    bg: "#f0ede6",
    surface: "#04241b",
    accent: "#d4af37",
    textMain: "#04241b",
    textLight: "#f5f0e8",
    font: "'Georgia', 'Times New Roman', serif",
    border: "rgba(6, 78, 59, 0.1)",
    modalOverlay: "rgba(4, 36, 27, 0.8)",
  };

  const emptyStory = {
    title: "",
    slug: "",
    tag: "Market Insights",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    time: "2 days ago",
    excerpt: "",
    body: ["", ""],
  };

  const [formData, setFormData] = useState(emptyStory);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await fetch("/api/stories");
      const data = await res.json();
      setStories(data.stories || []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleEdit = (story) => {
    setEditingStory(story);
    setFormData(story);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingStory(null);
    setFormData(emptyStory);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch("/api/stories", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });
      fetchStories();
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingStory ? "PUT" : "POST";
    try {
      const res = await fetch("/api/stories", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchStories();
      }
    } catch (err) { console.error(err); }
  };

  if (loading) return null;

  return (
    <div style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '80px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
           <h1 style={{ fontSize: '48px', fontWeight: '400', color: theme.surface, marginBottom: '12px' }}>Editorial Insights</h1>
           <p style={{ color: theme.accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', fontStyle: 'italic' }}>Strategic Knowledge Hub Orchestration</p>
        </div>
        <button onClick={handleAddNew} style={{
          background: theme.surface,
          color: theme.accent,
          padding: '18px 40px',
          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '11px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontFamily: theme.font
        }}>Draft New Insight</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '40px' }}>
        {stories.map((story) => (
          <div key={story._id} style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(4,36,27,0.06)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
               <img src={story.image} alt={story.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               <div style={{ position: 'absolute', top: '15px', left: '15px', background: theme.surface, color: theme.accent, padding: '4px 12px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', borderRadius: '100px' }}>{story.tag}</div>
            </div>
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                 <div style={{ flex: '1' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '400', color: theme.surface, marginBottom: '6px' }}>{story.title}</h3>
                    <p style={{ color: 'rgba(6,78,59,0.4)', fontSize: '12px', letterSpacing: '1px' }}>Published {story.time}</p>
                 </div>
                 <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleEdit(story)} style={{ padding: '12px', background: theme.bg, color: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer' }}><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(story._id)} style={{ padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer', color: 'rgba(6,78,59,0.3)' }}><Trash2 size={14} /></button>
                 </div>
              </div>
              <p style={{ color: 'rgba(6,78,59,0.5)', fontSize: '14px', lineHeight: '1.6', fontStyle: 'italic', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {story.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: '0', background: theme.modalOverlay, backdropFilter: 'blur(15px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ background: theme.bg, width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', borderRadius: '4px', padding: '60px', boxShadow: '0 50px 100px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                  <h3 style={{ fontSize: '36px', color: theme.surface, fontWeight: '400' }}>Insight Blueprint</h3>
                  <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', color: theme.surface, cursor: 'pointer', opacity: 0.3 }}><X size={32} /></button>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Headline</label>
                    <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '20px', fontFamily: theme.font }} placeholder="Greater Noida: The Powerhouse..." value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Editorial Tag</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} />
                     </div>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>URI Fragment</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required />
                     </div>
                  </div>

                  <div>
                     <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Summary Excerpt</label>
                     <textarea style={{ width: '100%', padding: '20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font, height: '80px', resize: 'none' }} value={formData.excerpt} onChange={e => setFormData({ ...formData, excerpt: e.target.value })} />
                  </div>

                  <div style={{ paddingTop: '40px', borderTop: `1px solid ${theme.border}`, display: 'flex', gap: '20px' }}>
                     <button type="submit" style={{ flex: '2', background: theme.surface, color: theme.accent, padding: '20px', borderRadius: '2px', border: 'none', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer' }}>Publish Insight</button>
                     <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: '1', background: 'transparent', border: `1px solid ${theme.border}`, color: theme.surface, padding: '20px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>Discard Draft</button>
                  </div>
              </form>
          </div>
        </div>
      )}
    </div>
  );
}
