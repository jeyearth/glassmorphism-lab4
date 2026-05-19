import { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store';
import { STRATEGIES } from '../strategies';

export const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { strategy, setStrategy, isBinaryAnimationEnabled, toggleBinaryAnimation } = useAppStore();

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-4 z-50 p-4 bg-blue-600 text-white rounded-full shadow-lg border border-blue-500"
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
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 pb-20 max-h-[80vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-white px-6 pt-6 pb-2 z-10 border-b border-transparent">
                <h2 className="text-xl font-bold">Strategy</h2>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isBinaryAnimationEnabled}
                      onChange={toggleBinaryAnimation}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    2値アニメーション
                  </label>
                  <button onClick={() => setIsOpen(false)} className="p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="space-y-3 px-6">
                {STRATEGIES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setStrategy(s.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-colors ${
                      strategy === s.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="font-bold text-gray-900">{s.name}</div>
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
