// Simple Discord users widget
// Fetches the guild widget JSON and renders a user list with status indicators.
// Auto-refreshes every 60 seconds.

(function(){
  const WIDGET_URL = 'https://discord.com/api/guilds/417916767487393792/widget.json';
  const REFRESH_MS = 60000;
  const containerId = 'discord-widget';
  let timer;

  function createBase(){
    let root = document.getElementById(containerId);
    if(!root){
      root = document.createElement('div');
      root.id = containerId;
      document.body.appendChild(root);
    }
  if(!root.classList.contains('discord-users')) root.classList.add('discord-users');
    root.innerHTML = `
      <div class="discord-users-header">
        <span class="discord-users-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126.644 96" width="18" height="18" style="vertical-align:middle;margin-right:4px;"><path fill="#ff4500" d="M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z"/></svg>
          Discord:
        </span>
        <span class="discord-users-count" aria-live="polite"></span>
      </div>
      <div class="discord-users-body" role="list"></div>
      <div class="discord-users-footer">
        <a href="#" target="_blank" rel="noopener" class="discord-join-link" data-fallback="#">Join the server</a>
      </div>
    `;
    return root;
  }

  function statusClass(status){
    switch(status){
      case 'online': return 'status-online';
      case 'idle': return 'status-idle';
      case 'dnd': return 'status-dnd';
      default: return 'status-offline';
    }
  }

  async function fetchData(){
    try {
      const res = await fetch(WIDGET_URL, {cache: 'no-store'});
      if(!res.ok) throw new Error('HTTP '+res.status);
      return await res.json();
    } catch(e){
      console.error('Discord widget fetch failed:', e);
      return null;
    }
  }

  function render(data){
    const root = createBase();
    const body = root.querySelector('.discord-users-body');
    const countEl = root.querySelector('.discord-users-count');
    body.innerHTML = '';
    if(!data){
      body.innerHTML = '<div class="discord-users-error">Unable to load users right now.</div>';
      countEl.textContent = '';
      return;
    }
    const users = (data.members || []).slice().sort((a,b)=>{
      const prio = {online:0, idle:1, dnd:2};
      const pa = prio[a.status] ?? 99;
      const pb = prio[b.status] ?? 99;
      if(pa !== pb) return pa - pb;
      const na = (a.nick || a.username || '').toLowerCase();
      const nb = (b.nick || b.username || '').toLowerCase();
      return na.localeCompare(nb);
    });

    const totals = {online:0,idle:0,dnd:0};
    users.forEach(u=>{ if(totals[u.status] !== undefined) totals[u.status]++; });
    const totalOnline = users.length; // widget only lists currently online members
    countEl.textContent = `${totalOnline} Online`; // simple total
    // Update invite link from JSON (instant_invite) with graceful fallback
    const invite = data.instant_invite;
    const linkEl = root.querySelector('.discord-join-link');
    if(linkEl){
      const fallback = linkEl.getAttribute('data-fallback');
      if(invite && /^https?:\/\//.test(invite)){
        linkEl.href = invite;
      } else if(fallback){
        linkEl.href = fallback;
      }
    }
    countEl.title = `Online: ${totals.online}  Idle: ${totals.idle}  DND: ${totals.dnd}`;

    users.forEach(u=>{
      const name = u.nick || u.username;
      const div = document.createElement('div');
      div.className = 'discord-user';
      div.setAttribute('role','listitem');
      const status = statusClass(u.status);
      const avatar = u.avatar_url || ''; // already sized by Discord CDN
      div.innerHTML = `
        <div class="discord-avatar-wrap">
          <img src="${avatar}" class="discord-avatar" alt="${name}'s avatar">
          <span class="discord-status ${status}" title="${u.status}"></span>
        </div>
        <span class="discord-username">${name}</span>
      `;
      body.appendChild(div);
    });
  }

  async function cycle(){
    const data = await fetchData();
    render(data);
    timer = setTimeout(cycle, REFRESH_MS);
  }

  // Run when DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', cycle);
  } else {
    cycle();
  }
})();
