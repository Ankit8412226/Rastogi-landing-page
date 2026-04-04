"use client";
import React, { useEffect, useState } from "react";
import { Users, Building2, TrendingUp, Calendar, ArrowUpRight, Clock, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    properties: 0,
    contacts: 0,
    newLeads: 0,
  });
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propRes, contactRes] = await Promise.all([
          fetch("/api/properties"),
          fetch("/api/contact"),
        ]);
        
        const propData = await propRes.json();
        const contactData = await contactRes.json();

        setStats({
          properties: propData.properties?.length || 0,
          contacts: contactData.contacts?.length || 0,
          newLeads: contactData.contacts?.filter(c => {
            const date = new Date(c.createdAt);
            const now = new Date();
            return (now - date) < (24 * 60 * 60 * 1000); // 24 hours
          }).length || 0,
        });

        setRecentContacts(contactData.contacts?.slice(-2).reverse() || []);
      } catch (err) {
        console.error("Dashboard data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return null;

  return (
    <div style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '80px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '400', color: theme.surface, marginBottom: '12px' }}>Operational Overview</h1>
        <p style={{ color: theme.accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', fontStyle: 'italic' }}>Strategic Command Workspace</p>
      </header>

      {/* Grid Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        {[
          { label: "Global Portfolio", value: stats.properties, icon: Building2 },
          { label: "Client Registry", value: stats.contacts, icon: Users, accent: true },
          { label: "Lead Intensity", value: `+${stats.newLeads}`, icon: TrendingUp },
        ].map((stat) => (
          <div key={stat.label} style={{ 
            background: theme.surface, 
            padding: '40px', 
            borderRadius: '4px', 
            position: 'relative',
            borderBottom: stat.accent ? `4px solid ${theme.accent}` : 'none',
            boxShadow: '0 20px 40px rgba(4,36,27,0.1)'
          }}>
            <h4 style={{ color: 'rgba(212,175,55,0.6)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontStyle: 'italic', marginBottom: '20px' }}>{stat.label}</h4>
            <div style={{ fontSize: '56px', fontWeight: '400', color: '#f5f0e8', fontFamily: theme.font }}>{stat.value}</div>
            <stat.icon size={48} style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.1, color: theme.accent }} />
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px' }}>
        {/* Main Feed */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', color: theme.surface, fontWeight: '400' }}>Strategic Briefs</h2>
            <Link href="/admin/contacts" style={{ color: theme.accent, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', textDecoration: 'none' }}>Detailed Registry →</Link>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: theme.border, borderRadius: '4px', overflow: 'hidden' }}>
            {recentContacts.map(contact => (
              <div key={contact._id || contact.id} style={{ background: 'white', padding: '30px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: theme.surface, color: theme.accent, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700' }}>
                    {contact.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: theme.surface, fontWeight: '700' }}>{contact.name}</h3>
                    <p style={{ color: theme.accent, fontSize: '12px', fontStyle: 'italic' }}>{contact.activeInterest || "General Inquiry"}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ color: theme.surface, fontWeight: '600', fontSize: '14px' }}>{contact.phone}</div>
                   <div style={{ color: 'rgba(6,78,59,0.4)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>{new Date(contact.createdAt).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Pane */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
           <div style={{ background: theme.surface, padding: '40px', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '24px', color: '#f5f0e8', fontWeight: '400', marginBottom: '16px' }}>Asset Expansion</h3>
              <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '14px', lineHeight: '1.7', marginBottom: '32px' }}>Deploy new luxury inventory to the global matrix instantly.</p>
              <Link href="/admin/properties" style={{
                display: 'block',
                background: theme.accent,
                color: theme.surface,
                padding: '18px 24px',
                borderRadius: '2px',
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>Deploy New Listing</Link>
           </div>
           
           <div style={{ padding: '30px', border: `1px solid ${theme.border}`, borderRadius: '4px' }}>
              <div style={{ color: '#059669', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', background: '#059669', borderRadius: '50%', boxShadow: '0 0 10px #059669' }}></div>
                Grade-A Operational
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
