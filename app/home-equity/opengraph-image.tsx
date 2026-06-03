import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Figure HELOC vs Aven Home Equity Card by Lumin Lending"
export const size = {
  width: 1200,
  height: 630
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #ffffff 0%, #eef6ff 45%, #06183d 100%)",
          color: "#071a3d",
          fontFamily: "Inter, Arial, sans-serif",
          padding: 72,
          position: "relative"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "62%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 999,
                background: "#071a3d",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 900
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 28, fontWeight: 900 }}>Mo Abdel</span>
              <span style={{ fontSize: 18, color: "#1269f3", fontWeight: 800, letterSpacing: 2 }}>LUMIN LENDING</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span style={{ color: "#d4a447", fontSize: 24, fontWeight: 900 }}>Home equity without refinancing</span>
            <h1 style={{ margin: 0, fontSize: 74, lineHeight: 0.94, letterSpacing: -4 }}>
              Figure HELOC vs Aven Home Equity Card
            </h1>
            <p style={{ margin: 0, color: "#334866", fontSize: 27, lineHeight: 1.35 }}>
              Two different ways to access equity: larger online HELOC access or reusable Visa-style flexibility.
            </p>
          </div>
        </div>

        <div
          style={{
            marginLeft: "auto",
            alignSelf: "center",
            width: 330,
            height: 420,
            borderRadius: 36,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 30px 80px rgba(7, 26, 61, 0.22)",
            padding: 28,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#1269f3" }}>Figure</div>
            <div style={{ fontSize: 34, fontWeight: 900 }}>Traditional online HELOC</div>
            <div style={{ fontSize: 20, color: "#5b6b84" }}>Best for larger lump sums.</div>
          </div>
          <div style={{ height: 1, background: "#d9e4f2" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: "#1269f3" }}>Aven</div>
            <div style={{ fontSize: 34, fontWeight: 900 }}>Home equity-backed Visa</div>
            <div style={{ fontSize: 20, color: "#5b6b84" }}>Best for reusable flexibility.</div>
          </div>
        </div>
      </div>
    ),
    size
  )
}
