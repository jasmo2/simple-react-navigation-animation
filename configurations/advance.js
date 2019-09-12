import { fromRight, fromBottom } from '../lib/transitions';

const screenVerification = (
  { prevScene, nextScene },
  prevScreen,
  nextScreen
) => {
  if (
    prevScene &&
    prevScene.route.routeName === prevScreen &&
    nextScene.route.routeName === nextScreen
  ) {
    return true;
  }

  return false;
};

const handleCustomTransition = ({ scenes, scene }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  const sceneIndex = scene.index;
  const sceneCount = scenes.length;

  const sceneConfig = { prevScene, nextScene };

  /**
   * The following logic is focus on forward transition:
   * By comparing sceneIndex is bigger or equal than sceneCount - 1,
   * it goes back.
   */
  if (sceneIndex >= sceneCount - 1) {
    if (screenVerification(sceneConfig, 'Screen1', 'Screen2')) {
      return fromRight({ duration: 1800, percentageRange: 0.5 });
    }
    if (screenVerification(sceneConfig, 'Screen2', 'ScreenNonExistance')) {
      return fromBottom({ duration: 450, percentageRange: 0.05 });
    }
  } else {
    /**
     * The following logic is focus on reverse transition.
     */
    if (screenVerification(sceneConfig, 'Screen1', 'Screen2')) {
      return fromBottom({ duration: 2600, percentageRange: 0.05 });
    }
  }

  //Default option if the screen is not listed on the options
  return fromRight({});
};

/**
 * Advance implementation
 * add the same custom transition to all transition animation
 */

export const advanceConfig = nav => handleCustomTransition(nav);
