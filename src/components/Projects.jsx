import React from 'react';

const Projects = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects?.map((project, idx) => (
        <div 
          key={idx} 
          className="premium-card" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            padding: '32px',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.01)',
            transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)'
          }}
          onMouseOver={e=> {
            e.currentTarget.style.background = 'rgba(0, 255, 159, 0.02)';
            e.currentTarget.style.borderColor = 'rgba(0, 255, 159, 0.2)';
          }}
          onMouseOut={e=> {
            e.currentTarget.style.background = 'rgba(255,255,255,0.01)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
          }}
        >
          {/* Index Numbering */}
          <span style={{ 
            position: 'absolute', 
            top: '32px', 
            right: '32px', 
            fontSize: '0.65rem', 
            fontWeight: '800', 
            color: 'var(--neon-accent)', 
            opacity: 0.3,
            fontFamily: 'var(--font-mono)' 
          }}>
            [ 0{idx + 1} ]
          </span>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '900', 
              color: '#fff', 
              letterSpacing: '-0.02em', 
              marginBottom: '12px',
              maxWidth: '80%'
            }}>
              {project.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {project.stack.split(',').map((tech, i) => (
                <span key={i} style={{ 
                  fontSize: '0.6rem', 
                  fontWeight: '800', 
                  color: 'var(--neon-accent)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  background: 'rgba(0, 255, 159, 0.05)',
                  padding: '4px 10px',
                  borderRadius: '2px'
                }}>
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <p style={{ 
            color: 'rgba(255,255,255,0.5)', 
            fontSize: '0.95rem', 
            lineHeight: '1.8', 
            marginBottom: '40px',
            flexGrow: 1 
          }}>
            {project.description}
          </p>

          {/* Visible Link Section */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px' }}>
             {project.links && project.links.length > 0 ? (
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 {project.links.map((link, lIdx) => (
                   <a 
                     key={lIdx} 
                     href={link.startsWith('http') ? link : `https://${link}`} 
                     target="_blank" 
                     rel="noreferrer"
                     style={{ 
                       display: 'flex', 
                       alignItems: 'center', 
                       gap: '12px', 
                       color: 'var(--neon-accent)', 
                       textDecoration: 'none', 
                       fontSize: '0.8rem', 
                       fontWeight: '700',
                       transition: '0.3s'
                     }}
                     onMouseOver={e=>e.currentTarget.style.transform='translateX(5px)'}
                     onMouseOut={e=>e.currentTarget.style.transform='translateX(0)'}
                   >
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                     <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>{link}</span>
                   </a>
                 ))}
               </div>
             ) : (
               <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>Source Internal / Private Beta</span>
             )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
