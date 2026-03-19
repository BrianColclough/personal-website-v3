import { createSignal, onMount, Show, For } from "solid-js";

export default function StravaRuns() {
  const [runs, setRuns] = createSignal<any[]>([]);
  const [loading, setLoading] = createSignal(true);
  const [error, setError] = createSignal<string | null>(null);

  onMount(async () => {
    try {
      const res = await fetch('/api/strava');
      if (!res.ok) throw new Error('Failed to fetch runs');
      const data = await res.json();
      setRuns(data.slice(0, 3));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  });

  const formatPace = (paceSecsPerKm: number) => {
    const paceSecsPerMi = paceSecsPerKm * 1.60934;
    const mins = Math.floor(paceSecsPerMi / 60);
    const secs = Math.floor(paceSecsPerMi % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}/mi`;
  };

  const formatDistance = (meters: number) => {
    return (meters * 0.000621371).toFixed(2) + ' mi';
  };

  const cardStyles = [
    { bg: "bg-[#bbf7d0]", border: "border-black", text: "text-black", shadow: "8px 8px 0px #000", sticker: "bg-white border-black border-2 shadow-[2px_2px_0_#000] text-black rounded-lg" },
    { bg: "bg-[#fbcfe8]", border: "border-black", text: "text-black", shadow: "8px 8px 0px #000", sticker: "bg-white border-black border-2 shadow-[2px_2px_0_#000] text-black rounded-lg" },
    { bg: "bg-[#b28cff]", border: "border-black", text: "text-black", shadow: "8px 8px 0px #000", sticker: "bg-white border-black border-2 shadow-[2px_2px_0_#000] text-black rounded-lg" }
  ];

  return (
    <div class="mb-4 relative z-20">
      <div class="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p class="font-mono font-bold text-text-secondary uppercase tracking-widest text-sm mb-2">Strava</p>
          <h2 class="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tight">
            Recent Runs
          </h2>
        </div>
        <div>
          <a href="https://www.strava.com/athletes/121531955" target="_blank" rel="noopener noreferrer" class="btn btn-secondary border-4 border-black font-bold uppercase shadow-[4px_4px_0_#000] text-sm px-6 py-2 transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] inline-block">
            Follow on Strava &rarr;
          </a>
        </div>
      </div>

      <Show when={loading()}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <For each={[1, 2, 3]}>{() => (
            <div class="bg-surface-container-lowest border-4 border-gray-300 aspect-square rounded-2xl animate-pulse shadow-[8px_8px_0_#e5e7eb]"></div>
          )}</For>
        </div>
      </Show>

      <Show when={error()}>
        <div class="bg-error-container border-4 border-error text-error p-6 rounded-2xl shadow-[6px_6px_0_#ef4444]">
          <h3 class="font-bold font-mono text-xl mb-2">Error loading runs</h3>
          <p class="font-sans">{error()}</p>
        </div>
      </Show>

      <Show when={!loading() && !error()}>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <For each={runs()}>{(run, index) => {
            const style = cardStyles[index() % cardStyles.length];
            const dateStr = new Date(run.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
            
            return (
              <a href={`https://www.strava.com/activities/${run.id}`} target="_blank" rel="noopener noreferrer" 
                 class={`card-asymmetric ${style.bg} border-4 ${style.border} ${style.text} flex flex-col justify-between block no-underline focus-ring hover:-translate-y-2 transition-transform duration-300 relative group p-6 rounded-2xl`}
                 style={{ "box-shadow": style.shadow }}>
                
                {/* Random Tape */}
                <div class="absolute -top-3 left-1/2 -ml-8 w-16 h-6 bg-white/60 rotate-2 border-x-2 border-black backdrop-blur-sm shadow-sm opacity-90 z-20"></div>

                <div>
                  <div class="flex justify-between items-start mb-6 pt-2">
                    <span class={`font-mono text-sm font-bold px-3 py-1 -rotate-3 ${style.sticker}`}>{dateStr}</span>
                    <span class="font-mono font-extrabold text-xl sm:text-2xl bg-white border-4 border-black px-2 py-0.5 shadow-[4px_4px_0_#000] rotate-2">{formatDistance(run.distance)}</span>
                  </div>
                  <h3 class="text-3xl font-display font-black leading-[1.1] mb-4 tracking-tight group-hover:underline underline-offset-4 decoration-4">{run.name}</h3>
                  <Show when={run.description}>
                    <p class="font-mono text-sm opacity-90 mt-2 bg-white/60 border-l-4 border-black p-3 font-medium shadow-sm">
                      "{run.description}"
                    </p>
                  </Show>
                </div>
                
                <div class="mt-8 flex justify-between items-end border-t-4 border-black pt-4">
                   <div class="font-mono text-lg font-black uppercase">
                     {formatPace(run.pace)}
                   </div>
                   <div class="font-mono font-bold border-2 border-black shadow-[2px_2px_0_#000] bg-white text-black px-3 py-1 text-xs group-hover:bg-primary group-hover:text-white transition-colors">
                     View &nearr;
                   </div>
                </div>
              </a>
            );
          }}</For>
        </div>
      </Show>
    </div>
  );
}
