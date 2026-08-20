# FORGE MVP

A functional mobile-first PWA prototype based on the training-coach concept.

## Included
- Goal onboarding: physique goal, priority muscles, days, duration, 3–8 week blocks, variety preference
- Seeded Phase 6 Upper A / Lower A / Push / Pull / Lower B program
- Live workout logging: weight, reps, RIR, completed sets
- Rest timer support
- Exercise technique pages with step-by-step guidance and video/GIF media slots
- Progression suggestions based on hitting top-of-range reps
- Workout history and benchmark strength cards
- Daily/recent muscle training volume map
- Bodyweight tracking
- Stretching/mobility routines and mobility goals
- Morning and night stretch routines with door-frame dead hangs
- Home workout library
- Custom routine starter
- LocalStorage persistence
- Offline-capable PWA shell

## Video note
The prototype intentionally does not copy third-party copyrighted exercise libraries.
Replace media placeholders with:
1. licensed exercise videos,
2. self-recorded videos,
3. properly licensed open-source clips, or
4. approved hosted URLs.

## Run locally
Because service workers require HTTP rather than file://:

### Python
```bash
cd forge_mvp
python3 -m http.server 8080
```

Then open:
http://localhost:8080

On iPhone, host this folder on any HTTPS static host and use Safari -> Share -> Add to Home Screen.

## Next development steps
- Authentication + cloud sync
- Database/backend
- Full custom workout editor
- True anatomical SVG heatmap
- Program-generation engine based on goal/experience/equipment
- Plateau detection across multiple exposures
- Deload logic
- Exercise substitution rules
- Real licensed video library
- Apple Health / Health Connect integrations
- Progress photos and measurements
- Native iOS/Android packaging
