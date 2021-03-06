/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import UIManager from '../../ReactNative/UIManager';

/**
 * This is a function exposed to the React Renderer that can be used by the
 * pre-Fabric renderer to emit accessibility events to pre-Fabric nodes.
 */
function legacySendAccessibilityEvent(
  reactTag: number,
  eventType: string,
): void {
  if (eventType === 'focus') {
    UIManager.sendAccessibilityEvent(
      reactTag,
      UIManager.getConstants().AccessibilityEventTypes.typeViewFocused,
    );
  }
}

module.exports = legacySendAccessibilityEvent;
