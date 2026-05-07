import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const Detail = () => {
  const { id } = useParams();
  const imgSrc = `https://picsum.photos/seed/${id}/800/800`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <BackButton />
      
      <img src={imgSrc} alt="" className="w-full aspect-square object-cover" />
      
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">詳細タイトル {id}</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            グラスモーフィズムは、背景のぼかし（Blur）と半透明な背景色（Opacity）を組み合わせることで、すりガラスのような質感を表現するUIデザイン手法です。
          </p>
          <p>
            近年、iOSやmacOS、Windows 11など様々なOSで採用されており、モダンで洗練された印象を与えます。
            しかし、背後のコンテンツがスクロールなどによって激しく動く場合、ぼかし処理の再計算が連続して発生し、「フリッカー（チラつき）」やパフォーマンス低下を引き起こす可能性があります。
          </p>
          <p>
            本アプリでは、このスクロール時のフリッカー現象を緩和するため、スクロールの速度や状態に応じてグラスモーフィズムのパラメータを動的に変化させる手法（strategy）を提案・検証します。
          </p>
          {Array.from({ length: 5 }).map((_, i) => (
             <p key={i}>
                ダミーテキスト。スクロールを発生させるための長文です。この部分を上下にスワイプして、画面上部の戻るボタンや構成要素のグラスモーフィズムがいかに変化するかを観察してください。スクロール速度によっても変化度合いが変わる手法を含んでいます。
             </p>
          ))}
        </div>
      </div>
    </div>
  );
};
