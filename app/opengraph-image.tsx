import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mo Abdel - California & Washington Mortgage Broker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 52,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          Mo Abdel
        </div>
        <div
          style={{
            color: '#93c5fd',
            fontSize: 28,
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          California & Washington Mortgage Broker
        </div>
        <div style={{ color: '#e2e8f0', fontSize: 20, textAlign: 'center' }}>
          200+ Lenders | NMLS #1426884 | Lumin Lending
        </div>
      </div>
    ),
    { ...size }
  );
}
