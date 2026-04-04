"use client";
import React, { useEffect, useState } from "react";
import { User, Phone, Mail, Clock, MessageSquare, Tag, Filter, CheckCircle2, ChevronRight, Hash } from "lucide-react";

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

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
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setContacts(data.contacts || []);
    } catch (err) {
      console.error("Fetch contacts error:", err);
    } finally {
      setLoading(false);
    }
  };

  const interests = ["All", "Residential Portfolio", "Commercial Assets", "Premium Plots", "Investment Advisory"];
  
  const filteredContacts = filter === "All" 
    ? contacts 
    : contacts.filter(c => (c.activeInterest || c.interest) === filter);

  if (loading) return null;

  return (
    <div style={{ padding: '0 40px', maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '80px', borderBottom: `1px solid ${theme.border}`, paddingBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
           <h1 style={{ fontSize: '48px', fontWeight: '400', color: theme.surface, marginBottom: '12px' }}>Client Registry</h1>
           <p style={{ color: theme.accent, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '4px', fontStyle: 'italic' }}>Strategic Inquiries Management Matrix</p>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
           {interests.map((int) => (
             <button
               key={int}
               onClick={() => setFilter(int)}
               style={{ 
                 background: filter === int ? theme.accent : theme.surface,
                 color: filter === int ? theme.surface : 'rgba(245, 240, 232, 0.4)',
                 border: 'none',
                 padding: '12px 24px',
                 borderRadius: '2px',
                 fontSize: '11px',
                 fontWeight: '700',
                 cursor: 'pointer',
                 letterSpacing: '1px',
                 textTransform: 'uppercase',
                 fontFamily: theme.font
               }}
             >
               {int}
             </button>
           ))}
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div key={contact._id || contact.id} style={{ background: 'white', borderRadius: '4px', display: 'flex', alignItems: 'stretch', boxShadow: '0 10px 40px rgba(4,36,27,0.06)', position: 'relative', overflow: 'hidden' }}>
               <div style={{ width: '80px', padding: '40px 20px', borderRight: `1px solid ${theme.border}`, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(6,78,59,0.02)' }}>
                  <div style={{ width: '40px', height: '40px', background: theme.surface, color: theme.accent, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800' }}>
                    {contact.name.charAt(0)}
                  </div>
                  <div style={{ transform: 'rotate(-90deg)', marginTop: '80px', whiteSpace: 'nowrap', color: 'rgba(6,78,59,0.3)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700' }}>
                     {new Date(contact.createdAt).toLocaleDateString()}
                  </div>
               </div>
               
               <div style={{ flex: '1', padding: '50px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px', alignItems: 'center' }}>
                     <div>
                        <h3 style={{ fontSize: '28px', color: theme.surface, fontWeight: '400', marginBottom: '8px' }}>{contact.name}</h3>
                        <div style={{ display: 'flex', gap: '15px' }}>
                           <span style={{ fontSize: '11px', color: theme.accent, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', fontStyle: 'italic' }}>{contact.activeInterest || "Portfolio Assessment"}</span>
                           <span style={{ fontSize: '11px', color: 'rgba(6,78,59,0.2)', textTransform: 'uppercase' }}>ID #{contact._id?.toString().slice(-6) || contact.id?.toString().slice(-4)}</span>
                        </div>
                     </div>
                     
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ color: theme.surface, display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: '500' }}>
                           <Phone size={16} style={{ color: theme.accent }} /> {contact.phone}
                        </div>
                        <div style={{ color: 'rgba(6,78,59,0.6)', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', fontWeight: '500' }}>
                           <Mail size={16} style={{ color: theme.accent }} /> {contact.email}
                        </div>
                     </div>

                     <button style={{ 
                        background: 'transparent', 
                        border: `1px solid ${theme.border}`, 
                        padding: '16px 24px', 
                        borderRadius: '2px', 
                        color: theme.surface,
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        cursor: 'pointer',
                        fontFamily: theme.font
                     }}>Archive Brief</button>
                  </div>
                  
                  {contact.vision && (
                    <div style={{ marginTop: '40px', padding: '40px', background: 'rgba(6,78,59,0.02)', borderRadius: '2px', border: `1px solid ${theme.border}`, position: 'relative' }}>
                       <MessageSquare size={18} style={{ position: 'absolute', top: '30px', left: '30px', color: theme.accent, opacity: 0.3 }} />
                       <p style={{ marginLeft: '40px', color: 'rgba(6,78,59,0.7)', fontSize: '16px', fontStyle: 'italic', lineHeight: '1.8' }}>
                          &ldquo;{contact.vision}&rdquo;
                       </p>
                    </div>
                  )}
               </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '120px 60px', textAlign: 'center', background: 'white', borderRadius: '4px', border: `2px dashed ${theme.border}` }}>
             <p style={{ color: 'rgba(6,78,59,0.2)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700' }}>Registry Void: No active inquiries match the selected matrix.</p>
             <p style={{ color: theme.accent, marginTop: '10px', fontStyle: 'italic', fontSize: '14px' }}>Strategic briefs will appear here upon submission.</p>
          </div>
        )}
      </div>
    </div>
  );
}
