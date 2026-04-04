"use client";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        router.push("/admin");
      } else {
        setError(data.message || "Invalid credentials. Try again.");
      }
    } catch (err) {
      setError("Unable to connect. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#f0ede6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background geometric accents */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          border: "1px solid rgba(6,78,59,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "1px solid rgba(6,78,59,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.12)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "6%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "160px",
          background: "linear-gradient(to bottom, transparent, rgba(6,78,59,0.12), transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "6%",
          transform: "translateY(-50%)",
          width: "1px",
          height: "160px",
          background: "linear-gradient(to bottom, transparent, rgba(6,78,59,0.12), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* Main card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          margin: "0 1.5rem",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {/* Top label strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div style={{ height: "1px", flex: 1, background: "rgba(6,78,59,0.15)" }} />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#064e3b",
              opacity: 0.5,
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            Rastogi Real Estate
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(6,78,59,0.15)" }} />
        </div>

        {/* Card body */}
        <div
          style={{
            background: "#04241b",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Gold top border */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, transparent, #d4af37, #f0d060, #d4af37, transparent)",
            }}
          />

          <div style={{ padding: "48px 44px 44px" }}>
            {/* Monogram lockup */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                marginBottom: "48px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "2px",
                  border: "1px solid rgba(212,175,55,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <Lock size={20} color="#d4af37" strokeWidth={1.5} />
              </div>
              <div>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "26px",
                    fontWeight: "400",
                    color: "#f5f0e8",
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Admin Access
                </h1>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontSize: "12px",
                    color: "rgba(212,175,55,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    fontWeight: "400",
                  }}
                >
                  Workspace Portal
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Username field */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: focusedField === "username" ? "#d4af37" : "rgba(245,240,232,0.35)",
                    marginBottom: "8px",
                    transition: "color 0.2s ease",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Username
                </label>
                <div style={{ position: "relative" }}>
                  <Mail
                    size={15}
                    color={focusedField === "username" ? "#d4af37" : "rgba(245,240,232,0.25)"}
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      transition: "color 0.2s ease",
                    }}
                    strokeWidth={1.5}
                  />
                  <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setFocusedField("username")}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${focusedField === "username" ? "rgba(212,175,55,0.5)" : "rgba(245,240,232,0.1)"}`,
                      borderRadius: "2px",
                      padding: "14px 16px 14px 44px",
                      color: "#f5f0e8",
                      fontSize: "14px",
                      fontFamily: "'Georgia', serif",
                      outline: "none",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                      letterSpacing: "0.02em",
                    }}
                  />
                </div>
              </div>

              {/* Password field */}
              <div style={{ position: "relative" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: focusedField === "password" ? "#d4af37" : "rgba(245,240,232,0.35)",
                    marginBottom: "8px",
                    transition: "color 0.2s ease",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <Lock
                    size={15}
                    color={focusedField === "password" ? "#d4af37" : "rgba(245,240,232,0.25)"}
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      transition: "color 0.2s ease",
                    }}
                    strokeWidth={1.5}
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    required
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${focusedField === "password" ? "rgba(212,175,55,0.5)" : "rgba(245,240,232,0.1)"}`,
                      borderRadius: "2px",
                      padding: "14px 16px 14px 44px",
                      color: "#f5f0e8",
                      fontSize: "14px",
                      fontFamily: "'Georgia', serif",
                      outline: "none",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                      letterSpacing: "0.02em",
                    }}
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <div
                  style={{
                    padding: "12px 16px",
                    background: "rgba(220,38,38,0.08)",
                    border: "1px solid rgba(220,38,38,0.2)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "#f87171",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13px",
                      color: "#f87171",
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                    }}
                  >
                    {error}
                  </p>
                </div>
              )}

              {/* Divider before button */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(212,175,55,0.1)",
                  margin: "8px 0 4px",
                }}
              />

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "16px 20px",
                  background: loading ? "rgba(212,175,55,0.08)" : "#d4af37",
                  border: "none",
                  borderRadius: "2px",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: loading ? "#d4af37" : "#04241b",
                    fontFamily: "'Georgia', serif",
                    fontWeight: "600",
                  }}
                >
                  {loading ? "Authenticating..." : "Enter Workspace"}
                </span>
                {!loading && (
                  <ArrowRight size={16} color="#04241b" strokeWidth={1.5} />
                )}
                {loading && (
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      border: "1.5px solid rgba(212,175,55,0.2)",
                      borderTopColor: "#d4af37",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }}
                  />
                )}
              </button>
            </form>
          </div>

          {/* Footer strip */}
          <div
            style={{
              borderTop: "1px solid rgba(212,175,55,0.08)",
              padding: "14px 44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "rgba(245,240,232,0.2)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "'Georgia', serif",
              }}
            >
              Grade-A Protocol
            </span>
            <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: i === 2 ? "#d4af37" : "rgba(212,175,55,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(245,240,232,0.2) !important; }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #04241b inset !important;
          -webkit-text-fill-color: #f5f0e8 !important;
        }
      `}</style>
    </div>
  );
}
