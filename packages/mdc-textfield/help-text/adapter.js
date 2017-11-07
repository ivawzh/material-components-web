/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Adapter for MDC Textfield.
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Textfield into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
class MDCTextfieldHelpTextAdapter {

  /**
   * Adds a class to the help text element. Note that in our code we check for
   * whether or not we have a help text element and if we don't, we simply
   * return.
   * @param {string} className
   */
  addClassToHelptext(className) {}

  /**
   * Removes a class from the help text element.
   * @param {string} className
   */
  removeClassFromHelptext(className) {}

  /**
   * Returns whether or not the help text element contains the given class.
   * @param {string} className
   * @return {boolean}
   */
  helptextHasClass(className) {}

  /**
   * Sets an attribute with a given value on the help text element.
   * @param {string} name
   * @param {string} value
   */
  setHelptextAttr(name, value) {}

  /**
   * Removes an attribute from the help text element.
   * @param {string} name
   */
  removeHelptextAttr(name) {}
}

export default MDCTextfieldHelpTextAdapter;