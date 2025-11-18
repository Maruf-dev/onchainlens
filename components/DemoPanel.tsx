import React, { useEffect, useMemo, useState } from 'react';
import type { Wallet } from '../types';

const mockData: Wallet[] = [
  { wallet: '0xAbC...01', chain: 'Ethereum', win_rate: 0.84, hold_days: 120, last_tx: '2025-10-30' },
  { wallet: '0xDeF...02', chain: 'BSC',      win_rate: 0.76, hold_days: 95,  last_tx: '2025-11-02' },
  { wallet: '0x123...45', chain: 'Solana',   win_rate: 0.91, hold_days: 45,  last_tx: '2025-11-05' },
  { wallet: '0x456...78', chain: 'Ethereum', win_rate: 0.65, hold_days: 210, last_tx: '2025-09-15' },
  { wallet: '0x789...ab', chain: 'Polygon',  win_rate: 0.88, hold_days: 88,  last_tx: '2025-10-28' },
  { wallet: '0xabc...de', chain: 'BSC',      win_rate: 0.79, hold_days: 150, last_tx: '2025-10-10' },
  { wallet: '0xdef...12', chain: 'Arbitrum', win_rate: 0.95, hold_days: 30,  last_tx: '2025-11-08' },
  { wallet: '0xghi...34', chain: 'Ethereum', win_rate: 0.71, hold_days: 180, last_tx: '2025-08-22' },
];

type ChainFilter = 'all' | 'Ethereum' | 'BSC' | 'Polygon' | 'Solana' | 'Arbitrum';

const chains: ChainFilter[] = ['all', 'Ethereum', 'BSC', 'Polygon', 'Solana', 'Arbitrum'];

const DemoPanel: React.FC = () => {
  const [data, setData] = useState<Wallet[]>([]);
  const [loading, setLoading] = useState(true);
  const [chainFilter, setChainFilter] = useState<ChainFilter>('all');
  const [minWinRate, setMinWinRate] = useState<number>(0.75);

  useEffect(() => {
    // имитация запроса к /api/demo-wallets
    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return data
      .filter((w) => (chainFilter === 'all' ? true : w.chain === chainFilter))
      .filter((w) => w.win_rate >= minWinRate)
      .sort((a, b) => b.win_rate - a.win_rate || b.hold_days - a.hold_days);
  }, [data, chainFilter, minWinRate]);

  const avgWin = useMemo(
    () => (data.length ? data.reduce((acc, w) => acc + w.win_rate, 0) / data.length : 0),
    [data]
  );

  const avgHold = useMemo(
    () => (data.length ? data.reduce((acc, w) => acc + w.hold_days, 0) / data.length : 0),
    [data]
  );

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Демо-панель: рейтинг кошельков
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            Здесь показан демо-набор данных. В реальном режиме эта панель будет
            запрашивать результаты SQL-запросов через API Dune / Flipside и
            автоматически формировать рейтинг.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <div className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-slate-300">
            Средний PnL по выборке: <span className="text-emerald-400">{(avgWin * 100).toFixed(1)}%</span>
          </div>
          <div className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-slate-300">
            Среднее удержание: <span className="text-cyan-300">{avgHold.toFixed(0)} дней</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">
        {/* Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl shadow-cyan-500/10">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap gap-2">
              {chains.map((ch) => (
                <button
                  key={ch}
                  onClick={() => setChainFilter(ch)}
                  className={`rounded-full px-3 py-1 ${
                    chainFilter === ch
                      ? 'bg-cyan-500 text-slate-950 shadow shadow-cyan-500/40'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-200'
                  } transition-colors`}
                >
                  {ch === 'all' ? 'Все сети' : ch}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <span>Мин. PnL:</span>
              <select
                value={minWinRate}
                onChange={(e) => setMinWinRate(Number(e.target.value))}
                className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1 text-xs focus:border-cyan-500 focus:outline-none"
              >
                <option value={0.6}>60%</option>
                <option value={0.7}>70%</option>
                <option value={0.75}>75%</option>
                <option value={0.8}>80%</option>
                <option value={0.9}>90%</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-xs text-slate-200">
              <thead className="border-b border-slate-800 text-[11px] uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="pb-2 pr-4">#</th>
                  <th className="pb-2 pr-4">Кошелёк</th>
                  <th className="pb-2 pr-4">Сеть</th>
                  <th className="pb-2 pr-4">PnL</th>
                  <th className="pb-2 pr-4">Удержание</th>
                  <th className="pb-2 pr-4">Последняя активность</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-slate-400">
                      Загрузка демо-данных…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-6 text-center text-slate-400">
                      Нет кошельков, удовлетворяющих выбранным фильтрам.
                    </td>
                  </tr>
                ) : (
                  filtered.map((w, idx) => (
                    <tr
                      key={w.wallet + w.chain}
                      className="border-b border-slate-900/60 last:border-0 hover:bg-slate-900/80"
                    >
                      <td className="py-2 pr-4 text-slate-500">{idx + 1}</td>
                      <td className="py-2 pr-4 font-mono text-[11px] text-sky-300">
                        {w.wallet}
                      </td>
                      <td className="py-2 pr-4 text-xs text-slate-300">{w.chain}</td>
                      <td className="py-2 pr-4 text-xs">
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400 border border-emerald-500/40">
                          {(w.win_rate * 100).toFixed(0)}%
                        </span>
                      </td>
                      <td className="py-2 pr-4 text-xs text-slate-300">
                        {w.hold_days} дней
                      </td>
                      <td className="py-2 pr-4 text-xs text-slate-400">{w.last_tx}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Explanation card */}
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              Как использовать эту панель в курсовой
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              В пояснительной записке можно описать, что данная таблица иллюстрирует
              результаты аналитического модуля системы: фильтрацию кошельков по PnL и
              времени удержания, ранжирование и поддержку нескольких блокчейн-сетей.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              При переходе от демо к продакшену достаточно заменить мок-данные
              на вызов API Dune / Flipside и подключить реальные SQL-запросы.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4 text-xs text-cyan-100">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300 mb-1">
              Гибрид: наука + продукт
            </div>
            <p>
              Демо-панель одновременно выполняет роль научного эксперимента
              (моделирование метрик) и прототипа стартап-продукта для криптоинвесторов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoPanel;
