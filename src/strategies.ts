export type StrategyId = string;

export interface StrategyConfig {
  id: StrategyId;
  name: string;
  desc: string;
  isDynamic: boolean; // スクロール速度に応じて線形補間(Lerp)するかどうか（パターンBかどうか）
  targetBlur?: number;
  targetOpacity?: number;
  hasAnimation: boolean;
}

export const BASE_PROPERTIES = {
  blur: 20,
  opacity: 0.5,
};

export const STRATEGIES: StrategyConfig[] = [
  {
    id: "4",
    name: "可変なし",
    desc: "総合的な好ましさ基準",
    isDynamic: false,
    hasAnimation: true,
  },
  {
    id: "A1",
    name: "A1 二値・α低",
    desc: "スクロール中は不透明度を下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur,
    targetOpacity: BASE_PROPERTIES.opacity * 0.5,
    hasAnimation: false,
  },
  {
    id: "A2",
    name: "A2 二値・blur低い",
    desc: "スクロール中はblurを下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.5,
    targetOpacity: BASE_PROPERTIES.opacity,
    hasAnimation: false,
  },
  {
    id: "A3",
    name: "A3 二値・α高",
    desc: "スクロール中は不透明度を上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "A4",
    name: "A4 二値・blur",
    desc: "スクロール中はblurを上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity,
    hasAnimation: false,
  },
  {
    id: "A5",
    name: "A5 二値・α低_blurt低",
    desc: "スクロール中は不透明度を下げ、blurも下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "A6",
    name: "A6 二値・α高_blurt低",
    desc: "スクロール中は不透明度を上げ、blurは下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.5,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "A7",
    name: "A4 二値・α低_blurt高",
    desc: "スクロール中は不透明度を下げ、blurは上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 0.5,
    hasAnimation: false,
  },
  {
    id: "A8",
    name: "A4 二値・α高_blurt高",
    desc: "スクロール中は不透明度を上げ、blurも上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
];
