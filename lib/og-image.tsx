import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

export function generateOGImage({
  title,
  subtitle,
  category,
}: {
  title: string;
  subtitle?: string;
  category?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px 80px',
        }}
      >
        {category && (
          <div
            style={{
              color: '#93c5fd',
              fontSize: 22,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 16,
            }}
          >
            {category}
          </div>
        )}
        <div
          style={{
            color: 'white',
            fontSize: 48,
            fontWeight: 'bold',
            lineHeight: 1.2,
            marginBottom: 24,
            maxWidth: '90%',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              color: '#cbd5e1',
              fontSize: 24,
              marginBottom: 30,
              maxWidth: '80%',
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: 'auto',
          }}
        >
          <div style={{ color: '#e2e8f0', fontSize: 18 }}>
            Mo Abdel | NMLS #1426884 | Lumin Lending
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
