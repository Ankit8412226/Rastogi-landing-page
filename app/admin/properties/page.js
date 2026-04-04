"use client";
import React, { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, X, Upload, Check, Building2, MapPin, Tag, Info, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PropertiesAdmin() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProperty, setEditingProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Theme matching login.js and layout.js
  const theme = {
    bg: "#f0ede6",
    surface: "#04241b",
    surfaceLight: "#063a2d",
    accent: "#d4af37",
    textMain: "#04241b",
    textLight: "#f5f0e8",
    font: "'Georgia', 'Times New Roman', serif",
    border: "rgba(6, 78, 59, 0.1)",
    modalOverlay: "rgba(4, 36, 27, 0.8)",
  };

  const emptyProperty = {
    title: "",
    slug: "",
    location: "",
    tag: "Residential",
    category: "residential",
    price: "",
    image: "/images/property_1.png",
    note: "",
    detailA: "",
    detailB: "",
    summary: "",
    highlights: [],
    ctaLabel: "Book Private Tour",
    isFeatured: false,
  };

  const [formData, setFormData] = useState(emptyProperty);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      setProperties(data.properties || []);
    } catch (err) {
      console.error("Fetch properties error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setFormData(property);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingProperty(null);
    setFormData(emptyProperty);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      await fetch("/api/properties", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: id }),
      });
      fetchProperties();
    } catch (err) { console.error(err); }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) setFormData({ ...formData, image: data.url });
    } catch (err) { console.error(err); } finally { setUploading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingProperty ? "PUT" : "POST";
    try {
      const res = await fetch("/api/properties", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsModalOpen(false);
        fetchProperties();
      }
    } catch (err) { console.error(err); }
  };

  if (loading) return null;

  return (
    <div style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '80px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
           <h1 style={{ fontSize: '48px', fontWeight: '400', color: theme.surface, marginBottom: '12px' }}>Managed Portfolio</h1>
           <p style={{ color: theme.accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', fontStyle: 'italic' }}>Inventory Orchestration Hub</p>
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
        }}>
          New Acquisition
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '40px' }}>
        {properties.map((prop) => (
          <div key={prop._id || prop.id} style={{ background: 'white', borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(4,36,27,0.06)', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
               <Image src={prop.image} alt={prop.title} fill style={{ objectFit: 'cover' }} />
               {prop.isFeatured && (
                 <div style={{ position: 'absolute', top: '15px', left: '15px', background: theme.accent, color: theme.surface, padding: '4px 12px', fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', borderRadius: '100px' }}>Global Featured</div>
               )}
            </div>
            <div style={{ padding: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                 <div style={{ flex: '1' }}>
                    <p style={{ color: theme.accent, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '8px' }}>{prop.category}</p>
                    <h3 style={{ fontSize: '20px', fontWeight: '400', color: theme.surface, marginBottom: '6px' }}>{prop.title}</h3>
                    <p style={{ color: 'rgba(6,78,59,0.4)', fontSize: '13px' }}>{prop.location}</p>
                 </div>
                 <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleEdit(prop)} style={{ padding: '12px', background: theme.bg, color: theme.surface, border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer' }}><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(prop._id || prop.id)} style={{ padding: '12px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '2px', cursor: 'pointer', color: 'rgba(6,78,59,0.3)' }}><Trash2 size={14} /></button>
                 </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '22px', fontWeight: '400', color: theme.surface }}>{prop.price}</span>
                <Link href={`/properties/${prop.slug}`} target="_blank" style={{ color: theme.accent, display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Live View <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div style={{ position: 'fixed', inset: '0', background: theme.modalOverlay, backdropFilter: 'blur(15px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <div style={{ background: theme.bg, width: '100%', maxWidth: '1100px', maxHeight: '90vh', overflow: 'hidden', borderRadius: '4px', display: 'flex', boxShadow: '0 50px 100px rgba(0,0,0,0.3)' }}>
            
            <div style={{ flex: '1.2', background: '#000', position: 'relative' }}>
               <Image src={formData.image} alt="Preview" fill style={{ objectFit: 'cover', opacity: 0.6 }} />
               <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top, rgba(4,36,27,0.9), transparent)', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <h2 style={{ fontSize: '48px', color: 'white', marginBottom: '10px' }}>Visual Assets</h2>
                  <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '300px', marginBottom: '30px', fontSize: '14px', lineHeight: '1.6' }}>Deploy high-resolution imagery for property authentication.</p>
                  <label style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    background: theme.accent, 
                    color: theme.surface, 
                    padding: '18px 32px', 
                    borderRadius: '2px', 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    cursor: 'pointer' 
                  }}>
                    <Upload size={18} /> {uploading ? "SYNCING..." : "DEPLOY MEDIA"}
                    <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" style={{ display: 'none' }} />
                  </label>
               </div>
            </div>

            <div style={{ flex: '2', padding: '60px', overflowY: 'auto' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
                  <h3 style={{ fontSize: '36px', color: theme.surface, fontWeight: '400' }}>{editingProperty ? "Re-Optimize" : "New Deployment"}</h3>
                  <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', border: 'none', color: theme.surface, cursor: 'pointer', opacity: 0.3 }}><X size={32} /></button>
               </div>

               <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Identity</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="Asset Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required />
                     </div>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>URI Fragment</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="url-path" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} required />
                     </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Valuation</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="Price String" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
                     </div>
                     <div>
                        <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Location Node</label>
                        <input style={{ width: '100%', padding: '16px 20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font }} placeholder="Geographic Detail" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} required />
                     </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(6,78,59,0.03)', padding: '20px', borderRadius: '2px', border: `1px solid ${theme.border}` }}>
                      <input 
                          type="checkbox" 
                          id="isFeatured" 
                          checked={formData.isFeatured || false} 
                          onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })}
                          style={{ width: '18px', height: '18px', accentColor: theme.accent, cursor: 'pointer' }}
                      />
                      <label htmlFor="isFeatured" style={{ fontSize: '11px', fontWeight: '700', color: theme.surface, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px' }}>
                          Featured Hero Asset
                      </label>
                  </div>

                  <div>
                     <label style={{ fontSize: '10px', color: 'rgba(6,78,59,0.4)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', display: 'block' }}>Brief Intelligence Sum</label>
                     <textarea style={{ width: '100%', padding: '20px', background: 'rgba(6,78,59,0.03)', border: `1px solid ${theme.border}`, borderRadius: '2px', outline: 'none', color: theme.surface, fontSize: '16px', fontFamily: theme.font, height: '140px', resize: 'none' }} placeholder="Compelling asset overview..." value={formData.summary} onChange={e => setFormData({ ...formData, summary: e.target.value })} />
                  </div>

                  <div style={{ paddingTop: '40px', borderTop: `1px solid ${theme.border}`, display: 'flex', gap: '20px' }}>
                     <button type="submit" style={{ flex: '2', background: theme.surface, color: theme.accent, padding: '20px', borderRadius: '2px', border: 'none', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', cursor: 'pointer' }}>Deploy Asset</button>
                     <button type="button" onClick={() => setIsModalOpen(false)} style={{ flex: '1', background: 'transparent', border: `1px solid ${theme.border}`, color: theme.surface, padding: '20px', borderRadius: '2px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>Abort</button>
                  </div>
               </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
