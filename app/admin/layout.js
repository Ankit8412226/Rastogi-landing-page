"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Users, User, LogOut, Home, Building2, ChevronRight, Lock } from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Design Tokens - Matching login.js
  const theme = {
    bg: "#f0ede6",
    surface: "#04241b",
    surfaceLight: "#063a2d",
    accent: "#d4af37",
    textMain: "#04241b",
    textLight: "#f5f0e8",
    font: "'Georgia', 'Times New Roman', serif",
    border: "rgba(6, 78, 59, 0.1)",
    borderOnDark: "rgba(212, 175, 55, 0.15)",
  };

  useEffect(() => {
    if (pathname === "/admin/login") {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      // Temporarily disabled auth for preview as requested
      setIsAuthenticated(true);
      setLoading(false);
    };

    checkAuth();
  }, [pathname, router]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: theme.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: theme.font }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', color: theme.surface, letterSpacing: '8px', fontWeight: '400', marginBottom: '10px' }}>RASTOGI</div>
            <div style={{ fontSize: '10px', color: theme.accent, letterSpacing: '4px', textTransform: 'uppercase' }}>Synchronizing Matrix...</div>
          </div>
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <div style={{ minHeight: '100vh', background: theme.bg, fontFamily: theme.font }}>{children}</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.textMain, fontFamily: theme.font, display: 'flex' }}>
      
      {/* Sidebar - Matching Login Design */}
      <aside style={{ 
        width: '280px', 
        background: theme.surface, 
        position: 'fixed', 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '60px 24px',
        borderRight: `3px solid ${theme.accent}`,
        zIndex: 50
      }}>
        <div style={{ marginBottom: '60px', padding: '0 16px' }}>
          <div style={{ color: theme.textLight, fontSize: '22px', letterSpacing: '4px', fontWeight: '400', marginBottom: '4px' }}>RASTOGI</div>
          <div style={{ color: theme.accent, fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontStyle: 'italic', opacity: 0.6 }}>Admin Hub</div>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
            { name: "Portfolio", icon: Building2, href: "/admin/properties" },
            { name: "Regional Matrix", icon: MapPin, href: "/admin/areas" },
            { name: "Editorial Insights", icon: Info, href: "/admin/stories" },
            { name: "Client Registry", icon: Users, href: "/admin/contacts" },
          ].map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                color: pathname === item.href ? theme.accent : 'rgba(245, 240, 232, 0.4)',
                background: pathname === item.href ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                border: pathname === item.href ? `1px solid ${theme.borderOnDark}` : '1px solid transparent',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: '600'
              }}
            >
              <item.icon size={18} strokeWidth={1.5} />
              <span>{item.name}</span>
              {pathname === item.href && <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />}
            </Link>
          ))}
        </nav>

        <div style={{ paddingTop: '30px', borderTop: `1px solid ${theme.borderOnDark}` }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '16px 20px',
            color: 'rgba(245, 240, 232, 0.4)',
            textDecoration: 'none',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            <Home size={18} strokeWidth={1.5} />
            <span>View Site</span>
          </Link>
          <button 
            onClick={handleLogout} 
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              gap: '14px',
              padding: '16px 20px',
              color: 'rgba(245, 240, 232, 0.4)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: theme.font
            }}
          >
            <LogOut size={18} strokeWidth={1.5} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, marginLeft: '280px', padding: '80px', position: 'relative' }}>
          {children}
      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        main { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}
