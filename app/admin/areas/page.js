"use client";
import React, { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, X, Upload, MapPin, TrendingUp, Info } from "lucide-react";
import Image from "next/image";

export default function AreasAdmin() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingArea, setEditingArea] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

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

  const emptyArea = {
    name: "",
    slug: "",
    tagline: "",
    price: "",
    stats: "",
    summary: "",
    bullets: ["", "", ""],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  };

  const [formData, setFormData] = useState(emptyArea);

  useEffect(() => {
    fetchAreas();
  }, []);

  const fetchAreas = async () => {
    try {
      const res = await fetch("/api/areas");
      const data = await res.json();
      setAreas(data.areas || []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const handleEdit = (area) => {
    setEditingArea(area);
    setFormData(area);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingArea(null);
    setFormData(emptyArea);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch("/api/areas", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });
      fetchAreas();
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingArea ? "PUT" : "POST";
    try {
      const res = await fetch("/api/areas", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchAreas();
      }
    } catch (err) { console.error(err); }
  };

  if (loading) return null;

  return (
    <div style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '80px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
           <h1 style={{ fontSize: '48px', fontWeight: '400', color: theme.surface, marginBottom: '12px' }}>Regional Matrix</h1>
           <p style={{ color: theme.accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', fontStyle: 'italic' }}>Strategic Location Orchestration</p>
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
        }}>Deploy New Region</button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '40px' }}>
        {areas.map((area) => (
          <div key={area._id} style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(4,36,27,0.06)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
               <img src={area.image} alt={area.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                 <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '400', color: theme.surface, marginBottom: '6px' }}>{area.name}</h3>
                    <p style={{ color: theme.accent, fontSize: '12px', fontStyle: 'italic' }}>{area.tagline}</p>
                 </div>
                 <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleEdit(area)} style={{ padding: '12px', background: theme.bg, color: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer' }}><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(area._id)} style={{ padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer', color: 'rgba(6,78,59,0.3)' }}><Trash2 size={14} /></button>
                 </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                 <div style={{ flex: '1', padding: '15px', background: 'rgba(6,78,59,0.03)', borderRadius: '2px' }}>
                    <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: 'rgba(6,78,59,0.4)', marginBottom: '4px' }}>Benchmark</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: theme.surface }}>{area.price}</span>
                 </div>
                 <div style={{ flex: '1', padding: '15px', background: 'rgba(212,175,55,0.05)', borderRadius: '2px' }}>
                    <span style={{ display: 'block', fontSize: '9px', textTransform: 'uppercase', color: theme.accent, marginBottom: '4px' }}>Yield Alpha</span>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: theme.surface }}>{area.stats}</span>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: '0', background: theme.modalOverlay, backdropFilter: 'blur(15px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ background: theme.bg, width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', borderRadius: '4px', padding: '60px', boxShadow: '0 50px 100px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                  <h3 style={{ fontSize: '36px', color: theme.surface, fontWeight: '400' }}>Region Intelligence</h3>
                  <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', color: theme.surface, cursor: 'pointer', opacity: 0.3 }}><X size={32} /></button>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Name</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="Greater Noida" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                     </div>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>URI Fragment</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="greater-noida" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required />
                     </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Benchmark Value</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="INR 1.45 Cr" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                     </div>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Yield Stats</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="240% Growth" value={formData.stats} onChange={e => setFormData({ ...formData, stats: e.target.value })} />
                     </div>
                  </div>

                  <div>
                     <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Regional Summary</label>
                     <textarea style={{ width: '100%', padding: '20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font, height: '100px', resize: 'none' }} value={formData.summary} onChange={e => setFormData({ ...formData, summary: e.target.value })} />
                  </div>

                  <div style={{ paddingTop: '40px', borderTop: `1px solid ${theme.border}`, display: 'flex', gap: '20px' }}>
                     <button type="submit" style={{ flex: '2', background: theme.surface, color: theme.accent, padding: '20px', borderRadius: '2px', border: 'none', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer' }}>Broadcast Region</button>
                     <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: '1', background: 'transparent', border: `1px solid ${theme.border}`, color: theme.surface, padding: '20px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>Abort</button>
                  </div>
              </form>
          </div>
        </div>
      )}
    </div>
  );
}
