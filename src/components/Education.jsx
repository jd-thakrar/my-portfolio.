import React from "react";

const Education = ({ education }) => {
  return (
    <div className="foundations-grid">
      {education?.map((edu, idx) => (
        <div 
          key={idx} 
          className="premium-card" 
          style={{ 
            padding: '40px', 
            background: 'rgba(255,255,255,0.01)', 
            border: '1px solid rgba(255,255,255,0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--neon-accent)', letterSpacing: '0.2em' }}>
                  GRAD_YEAR_{edu.year}
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {edu.degree}
                </h3>
             </div>
             <span style={{ fontSize: '0.8rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', fontFamily: 'var(--font-mono)' }}>
               EDU_ID:0{idx + 1}
             </span>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: '500', lineHeight: 1.6 }}>
            {edu.institution}
          </p>

          <div style={{ display: 'flex', gap: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: '800', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>PRECISION_SCORE</span>
                <span style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff' }}>{edu.cgpa} <span style={{ fontSize: '0.7rem', opacity: 0.3 }}>CGPA</span></span>
            </div>
            
            {edu.rank && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '0.6rem', fontWeight: '800', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>MERIT_RECOGNITION</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--neon-accent)', textTransform: 'uppercase', background: 'rgba(0, 255, 159, 0.05)', padding: '4px 8px', borderRadius: '2px' }}>{edu.rank}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
