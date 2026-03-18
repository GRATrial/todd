import React from 'react';

interface KnowledgePanelProps {
  isDark?: boolean;
}

export const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ isDark = false }) => {
  return (
    <div style={{
      width: '385px',
      marginLeft: '32px',
      padding: '20px',
      border: '1px solid #dadce0',
      borderRadius: '8px',
      backgroundColor: isDark ? '#1f1f1f' : '#fff',
      boxShadow: '0 1px 6px rgba(32,33,36,.28)',
      alignSelf: 'flex-start',
      position: 'sticky',
      top: '20px'
    }}>
      {/* Title */}
      <div style={{ marginBottom: '12px' }}>
        <h2 style={{
          fontSize: '30px',
          fontWeight: 400,
          margin: 0,
          color: isDark ? '#e8eaed' : '#202124',
          lineHeight: '1.2'
        }}>
          Toddy Smith
        </h2>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#bdc1c6' : '#5f6368',
          marginTop: '4px'
        }}>
          Writer
        </div>
      </div>

      {/* Description */}
      <div style={{
        fontSize: '14px',
        color: isDark ? '#bdc1c6' : '#4d5156',
        lineHeight: '1.58',
        marginBottom: '16px'
      }}>
        Toddy Smith is a performer, writer and leading digital content creator (and member of the Vlog Squad) who has amassed a following of over 4 million adoring fans. Toddy uses his eccentric storytelling to share a glimpse into his and his friends' lives through vlogs and other comedic content across his social channels.
      </div>

      {/* Source */}
      <div style={{
        fontSize: '12px',
        color: isDark ? '#9aa0a6' : '#70757a',
        marginBottom: '16px'
      }}>
        Source: <a href="#" style={{
          color: isDark ? '#8ab4f8' : '#1a0dab',
          textDecoration: 'none'
        }}>Google Books</a>
      </div>

      {/* Age and Books - Side by Side Cards */}
      <div style={{
        borderTop: `1px solid ${isDark ? '#3c4043' : '#ebebeb'}`,
        paddingTop: '12px',
        marginBottom: '12px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
      }}>
        {/* Age Card */}
        <div style={{
          padding: '12px',
          backgroundColor: isDark ? '#2d2d2d' : '#f8f9fa',
          borderRadius: '8px'
        }}>
          <div style={{
            fontSize: '12px',
            color: isDark ? '#9aa0a6' : '#70757a',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Age
          </div>
          <div style={{
            fontSize: '14px',
            color: isDark ? '#e8eaed' : '#202124',
            fontWeight: 500,
            marginBottom: '2px'
          }}>
            34 years
          </div>
          <div style={{
            fontSize: '12px',
            color: isDark ? '#bdc1c6' : '#5f6368'
          }}>
            Apr 11, 1991
          </div>
        </div>

        {/* Books Card */}
        <div style={{
          padding: '12px',
          backgroundColor: isDark ? '#2d2d2d' : '#f8f9fa',
          borderRadius: '8px',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '12px',
            color: isDark ? '#9aa0a6' : '#70757a',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>Books</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: isDark ? '#9aa0a6' : '#70757a' }}>
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
            </svg>
          </div>
          <div style={{
            fontSize: '14px',
            color: isDark ? '#8ab4f8' : '#1a0dab',
            textDecoration: 'none',
            marginBottom: '2px'
          }}>
            I'll Give You a Dollar If You...
          </div>
          <div style={{
            fontSize: '12px',
            color: isDark ? '#bdc1c6' : '#5f6368'
          }}>
            2019
          </div>
        </div>
      </div>

      {/* Parents Section */}
      <div style={{
        borderTop: `1px solid ${isDark ? '#3c4043' : '#ebebeb'}`,
        paddingTop: '12px'
      }}>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#e8eaed' : '#202124',
          fontWeight: 500,
          marginBottom: '8px'
        }}>
          Parents
        </div>
        <div style={{
          fontSize: '14px',
          color: isDark ? '#8ab4f8' : '#1a0dab',
          marginTop: '4px'
        }}>
          <a href="#" style={{
            color: isDark ? '#8ab4f8' : '#1a0dab',
            textDecoration: 'none',
            marginRight: '8px'
          }}>Jane Brodie</a>, <a href="#" style={{
            color: isDark ? '#8ab4f8' : '#1a0dab',
            textDecoration: 'none'
          }}>Murray Denys Stockley-Smith</a>
        </div>
      </div>
    </div>
  );
};
