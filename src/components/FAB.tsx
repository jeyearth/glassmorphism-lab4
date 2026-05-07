import { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore, type Strategy } from '../store';

export const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { strategy, setStrategy } = useAppStore();

  const strategies: { id: Strategy; label: string; desc: string }[] = [
    { id: 1, label: '固定', desc: '常にベース値を維持' },
    { id: 2, label: '二値・隠す', desc: 'スクロール中は不透明度を上げる' },
    { id: 3, label: '二値・潰す', desc: 'スクロール中は透明度を上げる' },
    { id: 4, label: '速度可変・隠す', desc: '速度に応じて不透明に' },
    { id: 5, label: '速度可変・潰す', desc: '速度に応じて透明に' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg"
      >
        <Settings className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-6 pb-safe"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Strategy</h2>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-3">
                {strategies.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStrategy(s.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-colors ${
                      strategy === s.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="font-bold text-gray-900">{s.label}</div>
                    <div className="text-sm text-gray-500 mt-1">{s.desc}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
