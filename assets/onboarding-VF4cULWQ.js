import"./modulepreload-polyfill-B5Qt9EMX.js";let e=0;const i=4;document.addEventListener("click",t=>{const s=t.target.closest("[data-action]");if(!s)return;switch(s.dataset.action){case"copy-url":d(s,s.dataset.url);break;case"start-testing":p();break;case"next-step":c();break;case"prev-step":v();break;case"show-final":l();break;case"close-tab":b();break}});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const s=t.target.closest('[data-action="copy-url"]');s&&(t.preventDefault(),d(s,s.dataset.url))});function d(t,s){navigator.clipboard.writeText(s).then(()=>{const a=t.querySelector(".sample-action");a&&(a.textContent="Copied!",a.style.color="#10b981",setTimeout(()=>{a.textContent="Copy URL",a.style.color=""},2e3))})}function p(){typeof chrome<"u"&&chrome.storage&&chrome.storage.local.set({atl_onboarding_complete:!0}),document.getElementById("page-header").innerHTML=`
        <div class="logo-container">
            <div class="logo">Z</div>
            <div class="brand-info">
                <div class="brand-name">API Testing PRO</div>
                <div class="brand-tagline">Quick Start Guide</div>
            </div>
        </div>
        <h1>How to Use</h1>
        <p class="subtitle">4 steps to become an API testing expert</p>
    `,e=1,n()}function n(){const t=[null,u,m,y,x],s=document.getElementById("main-content");s.innerHTML="";const a=document.createElement("div");a.innerHTML=r(),s.appendChild(a);const o=document.createElement("div");o.className="tutorial-step",o.innerHTML=t[e](),s.appendChild(o)}function r(){let t='<div class="tutorial-progress">';for(let s=1;s<=i;s++){const a=s<e?"done":s===e?"active":"";t+=`<div class="progress-dot ${a}"></div>`,s<i&&(t+=`<div class="progress-line ${s<e?"done":""}"></div>`)}return t+="</div>",t}function c(){e<i?(e++,n(),window.scrollTo({top:0,behavior:"smooth"})):l()}function v(){e>1&&(e--,n(),window.scrollTo({top:0,behavior:"smooth"}))}function u(){return`
        <div class="card">
            <div class="tutorial-step-label">Step 1 of 4</div>
            <div class="tutorial-step-title">Make Your First Request</div>
            <div class="tutorial-step-desc">
                Click the API Testing PRO icon in your toolbar. You will see a compact popup with a URL bar.
                Pick a method, paste a URL, and hit Send.
            </div>
            <div class="visual-demo">
                <div class="demo-bar">
                    <span class="demo-method">GET</span>
                    <span class="demo-url">https://jsonplaceholder.typicode.com/posts/1</span>
                    <span class="demo-send">Send</span>
                </div>
                <div class="demo-status">
                    <span class="demo-status-badge">200 OK</span>
                    <span class="demo-status-meta">127ms &bull; 292 B</span>
                </div>
                <div class="demo-response">{
  <span class="key">"userId"</span>: <span class="num">1</span>,
  <span class="key">"id"</span>: <span class="num">1</span>,
  <span class="key">"title"</span>: <span class="val">"sunt aut facere..."</span>
}</div>
            </div>
            <div class="tutorial-tip">
                <span class="tutorial-tip-icon">Tip</span>
                <div class="tutorial-tip-text">
                    <strong>Quick Send</strong> - Press Enter in the URL field to send instantly.
                    The response appears right below with status code, timing, and formatted JSON.
                </div>
            </div>
            <div class="tutorial-nav">
                <div></div>
                <button class="cta-primary" data-action="next-step" style="max-width:200px;padding:12px 24px;font-size:14px;">
                    Next Step <span>→</span>
                </button>
            </div>
        </div>
    `}function m(){return`
        <div class="card">
            <div class="tutorial-step-label">Step 2 of 4</div>
            <div class="tutorial-step-title">Open Full View (Side Panel)</div>
            <div class="tutorial-step-desc">
                For more space, click the <strong>Full View</strong> button in the popup header.
                This opens the Side Panel, which stays docked beside any webpage you are working on.
            </div>
            <div class="visual-demo">
                <div style="display:flex;gap:12px;align-items:stretch;">
                    <div style="flex:1;background:var(--zovo-bg-primary);border-radius:8px;padding:12px;border:1px solid var(--zovo-border);">
                        <div style="font-size:11px;color:var(--zovo-text-muted);margin-bottom:8px;">Popup (compact)</div>
                        <div class="demo-bar" style="margin-bottom:8px;">
                            <span class="demo-method" style="font-size:10px;padding:2px 6px;">GET</span>
                            <span class="demo-url" style="font-size:10px;">api.example.com</span>
                        </div>
                        <div style="font-size:11px;color:var(--zovo-primary);text-align:center;padding:6px;background:rgba(124,58,237,0.1);border-radius:6px;cursor:pointer;">
                            Full View →
                        </div>
                    </div>
                    <div style="font-size:20px;display:flex;align-items:center;color:var(--zovo-text-muted);">→</div>
                    <div style="flex:1.5;background:var(--zovo-bg-primary);border-radius:8px;padding:12px;border:1px solid var(--zovo-primary);">
                        <div style="font-size:11px;color:var(--zovo-primary);margin-bottom:8px;">Side Panel (full)</div>
                        <div class="demo-bar" style="margin-bottom:4px;">
                            <span class="demo-method" style="font-size:10px;padding:2px 6px;">GET</span>
                            <span class="demo-url" style="font-size:10px;">api.example.com</span>
                        </div>
                        <div class="demo-tabs" style="margin-bottom:4px;">
                            <span class="demo-tab active">Params</span>
                            <span class="demo-tab">Headers</span>
                            <span class="demo-tab">Body</span>
                            <span class="demo-tab">Auth</span>
                        </div>
                        <div style="font-size:10px;color:var(--zovo-text-muted);padding:4px 0;">Full request builder with tabs</div>
                    </div>
                </div>
            </div>
            <div class="tutorial-tip">
                <span class="tutorial-tip-icon">Note</span>
                <div class="tutorial-tip-text">
                    <strong>Side Panel stays open</strong> while you browse.
                    You can test APIs alongside documentation or your app without switching windows.
                </div>
            </div>
            <div class="tutorial-nav">
                <button class="cta-secondary" data-action="prev-step">← Back</button>
                <button class="cta-primary" data-action="next-step" style="max-width:200px;padding:12px 24px;font-size:14px;">
                    Next Step <span>→</span>
                </button>
            </div>
        </div>
    `}function y(){return`
        <div class="card">
            <div class="tutorial-step-label">Step 3 of 4</div>
            <div class="tutorial-step-title">Add Headers, Body and Auth</div>
            <div class="tutorial-step-desc">
                In Full View, use tabs to configure your request. Add custom headers,
                write a JSON body for POST requests, or set up authentication.
            </div>
            <div class="visual-demo">
                <div class="demo-tabs">
                    <span class="demo-tab">Params</span>
                    <span class="demo-tab active">Headers</span>
                    <span class="demo-tab">Body</span>
                    <span class="demo-tab">Auth</span>
                </div>
                <div class="demo-header-row">
                    <span class="demo-header-key">Content-Type</span>
                    <span class="demo-header-val">application/json</span>
                </div>
                <div class="demo-header-row">
                    <span class="demo-header-key">Authorization</span>
                    <span class="demo-header-val">Bearer eyJhbGciOi...</span>
                </div>
                <div class="demo-header-row">
                    <span class="demo-header-key">X-API-Key</span>
                    <span class="demo-header-val">demo_key_abc123</span>
                </div>
                <div style="margin-top:16px;padding-top:12px;border-top:1px solid var(--zovo-border);">
                    <div style="font-size:11px;color:var(--zovo-text-muted);margin-bottom:8px;">POST Body</div>
                    <div class="demo-response" style="font-size:11px;">{
  <span class="key">"name"</span>: <span class="val">"New Item"</span>,
  <span class="key">"completed"</span>: <span class="num">false</span>
}</div>
                </div>
            </div>
            <div class="tutorial-tip">
                <span class="tutorial-tip-icon">Auth</span>
                <div class="tutorial-tip-text">
                    <strong>Auth tab</strong> supports Bearer tokens, Basic auth (username/password),
                    and API Key headers. Your credentials are stored locally and never leave your browser.
                </div>
            </div>
            <div class="tutorial-nav">
                <button class="cta-secondary" data-action="prev-step">← Back</button>
                <button class="cta-primary" data-action="next-step" style="max-width:200px;padding:12px 24px;font-size:14px;">
                    Next Step <span>→</span>
                </button>
            </div>
        </div>
    `}function x(){return`
        <div class="card">
            <div class="tutorial-step-label">Step 4 of 4</div>
            <div class="tutorial-step-title">Responses, History and Shortcuts</div>
            <div class="tutorial-step-desc">
                Responses show up with status code, timing, and size. Switch between
                formatted JSON, raw text, response headers, and cookies.
            </div>
            <div class="visual-demo">
                <div class="demo-status" style="margin-bottom:8px;">
                    <span class="demo-status-badge">200 OK</span>
                    <span class="demo-status-meta">42ms &bull; 1.2 KB</span>
                </div>
                <div class="demo-tabs">
                    <span class="demo-tab active">Pretty</span>
                    <span class="demo-tab">Raw</span>
                    <span class="demo-tab">Headers</span>
                    <span class="demo-tab">Cookies</span>
                </div>
                <div class="demo-response" style="font-size:11px;">{
  <span class="key">"data"</span>: [
    { <span class="key">"id"</span>: <span class="num">1</span>, <span class="key">"title"</span>: <span class="val">"Hello World"</span> },
    { <span class="key">"id"</span>: <span class="num">2</span>, <span class="key">"title"</span>: <span class="val">"API Testing"</span> }
  ],
  <span class="key">"total"</span>: <span class="num">42</span>
}</div>
            </div>
            <div style="margin-bottom:20px;">
                <div style="font-size:14px;font-weight:600;margin-bottom:12px;">Keyboard Shortcuts</div>
                <div class="shortcuts-grid">
                    <div class="shortcut-item">
                        <div class="shortcut-keys">
                            <span class="key-cap">Enter</span>
                        </div>
                        <span class="shortcut-label">Send request (popup)</span>
                    </div>
                    <div class="shortcut-item">
                        <div class="shortcut-keys">
                            <span class="key-cap">⌘</span>
                            <span class="key-cap">Enter</span>
                        </div>
                        <span class="shortcut-label">Send request (side panel)</span>
                    </div>
                    <div class="shortcut-item">
                        <div class="shortcut-keys">
                            <span class="key-cap">Click</span>
                        </div>
                        <span class="shortcut-label">Copy response</span>
                    </div>
                    <div class="shortcut-item">
                        <div class="shortcut-keys">
                            <span class="key-cap">History</span>
                        </div>
                        <span class="shortcut-label">Reuse past requests</span>
                    </div>
                </div>
            </div>
            <div class="tutorial-tip">
                <span class="tutorial-tip-icon">Info</span>
                <div class="tutorial-tip-text">
                    <strong>Request history</strong> saves your recent API calls automatically.
                    Click any past request to load it back into the URL bar instantly.
                </div>
            </div>
            <div class="tutorial-nav">
                <button class="cta-secondary" data-action="prev-step">← Back</button>
                <button class="cta-primary" data-action="show-final" style="max-width:200px;padding:12px 24px;font-size:14px;">
                    Done <span>✓</span>
                </button>
            </div>
        </div>
    `}function l(){document.getElementById("page-header").innerHTML=`
        <div class="logo-container">
            <div class="logo">Z</div>
            <div class="brand-info">
                <div class="brand-name">API Testing PRO</div>
                <div class="brand-tagline">You are ready</div>
            </div>
        </div>
        <h1>All set!</h1>
        <p class="subtitle">Click the API Testing PRO icon in your Chrome toolbar to start testing APIs.</p>
    `,document.getElementById("main-content").innerHTML=`
        <div class="card" style="text-align:center;padding:40px 24px;">
            <div style="width:80px;height:80px;background:linear-gradient(135deg,var(--zovo-success),#059669);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;font-size:36px;color:white;">✓</div>
            <h2 style="font-size:22px;font-weight:700;margin-bottom:8px;">You know the basics</h2>
            <p style="color:var(--zovo-text-muted);margin-bottom:24px;">
                Open the extension from your toolbar or right-click any page to access it.
            </p>
            <div style="background:var(--zovo-bg-elevated);padding:16px;border-radius:12px;margin-bottom:24px;text-align:left;">
                <div style="font-size:14px;font-weight:600;margin-bottom:12px;">Quick recap</div>
                <div style="display:flex;flex-direction:column;gap:8px;">
                    <div style="display:flex;align-items:center;gap:10px;font-size:13px;">
                        <span style="color:var(--zovo-success);">✓</span>
                        <span style="color:var(--zovo-text-secondary);">Popup for quick requests, Side Panel for full workspace</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:10px;font-size:13px;">
                        <span style="color:var(--zovo-success);">✓</span>
                        <span style="color:var(--zovo-text-secondary);">All HTTP methods supported with headers, body, and auth</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:10px;font-size:13px;">
                        <span style="color:var(--zovo-success);">✓</span>
                        <span style="color:var(--zovo-text-secondary);">Formatted responses with Pretty, Raw, Headers, and Cookies tabs</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:10px;font-size:13px;">
                        <span style="color:var(--zovo-success);">✓</span>
                        <span style="color:var(--zovo-text-secondary);">Request history saves everything locally and privately</span>
                    </div>
                </div>
            </div>
            <button class="cta-primary" data-action="close-tab" style="max-width:280px;">
                Got it, close this tab
            </button>
        </div>
    `}function b(){window.close(),setTimeout(()=>{document.body.innerHTML=`
            <div style="display: flex; align-items: center; justify-content: center; height: 100vh; text-align: center; background: #0f0f0f; color: #fafafa; font-family: Inter, sans-serif;">
                <div>
                    <p style="font-size: 18px; margin-bottom: 8px;">You can close this tab now.</p>
                    <p style="color: #71717a; font-size: 14px;">Click the API Testing PRO icon to start testing.</p>
                </div>
            </div>
        `},100)}
