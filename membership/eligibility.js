(function(root){'use strict';
// API Testing PRO keeps its real licence in chrome.storage.sync (licenseKey, licenseExpiry, isPro).
// chrome.storage.local.zovoLicense is a secondary record written by the payments module; treated defensively.
const SYNC_KEYS=['licenseKey','licenseExpiry','isPro'],LICENSE='zovoLicense',CAMPAIGN="zovo.membership.apitesting.v1",PRODUCT="API Testing PRO",CARD="Every request you send is a reason I keep improving API Testing PRO.",DAYS30=30*86400000;
function hasTrialField(record){for(const key of Object.keys(record))if(/^trial/i.test(key)&&record[key]!==undefined&&record[key]!==null&&record[key]!==false)return true;return false;}
// Classify the sync licence triple. A retained key without isPro:true is a prior or pending activation: never sell.
function syncKind(record){
 if(record===undefined||record===null)return 'unknown';
 if(typeof record!=='object'||Array.isArray(record))return 'unknown';
 const key=record.licenseKey,pro=record.isPro,expiry=record.licenseExpiry;
 if(pro===true)return 'member';
 if(hasTrialField(record))return 'unknown';
 if(key===undefined&&pro===undefined&&expiry===undefined)return 'free';
 if(key!==undefined&&key!==null&&key!=='')return 'unknown';
 if(pro!==undefined&&pro!==false)return 'unknown';
 if(expiry!==undefined&&expiry!==null&&(typeof expiry!=='number'||!Number.isFinite(expiry)))return 'unknown';
 return 'free';
}
// Classify the local zovoLicense record. There is no legitimate free-shaped record, so any non-member object is unknown.
function localKind(record){
 if(record===undefined||record===null)return 'free';
 if(typeof record!=='object'||Array.isArray(record))return 'unknown';
 if(record.valid===true||record.isPro===true)return 'member';
 if(typeof record.tier==='string'&&record.tier&&record.tier!=='free')return 'member';
 return 'unknown';
}
function subscriptionKind(record){
 if(record===undefined||record===null)return 'free';
 if(typeof record!=='object'||Array.isArray(record))return 'unknown';
 const a=syncKind(record.sync===undefined?{}:record.sync),b=localKind(record.local);
 if(a==='member'||b==='member')return 'member';
 if(a==='unknown'||b==='unknown')return 'unknown';
 return 'free';
}
function classify(record,state,now){const kind=subscriptionKind(record);if(kind!=='free')return kind;
 if(state!==undefined&&state!==null){if(typeof state!=='object'||Array.isArray(state))return 'unknown';if(state.memberSeen)return 'member';if(state.recoverySeen)return 'unknown';if(state.hidden===true)return 'dismissed';if(state.dismissedAt!==undefined&&(typeof state.dismissedAt!=='number'||!Number.isFinite(state.dismissedAt)))return 'unknown';if(state.dismissedAt&&now-state.dismissedAt<DAYS30)return 'dismissed';}return 'free';}
const MEMBER=CAMPAIGN+'.memberSeen',RECOVERY=CAMPAIGN+'.recoverySeen',TRIAL=CAMPAIGN+'.trialUntil',PORT=CAMPAIGN+'.status';
// Dedicated flags are monotonic and cannot be overwritten by a dismissal RMW.
function requestWorkerStatus(){return new Promise(resolve=>{let port,done=false;const finish=status=>{if(done)return;done=true;clearTimeout(timer);try{port?.disconnect();}catch{}resolve(status);};const timer=setTimeout(()=>finish('unknown'),2500);try{port=chrome.runtime.connect({name:PORT});port.onMessage.addListener(message=>{finish(message&&message.campaign===CAMPAIGN&&['free','member','trial','unknown'].includes(message.status)?message.status:'unknown');});port.onDisconnect.addListener(()=>{void chrome.runtime.lastError;finish('unknown');});port.postMessage({request:'status'});}catch{finish('unknown');}});}
async function readRecord(){const [sync,local]=await Promise.all([chrome.storage.sync.get(SYNC_KEYS),chrome.storage.local.get(LICENSE)]);if(!sync||typeof sync!=='object'||!local||typeof local!=='object')throw new Error('storage unreadable');return {sync,local:local[LICENSE]};}
async function read(){try{const [record,data]=await Promise.all([readRecord(),chrome.storage.local.get([CAMPAIGN,MEMBER,RECOVERY,TRIAL])]);const localKindNow=classify(record,data[CAMPAIGN],Date.now());if(data[MEMBER]===true)return 'member';if(data[RECOVERY]===true)return 'unknown';if(data[TRIAL]!==undefined&&(typeof data[TRIAL]!=='number'||!Number.isFinite(data[TRIAL])))return 'unknown';if(data[TRIAL]>Date.now())return 'trial';const workerKind=await requestWorkerStatus();if(workerKind!=='free')return workerKind;return localKindNow;}catch{return 'unknown';}}
async function dismiss(forever){const data=await chrome.storage.local.get(CAMPAIGN);await chrome.storage.local.set({[CAMPAIGN]:{...(data[CAMPAIGN]||{}),dismissedAt:Date.now(),hidden:forever===true}});}
root.ZovoSubscriptionMembership={SYNC_KEYS,LICENSE,CAMPAIGN,PRODUCT,CARD,classify,subscriptionKind,syncKind,localKind,readRecord,read,dismiss,MEMBER,RECOVERY,TRIAL,PORT};
})(globalThis);
