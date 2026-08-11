import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "7hillswebmasters — Web analytics agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(145deg, #e8f2f1 0%, #f7fafb 45%, #dfece8 100%)",
          color: "#122033",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#0f766e",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            7
          </div>
          <div style={{ fontSize: 42, fontWeight: 700 }}>7hillswebmasters</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            GA4, GTM & conversion tracking done right
          </div>
          <div style={{ fontSize: 28, color: "#3a4a5c", maxWidth: 900 }}>
            Best service. Best price. New York & Bengaluru.
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, fontSize: 22, color: "#0f766e", fontWeight: 600 }}>
          <span>Tracking Audit</span>
          <span>·</span>
          <span>Pixel Setup</span>
          <span>·</span>
          <span>CRO</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
