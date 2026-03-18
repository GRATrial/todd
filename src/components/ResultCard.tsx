import React from 'react';
import { SimResult } from '../data/results';

interface ResultCardProps {
  result: SimResult;
  onOpen: (result: SimResult) => void;
  isDark?: boolean;
}

const PlatformIcon: React.FC<{ platform: string; isDark?: boolean }> = ({ platform, isDark }) => {
  const [imgError, setImgError] = React.useState(false);

  const iconStyle: React.CSSProperties = {
    width: '28px',
    height: '28px',
    flexShrink: 0,
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDark ? '#303134' : '#f1f3f4',
    border: isDark ? '1px solid #3c4043' : '1px solid #dfe1e5'
  };

  if (platform === 'LinkedIn') {
    return (
      <div style={{...iconStyle, backgroundColor: '#0077b5', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </div>
    );
  }
  if (platform === 'Facebook') {
    return (
      <div style={{...iconStyle, backgroundColor: '#1877f2', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
    );
  }
  if (platform === 'Instagram') {
    return (
      <div style={{...iconStyle, background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="16" height="16">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-5.838 2.435-5.838 5.838s2.435 5.838 5.838 5.838 5.838-2.435 5.838-5.838-2.435-5.838-5.838-5.838zm0 9.513c-2.03 0-3.675-1.645-3.675-3.675 0-2.03 1.645-3.675 3.675-3.675 2.03 0 3.675 1.645 3.675 3.675 0 2.03-1.645 3.675-3.675 3.675zm4.961-10.405c0 .731-.592 1.323-1.322 1.323s-1.322-.592-1.322-1.323.592-1.323 1.322-1.323 1.322.592 1.322 1.323z"/>
        </svg>
      </div>
    );
  }
  if (platform === 'Twitter' || platform === 'X') {
    return (
      <div style={{...iconStyle, backgroundColor: '#000000', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="16" height="16">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
    );
  }
  if (platform === 'GitHub') {
    return (
      <div style={{...iconStyle, backgroundColor: '#24292e', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="16" height="16">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </div>
    );
  }
  if (platform === 'Medium') {
    return (
      <div style={{...iconStyle, backgroundColor: '#000000', border: 'none'}}>
        <svg viewBox="0 0 24 24" fill="#fff" width="16" height="16">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
        </svg>
      </div>
    );
  }
  // Default icon
  return (
    <div style={{...iconStyle}}>
      <span style={{ color: isDark ? '#fff' : '#5f6368', fontSize: '11px', fontWeight: 'bold' }}>{platform.charAt(0)}</span>
    </div>
  );
};

export const ResultCard: React.FC<ResultCardProps> = ({ result, onOpen, isDark }) => {
  const followerCount = result.followers || '';

  const textColor = isDark ? '#bdc1c6' : '#4d5156';
  const titleColor = isDark ? '#8ab4f8' : '#1a0dab';
  const urlColor = isDark ? '#e8eaed' : '#202124';
  const subTextColorVal = isDark ? '#9aa0a6' : '#70757a';

  // Format the URL for display
  const formatUrl = (url: string) => {
    return `https://${url.replace(/ › /g, '/')}`;
  };

  return (
    <div className="g" style={{ marginBottom: '12px', maxWidth: '652px' }}>
      {/* Platform and Ellipsis Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
          <div style={{ flexShrink: 0 }}>
            <PlatformIcon platform={result.platform} isDark={isDark} />
          </div>
          <div style={{
            fontSize: '14px',
            color: urlColor,
            lineHeight: '20px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontWeight: 400, color: '#202124' }}>{result.platform}</span>
              {(result.platform === 'LinkedIn' || result.platform === 'Facebook') && result.displayName.split(' - ')[0] && (
                <span style={{ color: subTextColorVal }}> · {result.displayName.split(' - ')[0]}</span>
              )}
            </div>
            <div style={{ color: subTextColorVal, fontSize: '12px', lineHeight: '16px' }}>
              {formatUrl(result.urlLike)}
            </div>
          </div>
        </div>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: subTextColorVal }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Followers line if applicable */}
      {followerCount && (
        <div style={{ color: subTextColorVal, fontSize: '12px', marginLeft: '0', marginTop: '-2px', marginBottom: '1px' }}>
          {followerCount} followers
        </div>
      )}

      {/* Title */}
      <h3 style={{ margin: '2px 0 0 0', padding: 0 }}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onOpen(result);
          }}
          style={{
            fontSize: '20px',
            lineHeight: '26px',
            fontWeight: 400,
            color: titleColor,
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
        >
          {result.displayName}
        </a>
      </h3>

      {/* Content Area with optional Side Image */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '1px', marginLeft: '0' }}>
        <div style={{ flex: 1 }}>
          {/* Info Row: Location, Role, Company */}
          {result.currentRole && (
            <div style={{
              color: textColor,
              lineHeight: '22px',
              fontSize: '14px',
              marginTop: '2px'
            }}>
              {result.location && (
                <span>{result.location} · </span>
              )}
              <span>{result.currentRole} · {result.currentCompany || result.platform}</span>
            </div>
          )}

          {/* Snippet */}
          <div style={{
            color: textColor,
            lineHeight: '22px',
            fontSize: '14px',
            marginTop: '2px'
          }}>
            {result.snippet}
            {result.snippet.length > 140 && (
              <a href="#" style={{ color: titleColor, marginLeft: '4px' }} onClick={(e) => e.preventDefault()}>Read more</a>
            )}
          </div>
        </div>

        {/* Side Thumbnail */}
        {result.sideImageUrl && (
          <div style={{
            flexShrink: 0,
            width: '104px',
            height: '104px',
            borderRadius: '8px',
            overflow: 'hidden',
            border: `1px solid ${isDark ? '#3c4043' : '#dfe1e5'}`
          }}>
            <img
              src={result.sideImageUrl}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        )}
      </div>

      {/* Missing note */}
      {result.missingNote && (
        <div style={{
          fontSize: '14px',
          color: textColor,
          marginTop: '8px',
          marginLeft: '0',
          lineHeight: '20px'
        }}>
          <span>Missing: </span>
          <span style={{ textDecoration: 'line-through' }}>{result.missingNote.split(' | ')[0].replace('Missing: ', '')}</span>
          <span> | Show results with: </span>
          <span style={{ color: titleColor, textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}>{result.missingNote.split('with: ')[1]}</span>
        </div>
      )}
    </div>
  );
};
