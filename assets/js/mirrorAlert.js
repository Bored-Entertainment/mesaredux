---
---
document.addEventListener('DOMContentLoaded', () => {
  const anchor = document.getElementById('mirror-alert');
  if (!anchor) {
    return;
  }

  const mainDomain = '{{ site.domain }}';
  const manifestPath = `/assets/js/json/officialmirrors.json`;
  const buildInfoPath = `/assets/js/json/buildinfo.json`;
  const latestBuildInfoPath = `https://${mainDomain}/assets/js/json/buildinfo.json`;
  const fallbackMirrors = [mainDomain];
  const host = window.location.host.toLowerCase();

  if (host === mainDomain) {
    return;
  }

  const parseRevision = (info) => {
    if (!info || typeof info !== 'object') {
      return null;
    }

    const raw = info.build_revision ?? info.buildRevision ?? info.revision;
    const value = Number(raw);
    return Number.isFinite(value) && value > 0 ? value : null;
  };

  const formatTimestamp = (revision) => {
    if (typeof revision !== 'number' || !Number.isFinite(revision)) {
      return 'unknown time';
    }

    try {
      return new Date(revision * 1000).toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch (_error) {
      return String(revision);
    }
  };

  const renderBanner = (officialHosts, buildInfo, latestBuildInfo) => {
    const isOfficial = officialHosts.has(host);
    const localRevision = parseRevision(buildInfo);
    const latestRevision = parseRevision(latestBuildInfo);
    const canCompare = localRevision !== null && latestRevision !== null;
    const buildsMatch = canCompare && localRevision === latestRevision;
    const buildsDiffer = canCompare && !buildsMatch;

    const banner = document.createElement('div');
    banner.className = 'mirror-alert__banner';
    banner.style.padding = '0.75rem';
    banner.style.marginBottom = '0.7rem';
    banner.style.borderRadius = '0.5rem';
    banner.style.fontSize = '0.7rem';
    banner.style.lineHeight = '1.4';
    banner.style.border = '1px solid';
    banner.style.backgroundColor = isOfficial ? '#e6f4ea' : '#fef3c7';
    banner.style.borderColor = isOfficial ? '#6abf69' : '#f59e0b';
    banner.style.color = '#1f2933';

    const statusLabel = isOfficial ? 'Official mirror' : 'Unofficial mirror';
    const statusDescription = isOfficial
      ? `You are viewing an official MESλREDUX mirror on ${host || 'localhost'}.`
      : `You are viewing an unofficial MESλREDUX mirror on ${host || 'localhost'}.`;

    let buildStatusHtml = '';

    if (buildInfo && latestBuildInfo) {
      if (buildsMatch) {
        const intro = `<br><strong>This ${isOfficial ? 'official' : 'unofficial'} mirror is up to date.</strong>`;
        const caution = isOfficial ? '' : ' <strong>HOWEVER, it may still host unreviewed changes—proceed with care.</strong>';
        buildStatusHtml = `${intro}${caution}`;
      } else if (buildsDiffer) {
        const localTime = formatTimestamp(localRevision);
        const latestTime = formatTimestamp(latestRevision);
        const comparisonMessage = localRevision < latestRevision
          ? `This mirror is running build <code>${localRevision}</code> (${localTime}), but the canonical site is on <code>${latestRevision}</code> (${latestTime}).`
          : `This mirror is running build <code>${localRevision}</code> (${localTime}), which is newer than the canonical build <code>${latestRevision}</code> (${latestTime}).`;
        const guidance = localRevision < latestRevision
          ? (isOfficial ? ' Updates should propagate shortly.' : ` Please consider using an official mirror such as <a href="https://${mainDomain}">${mainDomain}</a> for the newest changes.`)
          : (isOfficial ? ' Please verify the deployment pipeline.' : ' Treat this build with caution; prefer an official mirror for confirmed releases.');
        buildStatusHtml = `<br><strong>Notice:</strong> ${comparisonMessage}${guidance}`;
      } else {
        buildStatusHtml = `<br><strong>Unable to compare build timestamps.</strong> This ${isOfficial ? 'official' : 'unofficial'} mirror may be out of date.`;
      }
    } else if (buildInfo && !latestBuildInfo) {
      buildStatusHtml = `<br><strong>Unable to reach the canonical build manifest.</strong> This ${isOfficial ? 'official' : 'unofficial'} mirror might be out of date.`;
    } else if (!buildInfo) {
      buildStatusHtml = `<br><strong>Warning:</strong> This mirror did not provide build metadata, so freshness cannot be confirmed.`;
    }

    banner.innerHTML = `

  <strong>${statusLabel}:</strong> ${statusDescription}<br>

  <span>Try the main domain at <a href="https://${mainDomain}">${mainDomain}</a> if it is not blocked for you.</span>

  ${buildStatusHtml}

`;

    anchor.replaceChildren(banner);
  };

  const normaliseHosts = (entries) => {
    const hosts = new Set(
      entries
        .map((value) => String(value || '').trim().toLowerCase())
        .filter(Boolean),
    );
    hosts.add(mainDomain);
    return hosts;
  };

  const loadBuildInfo = async () => {
    try {
      const response = await fetch(buildInfoPath, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to load build info: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Build info load failed.', error);
      return null;
    }
  };

  const loadLatestBuildInfo = async () => {
    try {
      const response = await fetch(`${latestBuildInfoPath}?t=${Date.now()}`, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to load latest build info: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.warn('Latest build info load failed.', error);
      return null;
    }
  };

  const loadOfficialHosts = async () => {
    try {
      const response = await fetch(manifestPath, { cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`Failed to load mirrors manifest: ${response.status}`);
      }
      const data = await response.json();
      return normaliseHosts(Array.isArray(data) ? data : fallbackMirrors);
    } catch (error) {
      console.warn('Mirror manifest load failed, using fallback list.', error);
      return normaliseHosts(fallbackMirrors);
    }
  };

  Promise.all([loadOfficialHosts(), loadBuildInfo(), loadLatestBuildInfo()]).then(([officialHosts, buildInfo, latestBuildInfo]) => renderBanner(officialHosts, buildInfo, latestBuildInfo));
});
