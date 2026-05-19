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
    name: "4 可変なし",
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
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "A2",
    name: "A2 二値・blur低",
    desc: "スクロール中はblurを下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
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
    name: "A4 二値・blur高",
    desc: "スクロール中はblurを上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity,
    hasAnimation: false,
  },
  {
    id: "A5",
    name: "A5 二値・α低_blur低",
    desc: "スクロール中は不透明度を下げ、blurも下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "A6",
    name: "A6 二値・α高_blur低",
    desc: "スクロール中は不透明度を上げ、blurは下げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "A7",
    name: "A7 二値・α低_blur高",
    desc: "スクロール中は不透明度を下げ、blurは上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "A8",
    name: "A8 二値・α高_blur高",
    desc: "スクロール中は不透明度を上げ、blurも上げる",
    isDynamic: false,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "B1",
    name: "B1 速度・α低",
    desc: "速度に応じて不透明度を下げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "B2",
    name: "B2 速度・blur低",
    desc: "速度に応じてblurを下げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity,
    hasAnimation: false,
  },
  {
    id: "B3",
    name: "B3 速度・α高",
    desc: "速度に応じて不透明度を上げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "B4",
    name: "B4 速度・blur高",
    desc: "速度に応じてblurを上げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity,
    hasAnimation: false,
  },
  {
    id: "B5",
    name: "B5 速度・α低_blur低",
    desc: "速度に応じて不透明度を下げ、blurも下げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "B6",
    name: "B6 速度・α高_blur低",
    desc: "速度に応じて不透明度を上げ、blurは下げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 0.3,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
  {
    id: "B7",
    name: "B7 速度・α低_blur高",
    desc: "速度に応じて不透明度を下げ、blurは上げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 0.3,
    hasAnimation: false,
  },
  {
    id: "B8",
    name: "B8 速度・α高_blur高",
    desc: "速度に応じて不透明度を上げ、blurも上げる",
    isDynamic: true,
    targetBlur: BASE_PROPERTIES.blur * 1.5,
    targetOpacity: BASE_PROPERTIES.opacity * 1.5,
    hasAnimation: false,
  },
];
