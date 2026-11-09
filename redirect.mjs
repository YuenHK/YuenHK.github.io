const ORIGIN='https://wcy.hk';
const canonicalNames=new Map([['bayblad-simulator', 'Bayblad-Simulator'], ['escape-from-space-oil', 'Escape-From-Space-Oil'], ['exploring-interior-angles-of-triangles', 'Exploring-interior-angles-of-triangles'], ['monopoly_fate10', 'Monopoly_Fate10'], ['qingming-hand-treasure', 'QingMing-Hand-Treasure'], ['shapecut', 'ShapeCut'], ['tanaka', 'Tanaka'], ['terminal-countdown', 'Terminal-Countdown'], ['tic-tac-toe', 'Tic-Tac-Toe'], ['wild-doctor', 'Wild-Doctor'], ['neighbour', 'neighbour']]);
export function destinationFor(href){
 const current=new URL(href);
 if(!['http:','https:'].includes(current.protocol)||current.hostname.toLowerCase()!=='yuenhk.github.io')return null;
 const parts=current.pathname.split('/');
 if(canonicalNames.has((parts[1]||'').toLowerCase()))parts[1]=canonicalNames.get(parts[1].toLowerCase());
 const target=new URL(ORIGIN);target.pathname=parts.join('/')||'/';target.search=current.search;target.hash=current.hash;
 return target.href;
}
if(typeof window!=='undefined'){
 const target=destinationFor(window.location.href);
 if(target){const link=document.getElementById('destination');if(link)link.href=target;window.location.replace(target);}
}
