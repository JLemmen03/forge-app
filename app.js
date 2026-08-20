
const $ = (s, el=document)=>el.querySelector(s);
const $$ = (s, el=document)=>[...el.querySelectorAll(s)];
const DBKEY='forge_mvp_v1';

const phase6 = {
  id:'phase6', name:'Phase 6 — Strength × Sculpted V-Taper', length:6, week:1,
  structure:['Upper A','Lower A','Push','Pull','Lower B'],
  workouts:[
    {name:'Upper A', est:'~66 min', muscles:['Upper chest','Lats','Upper back','Biceps','Triceps'], exercises:[
      ex('Low-Incline Smith Press',4,'5-8',150,['Upper chest','Front delts','Triceps']),
      ex('Neutral-Grip Pull-Up / Assisted Pull-Up',4,'6-10',120,['Lats','Upper back','Biceps']),
      ex('Converging Chest Press',3,'8-12',90,['Chest','Triceps']),
      ex('Chest-Supported T-Bar Row',3,'8-12',90,['Upper back','Lats','Biceps']),
      ex('Bayesian Cable Curl',3,'10-15',0,['Biceps'],'Superset'),
      ex('Cross-Body Cable Triceps Extension',3,'10-15',60,['Triceps'],'Superset')
    ]},
    {name:'Lower A', est:'~62–66 min', muscles:['Quads','Glutes','Calves','Abs'], exercises:[
      ex('Hack Squat',4,'5-8',150,['Quads','Glutes']),
      ex('Bulgarian Split Squat',3,'8-10 / leg',90,['Quads','Glutes']),
      ex('Leg Extension',3,'10-15',60,['Quads']),
      ex('Seated Calf Raise',4,'8-12',75,['Calves']),
      ex('Reverse Crunch',3,'12-20',45,['Abs']),
      ex('Machine Crunch',3,'10-15',60,['Abs'])
    ]},
    {name:'Push', est:'~65–69 min', muscles:['Shoulders','Upper chest','Triceps'], exercises:[
      ex('Plate-Loaded Shoulder Press',4,'5-8',150,['Front delts','Side delts','Triceps']),
      ex('Incline Dumbbell Press',3,'6-10',120,['Upper chest','Front delts','Triceps']),
      ex('Machine Lateral Raise',4,'10-15',60,['Side delts']),
      ex('Low-to-High Cable Fly',3,'12-15',60,['Upper chest']),
      ex('Overhead Cable Triceps Extension',3,'8-12',75,['Triceps']),
      ex('Seated Dip Machine',3,'8-12',75,['Triceps','Chest','Front delts'])
    ]},
    {name:'Pull', est:'~67–70 min', muscles:['Lats','Upper back','Rear delts','Biceps','Abs'], exercises:[
      ex('Chest-Supported Machine Row — Upper-Back Bias',4,'6-10',120,['Upper back','Rear delts','Biceps']),
      ex('Single-Arm Kneeling Lat Pulldown',3,'8-12 / side',75,['Lats','Biceps']),
      ex('Wide-Grip Cable Row',3,'10-12',90,['Upper back','Rear delts','Biceps']),
      ex('Reverse Pec Deck',3,'12-20',60,['Rear delts','Upper back']),
      ex('Incline Dumbbell Curl',3,'8-12',75,['Biceps']),
      ex('Rope Hammer Curl',3,'10-15',60,['Biceps','Forearms']),
      ex('Ab Wheel',3,'8-15',60,['Abs'])
    ]},
    {name:'Lower B', est:'~64–68 min', muscles:['Hamstrings','Glutes','Side delts','Biceps','Triceps','Abs'], exercises:[
      ex('Romanian Deadlift',4,'5-8',150,['Hamstrings','Glutes','Lower back']),
      ex('Seated Leg Curl',3,'8-12',75,['Hamstrings']),
      ex('45° Back Extension — Glute Bias',3,'10-15',75,['Glutes','Hamstrings']),
      ex('Single-Arm Cable Lateral Raise',4,'12-20',60,['Side delts']),
      ex('Machine Preacher Curl',3,'8-12',0,['Biceps'],'Superset'),
      ex('Single-Arm Reverse-Grip Pushdown',3,'10-15',60,['Triceps'],'Superset'),
      ex('Decline Crunch',3,'12-20',45,['Abs'])
    ]}
  ]
};
function ex(name,sets,reps,rest,muscles,note=''){return {name,sets,reps,rest,muscles,note}}

const technique = {
'Low-Incline Smith Press':[
 'Set the bench to a low incline, around 15–30°.',
 'Position the bench so the bar tracks toward your upper/mid chest.',
 'Plant your feet and keep your shoulder blades gently retracted and depressed.',
 'Unrack with straight wrists and lower the bar under control.',
 'Touch or approach the upper/mid chest without bouncing.',
 'Press upward while keeping the shoulders stable and avoiding an excessive arch.'
],
'Hack Squat':[
 'Place shoulders under the pads and feet about shoulder-width on the platform.',
 'Brace your trunk and unlock the machine.',
 'Descend under control while allowing your knees to travel naturally forward.',
 'Go as deep as you can while keeping your hips and back controlled against the pad.',
 'Drive through the whole foot to stand, stopping short of aggressively locking the knees.'
],
'Machine Lateral Raise':[
 'Adjust the seat so the machine pivot is close to shoulder height.',
 'Keep your chest tall and shoulders relaxed rather than shrugged.',
 'Raise your upper arms out to the sides in a smooth arc.',
 'Stop around shoulder height or where your delts stay loaded comfortably.',
 'Lower slowly and avoid dropping the weight stack.'
],
'Reverse Pec Deck':[
 'Set the seat so the handles are roughly shoulder height.',
 'Keep your chest against the pad and ribs controlled.',
 'Lead with the elbows and sweep the arms outward/back.',
 'Pause briefly when the rear delts are shortened.',
 'Return under control without letting the weight pull you forward.'
],
'Romanian Deadlift':[
 'Stand tall with the load close to your thighs and brace your trunk.',
 'Unlock the knees slightly, then push the hips backward.',
 'Keep the load close to your legs and your spine controlled.',
 'Descend until you feel a strong hamstring stretch without losing position.',
 'Drive the hips forward to stand; do not overextend your lower back.'
],
'Kneeling Hip-Flexor Stretch':[
 'Start in a half-kneeling position with one knee down.',
 'Gently tuck your pelvis instead of arching your lower back.',
 'Keep ribs stacked over the pelvis.',
 'Shift forward slightly until you feel the front of the hip/thigh stretch.',
 'Breathe slowly and hold a mild-to-moderate stretch without pain.'
]
};

const stretches = [
 {name:'5-Min Morning Mobility',goal:'Morning mobility',items:[
  ['Cat-Cow',40],["World's Greatest Stretch",50],['Standing Side Reach',40],['Deep Squat Mobility',50],
  ['Arm Circles + Shoulder Rotations',40],['Hamstring Sweeps',40],['Dead Hang',40]
 ]},
 {name:'10-Min Night Stretch',goal:'Night relaxation',items:[
  ['Kneeling Hip-Flexor Stretch',60],['Quad Stretch',60],['Hamstring Stretch',60],['Figure-4 Glute Stretch',60],
  ['Calf Stretch',60],["Child's Pose + Lat Reach",60],['Doorway Chest Stretch',60],['Cross-Body Rear-Delt Stretch',60],
  ['Lying Spinal Twist',60],['Dead Hang — 2 × 20–30 sec',60]
 ]}
];
const homeWorkouts=[
 {name:'15-Min Full Body',equipment:'None',ex:['Bodyweight Squat','Reverse Lunge','Incline Push-Up','Glute Bridge','Dead Bug']},
 {name:'Upper Body Bands',equipment:'Bands',ex:['Band Row','Band Chest Press','Band Lateral Raise','Band Curl','Band Pushdown']},
 {name:'Travel Workout',equipment:'None',ex:['Split Squat','Push-Up','Single-Leg Glute Bridge','Pike Push-Up','Reverse Crunch']}
];

function seed(){
 const old=localStorage.getItem(DBKEY);
 if(old) return JSON.parse(old);
 const state={onboarded:false,route:'today',profile:{goal:'Lean V-Taper',priorities:['Shoulders','Lats','Upper chest'],days:5,limit:70,block:6,variety:'Balanced',strength:'High priority'},
 programs:[phase6],activeProgram:'phase6',history:[],weights:[],custom:[],mobilityGoals:['Morning mobility','Night relaxation'],currentWorkout:null};
 save(state);return state;
}
let state=seed();
function save(s=state){localStorage.setItem(DBKEY,JSON.stringify(s))}
function activeProgram(){return state.programs.find(p=>p.id===state.activeProgram)||state.programs[0]}
function todayWorkout(){let p=activeProgram(); let idx=state.history.filter(h=>h.programId===p.id).length%p.workouts.length; return p.workouts[idx]}
function nav(route){state.route=route;save();render()}
window.nav=nav;

function layout(content,active='today'){
 return `<div class="shell"><div class="topbar"><div class="brand">FORGE</div><button class="btn ghost small" onclick="nav('settings')">Goals</button></div>${content}</div>
 <div class="nav"><div class="navinner">${[['today','Today'],['train','Train'],['programs','Programs'],['progress','Progress'],['settings','You']].map(([r,n])=>`<button class="${active===r?'active':''}" onclick="nav('${r}')">${n}</button>`).join('')}</div></div>`
}
function onboarding(){
 return `<div class="shell"><div class="brand" style="margin-top:22px">FORGE</div>
 <div class="hero" style="margin-top:52px"><h1>Build the body.<br>Build the performance.</h1><p class="sub">Adaptive gym, mobility and home training in one coach.</p></div>
 <div class="section card"><h2>What do you want to build?</h2>
 <label>Primary physique goal</label><select id="goal"><option>Lean V-Taper</option><option>Strength + Muscle</option><option>Athletic</option><option>Balanced Physique</option><option>Fat Loss + Definition</option></select>
 <label>Priority muscles (comma separated)</label><input id="prio" value="Shoulders, Lats, Upper chest">
 <div class="grid two"><div><label>Training days</label><select id="days"><option>3</option><option>4</option><option selected>5</option><option>6</option></select></div>
 <div><label>Session limit</label><select id="limit"><option>45</option><option>60</option><option selected>70</option><option>90</option></select></div></div>
 <div class="grid two"><div><label>Program refresh</label><select id="block">${[3,4,5,6,7,8].map(x=>`<option ${x===6?'selected':''}>${x}</option>`).join('')}</select></div>
 <div><label>Exercise variety</label><select id="variety"><option>Low</option><option selected>Balanced</option><option>High</option></select></div></div>
 <button class="btn" style="width:100%;margin-top:16px" onclick="finishOnboarding()">Generate my plan</button></div></div>`
}
window.finishOnboarding=()=>{
 state.profile.goal=$('#goal').value;
 state.profile.priorities=$('#prio').value.split(',').map(x=>x.trim()).filter(Boolean);
 state.profile.days=+$('#days').value;state.profile.limit=+$('#limit').value;state.profile.block=+$('#block').value;state.profile.variety=$('#variety').value;
 state.onboarded=true;state.route='today';save();render()
}
function today(){
 const w=todayWorkout(),p=activeProgram();
 let latest=state.history[0];
 return layout(`<div><div class="sub">${p.name} • Week ${p.week}/${p.length}</div><h1>${greeting()}</h1></div>
 <div class="hero"><div class="row"><div><div class="sub">TODAY'S WORKOUT</div><h2 style="margin-top:5px">${w.name}</h2><div class="sub">${w.exercises.length} exercises • ${w.est}</div></div><span class="pill active">Strength + V-Taper</span></div>
 <button class="btn" style="width:100%;margin-top:16px" onclick="startWorkout('${w.name}')">Start workout</button></div>
 <div class="section"><h2>Today</h2><div class="grid">
 ${stretches.map(s=>`<div class="card row"><div><h3>${s.name}</h3><div class="sub">${s.goal} • ${s.items.length} movements</div></div><button class="btn secondary small" onclick="openStretch('${s.name}')">Open</button></div>`).join('')}
 </div></div>
 <div class="section"><h2>Coach insight</h2><div class="card green">
 <h3 class="good">${progressionInsight()}</h3><p class="sub">The goal is bodyweight trend down while benchmark lift performance trends up.</p></div></div>
 ${latest?`<div class="section"><h2>Last session</h2><div class="card"><b>${latest.workout}</b><div class="sub">${new Date(latest.date).toLocaleDateString()} • ${latest.completedSets} completed sets</div></div></div>`:''}`, 'today')
}
function greeting(){let h=new Date().getHours();return h<12?'Good morning':h<18?'Good afternoon':'Good evening'}
function progressionInsight(){
 const hist=state.history;
 if(!hist.length) return 'Log your first workout to start progression tracking.';
 let recs=[];
 hist.slice(0,4).forEach(h=>h.exercises?.forEach(e=>{let top=parseInt((e.targetReps||'0-0').split('-').pop()); if(top&&e.sets?.length&&e.sets.every(s=>s.done&&+s.reps>=top)) recs.push(e.name)}));
 return recs.length?`${recs[0]} is ready for a small load increase next exposure.`:'Keep chasing rep PRs with clean form and target RIR.'
}

function startWorkout(name){
 const p=activeProgram();const w=p.workouts.find(x=>x.name===name)||todayWorkout();
 state.currentWorkout={programId:p.id,workout:w.name,start:Date.now(),exercises:w.exercises.map(e=>({...e,setData:Array.from({length:e.sets},(_,i)=>({weight:'',reps:'',rir:'2',done:false}))}))};
 state.route='train';save();render()
}
window.startWorkout=startWorkout;
function train(){
 if(!state.currentWorkout) return layout(`<h1>Train</h1><p class="sub">Choose a session from your active program.</p>${activeProgram().workouts.map(w=>`<div class="card row" style="margin-bottom:10px"><div><h3>${w.name}</h3><div class="sub">${w.est} • ${w.exercises.length} exercises</div></div><button class="btn small" onclick="startWorkout('${w.name}')">Start</button></div>`).join('')}`,'train');
 const c=state.currentWorkout;
 return layout(`<div class="row"><div><div class="sub">ACTIVE WORKOUT</div><h1>${c.workout}</h1></div><button class="btn ghost small" onclick="cancelWorkout()">Cancel</button></div>
 ${c.exercises.map((e,ei)=>exerciseLogger(e,ei)).join('')}
 <button class="btn" style="width:100%;margin-top:18px" onclick="finishWorkout()">Finish workout</button>`,'train')
}
function exerciseLogger(e,ei){
 let previous=findPrevious(e.name);
 return `<div class="card section"><div class="row"><div><h3>${e.name}</h3><div class="exercise-meta">${e.sets} × ${e.reps} • ${e.rest?e.rest+' sec':'superset'}${e.note?' • '+e.note:''}</div></div><button class="btn secondary small" onclick="openExercise('${esc(e.name)}')">How to + video</button></div>
 ${previous?`<div class="sub" style="margin-top:8px">Previous: ${previous.map(s=>`${s.weight||'—'}kg × ${s.reps||'—'}`).join(' • ')}</div>`:''}
 <div style="margin-top:10px">${e.setData.map((s,si)=>`<div class="setrow"><div class="setnum">${si+1}</div><input inputmode="decimal" placeholder="kg" value="${s.weight}" onchange="setField(${ei},${si},'weight',this.value)"><input inputmode="numeric" placeholder="reps" value="${s.reps}" onchange="setField(${ei},${si},'reps',this.value)"><input inputmode="numeric" placeholder="RIR" value="${s.rir}" onchange="setField(${ei},${si},'rir',this.value)"><button class="check ${s.done?'done':''}" onclick="toggleSet(${ei},${si})">${s.done?'✓':'○'}</button></div>`).join('')}</div>
 ${e.rest?`<button class="btn ghost small" onclick="startTimer(${e.rest})">Start ${e.rest}s rest</button> <span id="timer-${ei}" class="sub"></span>`:''}</div>`
}
window.setField=(ei,si,f,v)=>{state.currentWorkout.exercises[ei].setData[si][f]=v;save()}
window.toggleSet=(ei,si)=>{state.currentWorkout.exercises[ei].setData[si].done=!state.currentWorkout.exercises[ei].setData[si].done;save();render()}
window.cancelWorkout=()=>{if(confirm('Cancel this workout?')){state.currentWorkout=null;save();render()}}
window.startTimer=(sec)=>{let end=Date.now()+sec*1000;let id=setInterval(()=>{let left=Math.max(0,Math.ceil((end-Date.now())/1000));document.title=left?`FORGE • ${left}s`:'FORGE'; if(!left){clearInterval(id);navigator.vibrate?.(180);render()}},1000)}
function finishWorkout(){
 const c=state.currentWorkout;
 const history={id:'h'+Date.now(),programId:c.programId,workout:c.workout,date:new Date().toISOString(),completedSets:0,exercises:c.exercises.map(e=>{
  let sets=e.setData.map(s=>({...s})); historyDummy=0; return {name:e.name,targetReps:e.reps,muscles:e.muscles,sets}
 })};
 history.completedSets=history.exercises.reduce((n,e)=>n+e.sets.filter(s=>s.done).length,0);
 state.history.unshift(history); state.currentWorkout=null; save(); state.route='progress';render()
}
window.finishWorkout=finishWorkout;
function findPrevious(name){
 for(const h of state.history){let e=h.exercises?.find(x=>x.name===name);if(e)return e.sets.filter(s=>s.done)}
 return null
}
function openExercise(name){state.exercise=name;state.route='exercise';save();render()}
window.openExercise=openExercise;
function exercisePage(){
 let name=state.exercise||'Low-Incline Smith Press';
 let e; activeProgram().workouts.forEach(w=>w.exercises.forEach(x=>{if(x.name===name)e=x}));
 let steps=technique[name]||[
  'Adjust the equipment so the movement fits your joints and range of motion.',
  'Brace and establish a stable starting position.',
  'Move through a controlled range without using unnecessary momentum.',
  'Keep the target muscle loaded while maintaining comfortable joint alignment.',
  'Stop the set when technique meaningfully deteriorates.'
 ];
 return layout(`<button class="btn ghost small" onclick="nav('train')">← Back</button><h1>${name}</h1><div class="sub">${e?.muscles?.join(' • ')||'Exercise technique'}</div>
 <div class="video section">▶ VIDEO / GIF DEMONSTRATION<br><span class="sub" style="position:absolute;margin-top:46px">Media slot ready for licensed or self-recorded clips</span></div>
 <div class="section"><h2>Step-by-step</h2><div class="steps">${steps.map(s=>`<div class="step">${s}</div>`).join('')}</div></div>
 <div class="section grid two"><div class="card"><h3>Key cues</h3><p class="sub">Controlled eccentric • stable joints • full comfortable ROM • target muscle first.</p></div>
 <div class="card"><h3>Common mistakes</h3><p class="sub">Too much load • momentum • shortening ROM • ignoring pain or unstable positioning.</p></div></div>
 <div class="section card"><h3>Video source</h3><p class="sub">The MVP intentionally ships without copied third-party exercise videos. Add licensed clips, your own recordings, or approved URLs later.</p></div>`,'train')
}
function programs(){
 return layout(`<h1>Programs</h1><p class="sub">Gym, mobility and home routines can all coexist.</p>
 ${state.programs.map(p=>`<div class="card section"><div class="row"><div><h3>${p.name}</h3><div class="sub">Week ${p.week}/${p.length} • ${p.workouts.length} days</div></div><span class="pill active">Active</span></div>
 <div style="margin-top:10px">${p.workouts.map(w=>`<div class="exercise"><div><div class="exercise-title">${w.name}</div><div class="exercise-meta">${w.est} • ${w.exercises.length} exercises</div></div><button class="btn secondary small" onclick="startWorkout('${w.name}')">Start</button></div>`).join('')}</div></div>`).join('')}
 <div class="section"><h2>Home workouts</h2>${homeWorkouts.map(h=>`<div class="card" style="margin-bottom:10px"><h3>${h.name}</h3><div class="sub">${h.equipment} • ${h.ex.join(' • ')}</div></div>`).join('')}</div>
 <div class="section card"><h2>Create custom routine</h2><label>Name</label><input id="customName" placeholder="e.g. Hotel Full Body"><label>Type</label><select id="customType"><option>Gym</option><option>Stretching</option><option>Home</option><option>Core</option><option>Cardio</option></select><button class="btn" style="width:100%;margin-top:10px" onclick="addCustom()">Create</button></div>`,'programs')
}
window.addCustom=()=>{let n=$('#customName').value.trim(); if(!n)return; state.custom.push({name:n,type:$('#customType').value});save();alert('Created. Full routine editor is the next build step.')}
function progress(){
 let muscle={};
 state.history.slice(0,5).forEach(h=>h.exercises?.forEach(e=>e.sets.filter(s=>s.done).forEach(()=>e.muscles?.forEach((m,i)=>{muscle[m]=(muscle[m]||0)+(i===0?1:.5)}))));
 let top=Object.entries(muscle).sort((a,b)=>b[1]-a[1]).slice(0,12);
 return layout(`<h1>Progress</h1><div class="grid two">
 <div class="card"><div class="sub">Completed workouts</div><div class="metric">${state.history.length}</div></div>
 <div class="card"><div class="sub">Current bodyweight</div><div class="metric">${state.weights[0]?.kg||'—'} <span style="font-size:12px">kg</span></div></div></div>
 <div class="section card"><h2>Log bodyweight</h2><div class="row"><input id="weightInput" inputmode="decimal" placeholder="kg"><button class="btn" onclick="logWeight()">Save</button></div>
 ${state.weights.length?`<div class="sub" style="margin-top:10px">Recent: ${state.weights.slice(0,7).map(w=>w.kg).join(' • ')} kg</div>`:''}</div>
 <div class="section"><h2>Muscles trained — recent week</h2><div class="musclegrid">${top.length?top.map(([m,s])=>`<div class="muscle"><strong>${m}</strong><span>${s.toFixed(1)} weighted sets</span></div>`).join(''):'<div class="card sub">Complete workouts to build your muscle map.</div>'}</div></div>
 <div class="section"><h2>Strength progression</h2>${strengthCards()}</div>`,'progress')
}
window.logWeight=()=>{let kg=parseFloat($('#weightInput').value);if(!kg)return;state.weights.unshift({kg,date:new Date().toISOString()});save();render()}
function strengthCards(){
 let names=['Low-Incline Smith Press','Hack Squat','Plate-Loaded Shoulder Press','Romanian Deadlift'];
 return names.map(n=>{
  let hist=[];state.history.slice().reverse().forEach(h=>{let e=h.exercises?.find(x=>x.name===n);if(e){let best=e.sets.filter(s=>s.done).sort((a,b)=>(+b.weight*+b.reps)-(+a.weight*+a.reps))[0];if(best)hist.push(best)}})
  let trend=hist.length>1&&(+hist.at(-1).weight*+hist.at(-1).reps)>(+hist[0].weight*+hist[0].reps);
  return `<div class="card" style="margin-bottom:10px"><div class="row"><div><h3>${n}</h3><div class="sub">${hist.length?`Latest: ${hist.at(-1).weight} kg × ${hist.at(-1).reps}`:'No data yet'}</div></div><span class="pill ${trend?'active':''}">${trend?'Progressing':'Track'}</span></div></div>`
 }).join('')
}
function openStretch(name){state.stretch=name;state.route='stretch';save();render()}
window.openStretch=openStretch;
function stretchPage(){
 let s=stretches.find(x=>x.name===state.stretch)||stretches[0];
 return layout(`<button class="btn ghost small" onclick="nav('today')">← Back</button><h1>${s.name}</h1><p class="sub">${s.goal} • guided sequence</p>
 ${s.items.map(([n,sec],i)=>`<div class="card section"><div class="row"><div><div class="sub">MOVEMENT ${i+1}</div><h3>${n}</h3><div class="sub">${sec} sec</div></div><button class="btn secondary small" onclick="${n==='Kneeling Hip-Flexor Stretch'?`openExercise('Kneeling Hip-Flexor Stretch')`:`alert('Video + detailed technique slot ready for ${n.replace(/'/g,"")}')`}">Video + how to</button></div></div>`).join('')}`,'train')
}
function settings(){
 let p=state.profile;
 return layout(`<h1>Your goals</h1><p class="sub">These settings drive future training and mobility recommendations.</p>
 <div class="card"><label>Physique goal</label><select id="sg"><option ${p.goal==='Lean V-Taper'?'selected':''}>Lean V-Taper</option><option>Strength + Muscle</option><option>Athletic</option><option>Balanced Physique</option></select>
 <label>Priority muscles</label><input id="sp" value="${p.priorities.join(', ')}">
 <div class="grid two"><div><label>Block length</label><select id="sb">${[3,4,5,6,7,8].map(x=>`<option ${x===p.block?'selected':''}>${x}</option>`).join('')}</select></div><div><label>Variety</label><select id="sv"><option ${p.variety==='Low'?'selected':''}>Low</option><option ${p.variety==='Balanced'?'selected':''}>Balanced</option><option ${p.variety==='High'?'selected':''}>High</option></select></div></div>
 <label>Workout limit (min)</label><input id="sl" type="number" value="${p.limit}">
 <button class="btn" style="width:100%;margin-top:14px" onclick="saveSettings()">Save goals</button></div>
 <div class="section card"><h2>Mobility goals</h2>${['Full-body flexibility','Morning mobility','Night relaxation','Hip mobility','Shoulder mobility','Hamstring flexibility','Athletic mobility'].map(g=>`<span class="pill ${state.mobilityGoals.includes(g)?'active':''}" style="margin:4px" onclick="toggleMobility('${g}')">${g}</span>`).join('')}</div>
 <div class="section card"><h2>App data</h2><button class="btn ghost" onclick="resetApp()">Reset demo data</button></div>`,'settings')
}
window.saveSettings=()=>{state.profile.goal=$('#sg').value;state.profile.priorities=$('#sp').value.split(',').map(x=>x.trim()).filter(Boolean);state.profile.block=+$('#sb').value;state.profile.variety=$('#sv').value;state.profile.limit=+$('#sl').value;activeProgram().length=state.profile.block;save();alert('Goals saved.');render()}
window.toggleMobility=g=>{state.mobilityGoals=state.mobilityGoals.includes(g)?state.mobilityGoals.filter(x=>x!==g):[...state.mobilityGoals,g];save();render()}
window.resetApp=()=>{if(confirm('Reset all FORGE demo data?')){localStorage.removeItem(DBKEY);state=seed();render()}}
function esc(s){return s.replace(/'/g,"\\'")}

function render(){
 let app=$('#app');
 if(!state.onboarded){app.innerHTML=onboarding();return}
 const routes={today,train,programs,progress,settings,exercise:exercisePage,stretch:stretchPage};
 app.innerHTML=(routes[state.route]||today)();
}
render();
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
