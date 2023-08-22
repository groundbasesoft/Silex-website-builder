/*
 * Silex website builder, free/libre no-code tool for makers.
 * Copyright (c) 2023 lexoyo and Silex Labs foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Editor } from 'grapesjs'

/**
 * @fileoverview Adds various css properties
 */

export default (editor: Editor, opts) => {
  editor.on('load', () => {
    editor.StyleManager.addProperty('dimension', {
      name: 'Min width',
      property: 'min-width',
      type: 'integer',
      units: ['px', '%', 'em'],
      default: 'auto',
      fixedValues: ['inherit', 'initial', 'unset', 'none', 'max-content', 'min-content', 'fit-content'],
    }, { at: 2 })
    editor.StyleManager.addProperty('dimension', {
      name: 'Max height',
      property: 'max-height',
      type: 'integer',
      units: ['px', '%', 'em'],
      default: 'auto',
      fixedValues: ['inherit', 'initial', 'unset', 'none', 'max-content', 'min-content', 'fit-content'],
    }, { at: 5 })
    editor.StyleManager.addProperty('dimension', {
      name: 'Overflow',
      property: 'overflow',
      type: 'composite',
      properties: [{
        name: 'Overflow X',
        type: 'radio',
        options: [
          /* @ts-ignore */
          { value: 'auto', name: 'auto' },
          /* @ts-ignore */
          { value: 'hidden', name: 'hidden' },
          /* @ts-ignore */
          { value: 'visible', name: 'visible' },
          /* @ts-ignore */
          { value: 'scroll', name: 'scroll' },
        ],
      }, {
        name: 'Overflow Y',
        type: 'radio',
        options: [
          /* @ts-ignore */
          { value: 'auto', name: 'auto' },
          /* @ts-ignore */
          { value: 'hidden', name: 'hidden' },
          /* @ts-ignore */
          { value: 'visible', name: 'visible' },
          /* @ts-ignore */
          { value: 'scroll', name: 'scroll' },
        ],
      }],
      info: 'The overflow CSS property sets what to do when an element\'s content is too big to fit in its block formatting context. It is a shorthand for overflow-x and overflow-y.',
    }, { at: 6 })
    editor.StyleManager.addProperty('extra', {
      name: 'Z index',
      property: 'z-index',
      type: 'slider',
      step: 1,
      min: -10000,
      max: 10000,
      units: [],
      info: 'Stacking order of the element',
      default: 'auto',
      fixedValues: ['auto', 'unset', 'initial', 'inherit', 'revert'],
    }, { at: 1 })
    editor.StyleManager.addProperty('extra', {
      name: 'Pointer events',
      property: 'pointer-events',
      type: 'select',
      defaults: 'auto',
      options: [
        /* @ts-ignore */
        { value: 'auto', name: 'auto' },
        /* @ts-ignore */
        { value: 'none', name: 'none' },
        /* @ts-ignore */
        { value: 'visiblePainted', name: 'visiblePainted' },
        /* @ts-ignore */
        { value: 'visibleFill', name: 'visibleFill' },
        /* @ts-ignore */
        { value: 'visibleStroke', name: 'visibleStroke' },
        /* @ts-ignore */
        { value: 'visible', name: 'visible' },
        /* @ts-ignore */
        { value: 'painted', name: 'painted' },
        /* @ts-ignore */
        { value: 'fill', name: 'fill' },
        /* @ts-ignore */
        { value: 'stroke', name: 'stroke' },
        /* @ts-ignore */
        { value: 'all', name: 'all' },
      ],
      info: 'The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.',
    }, { at: 2 })
    editor.StyleManager.addProperty('extra', {
      name: 'Cursor',
      property: 'cursor',
      type: 'select',
      defaults: 'auto',
      options: [
        /* @ts-ignore */
        { value: 'auto', name: 'auto' },
        /* @ts-ignore */
        { value: 'default', name: 'default' },
        /* @ts-ignore */
        { value: 'none', name: 'none' },
        /* @ts-ignore */
        { value: 'context-menu', name: 'context-menu' },
        /* @ts-ignore */
        { value: 'help', name: 'help' },
        /* @ts-ignore */
        { value: 'pointer', name: 'pointer' },
        /* @ts-ignore */
        { value: 'progress', name: 'progress' },
        /* @ts-ignore */
        { value: 'wait', name: 'wait' },
        /* @ts-ignore */
        { value: 'cell', name: 'cell' },
        /* @ts-ignore */
        { value: 'crosshair', name: 'crosshair' },
        /* @ts-ignore */
        { value: 'text', name: 'text' },
        /* @ts-ignore */
        { value: 'vertical-text', name: 'vertical-text' },
        /* @ts-ignore */
        { value: 'alias', name: 'alias' },
        /* @ts-ignore */
        { value: 'copy', name: 'copy' },
        /* @ts-ignore */
        { value: 'move', name: 'move' },
        /* @ts-ignore */
        { value: 'no-drop', name: 'no-drop' },
        /* @ts-ignore */
        { value: 'not-allowed', name: 'not-allowed' },
        /* @ts-ignore */
        { value: 'grab', name: 'grab' },
        /* @ts-ignore */
        { value: 'grabbing', name: 'grabbing' },
        /* @ts-ignore */
        { value: 'all-scroll', name: 'all-scroll' },
        /* @ts-ignore */
        { value: 'col-resize', name: 'col-resize' },
        /* @ts-ignore */
        { value: 'row-resize', name: 'row-resize' },
        /* @ts-ignore */
        { value: 'n-resize', name: 'n-resize' },
        /* @ts-ignore */
        { value: 'e-resize', name: 'e-resize' },
        /* @ts-ignore */
        { value: 's-resize', name: 's-resize' },
        /* @ts-ignore */
        { value: 'w-resize', name: 'w-resize' },
        /* @ts-ignore */
        { value: 'ne-resize', name: 'ne-resize' },
        /* @ts-ignore */
        { value: 'nw-resize', name: 'nw-resize' },
        /* @ts-ignore */
        { value: 'se-resize', name: 'se-resize' },
        /* @ts-ignore */
        { value: 'sw-resize', name: 'sw-resize' },
        /* @ts-ignore */
        { value: 'ew-resize', name: 'ew-resize' },
        /* @ts-ignore */
        { value: 'ns-resize', name: 'ns-resize' },
        /* @ts-ignore */
        { value: 'nesw-resize', name: 'nesw-resize' },
        /* @ts-ignore */
        { value: 'nwse-resize', name: 'nwse-resize' },
        /* @ts-ignore */
        { value: 'zoom-in', name: 'zoom-in' },
        /* @ts-ignore */
        { value: 'zoom-out', name: 'zoom-out' },
      ],
      info: 'The cursor CSS property sets the type of mouse cursor, if any, to show when the mouse pointer is over an element.',
    }, { at: 3 })
    editor.StyleManager.addProperty('extra', {
      name: 'Column count',
      property: 'column-count',
      type: 'integer',
      units: [],
      info: 'The column-count CSS property breaks an element\'s content into the specified number of columns.',
      default: 'auto',
      fixedValues: ['auto', 'inherit', 'initial', 'revert', 'unset'],
      min: 1,
    }, { at: 4 })
    editor.StyleManager.addProperty('extra', {
      name: 'Column width',
      property: 'column-width',
      type: 'integer',
      units: ['px', '%', 'em'],
      info: 'The column-width CSS property suggests an optimal column width. This is not a absolute value but a mere hint. Browser will adjust the width of the element automatically.',
      default: 'auto',
      fixedValues: ['auto', 'inherit', 'initial', 'revert', 'unset'],
    }, { at: 5 })
    editor.StyleManager.addProperty('extra', {
      name: 'Column gap',
      property: 'column-gap',
      type: 'integer',
      units: ['px', '%', 'em'],
      info: 'The column-gap CSS property sets the size of the gap (gutter) between an element\'s columns.',
      default: 'normal',
      fixedValues: ['normal', 'inherit', 'initial', 'revert', 'unset'],
    }, { at: 5 })
    editor.StyleManager.addProperty('extra', {
      name: 'Column rule',
      property: 'column-rule',
      type: 'composite',
      properties: [{
        name: 'Column rule width',
        property: 'column-rule-width',
        type: 'integer',
        units: ['px', '%', 'em'],
        info: 'The column-rule-width CSS property sets the width of the line drawn between columns in a multi-column layout.',
        default: 'medium',
        fixedValues: ['medium', 'thin', 'thick', 'inherit', 'initial', 'revert', 'unset'],
      }, {
        name: 'Column rule style',
        property: 'column-rule-style',
        type: 'select',
        defaults: 'none',
        options: [
          /* @ts-ignore */
          { value: 'none', name: 'none' },
          /* @ts-ignore */
          { value: 'hidden', name: 'hidden' },
          /* @ts-ignore */
          { value: 'dotted', name: 'dotted' },
          /* @ts-ignore */
          { value: 'dashed', name: 'dashed' },
          /* @ts-ignore */
          { value: 'solid', name: 'solid' },
          /* @ts-ignore */
          { value: 'double', name: 'double' },
          /* @ts-ignore */
          { value: 'groove', name: 'groove' },
          /* @ts-ignore */
          { value: 'ridge', name: 'ridge' },
          /* @ts-ignore */
          { value: 'inset', name: 'inset' },
          /* @ts-ignore */
          { value: 'outset', name: 'outset' },
          /* @ts-ignore */
          { value: 'inherit', name: 'inherit' },
        ],
        info: 'The column-rule-style CSS property sets the style of the line drawn between columns in a multi-column layout.',
      }, {
        name: 'Column rule color',
        property: 'column-rule-color',
        type: 'color',
        defaults: 'none',
        info: 'The column-rule-color CSS property sets the color of the line drawn between columns in a multi-column layout.',
      }],
    }, { at: 6 })
    editor.StyleManager.addProperty('extra', {
      name: 'Column span',
      property: 'column-span',
      type: 'select',
      defaults: 'none',
      options: [
        /* @ts-ignore */
        { value: 'none', name: 'none' },
        /* @ts-ignore */
        { value: 'all', name: 'all' },
      ],
      info: 'The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.',
    }, { at: 7 })

    editor.StyleManager.addProperty('decorations', {
      name: 'Outline',
      property: 'outline',
      type: 'composite',
      properties: [{
        name: 'Outline width',
        property: 'outline-width',
        type: 'integer',
        units: ['px', '%', 'em'],
        info: 'The outline-width CSS property sets the thickness of an element\'s outline. An outline is a line that is drawn around an element, outside the border.',
        default: 'medium',
        fixedValues: ['medium', 'thin', 'thick', 'inherit', 'initial', 'revert', 'unset'],
      }, {
        name: 'Outline style',
        property: 'outline-style',
        type: 'select',
        defaults: 'none',
        options: [
          /* @ts-ignore */
          { value: 'none', name: 'none' },
          /* @ts-ignore */
          { value: 'hidden', name: 'hidden' },
          /* @ts-ignore */
          { value: 'dotted', name: 'dotted' },
          /* @ts-ignore */
          { value: 'dashed', name: 'dashed' },
          /* @ts-ignore */
          { value: 'solid', name: 'solid' },
          /* @ts-ignore */
          { value: 'double', name: 'double' },
          /* @ts-ignore */
          { value: 'groove', name: 'groove' },
          /* @ts-ignore */
          { value: 'ridge', name: 'ridge' },
          /* @ts-ignore */
          { value: 'inset', name: 'inset' },
          /* @ts-ignore */
          { value: 'outset', name: 'outset' },
        ],
        info: 'The outline-style CSS property sets the style of an element\'s outline. An outline is a line that is drawn around an element, outside the border.',
      }, {
        name: 'Outline color',
        property: 'outline-color',
        type: 'color',
        defaults: 'none',
        info: 'The outline-color CSS property sets the color of an element\'s outline.',
      }],
    }, { at: 8 })
    editor.StyleManager.addProperty('typography', {
      name: 'Word break',
      property: 'word-break',
      type: 'select',
      defaults: 'normal',
      options: [
        /* @ts-ignore */
        { value: 'normal', name: 'normal' },
        /* @ts-ignore */
        { value: 'break-all', name: 'break-all' },
        /* @ts-ignore */
        { value: 'keep-all', name: 'keep-all' },
        /* @ts-ignore */
        { value: 'break-word', name: 'break-word' },
      ],
      info: 'The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.',
    }, { at: 7 })
    editor.StyleManager.addProperty('typography', {
      name: 'Word wrap',
      property: 'word-wrap',
      type: 'radio',
      defaults: 'normal',
      options: [
        /* @ts-ignore */
        { value: 'normal', name: 'normal' },
        /* @ts-ignore */
        { value: 'break-word', name: 'break-word' },
      ],
      info: 'The word-wrap CSS property sets whether the line may be broken within a word in order to prevent overflow when an otherwise unbreakable string is too long to fit in its containing box.',
    }, { at: 8 })
    editor.StyleManager.addProperty('typography', {
      name: 'White space',
      property: 'white-space',
      type: 'select',
      defaults: 'normal',
      options: [
        /* @ts-ignore */
        { value: 'normal', name: 'normal' },
        /* @ts-ignore */
        { value: 'nowrap', name: 'nowrap' },
        /* @ts-ignore */
        { value: 'pre', name: 'pre' },
        /* @ts-ignore */
        { value: 'pre-wrap', name: 'pre-wrap' },
        /* @ts-ignore */
        { value: 'pre-line', name: 'pre-line' },
        /* @ts-ignore */
        { value: 'break-spaces', name: 'break-spaces' },
      ],
      info: 'The white-space CSS property sets how white space inside an element is handled.',
    }, { at: 9 })
    editor.StyleManager.addProperty('typography', {
      name: 'Text decoration',
      property: 'text-decoration',
      type: 'composite',
      properties: [{
        name: 'Text decoration line',
        property: 'text-decoration-line',
        type: 'select',
        defaults: 'none',
        fixedValues: ['auto', 'inherit', 'initial', 'revert', 'unset'],
        options: [
          /* @ts-ignore */
          { value: 'none', name: 'none' },
          /* @ts-ignore */
          { value: 'underline', name: 'underline' },
          /* @ts-ignore */
          { value: 'overline', name: 'overline' },
          /* @ts-ignore */
          { value: 'line-through', name: 'line-through' },
          /* @ts-ignore */
          { value: 'blink', name: 'blink' },
        ],
        info: 'The text-decoration CSS property sets the appearance of decorative lines on text.',
      }, {
        name: 'Text decoration style',
        property: 'text-decoration-style',
        type: 'select',
        defaults: 'solid',
        options: [
          /* @ts-ignore */
          { value: 'solid', name: 'solid' },
          /* @ts-ignore */
          { value: 'double', name: 'double' },
          /* @ts-ignore */
          { value: 'dotted', name: 'dotted' },
          /* @ts-ignore */
          { value: 'dashed', name: 'dashed' },
          /* @ts-ignore */
          { value: 'wavy', name: 'wavy' },
        ],
        info: 'The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines, there is no way to define different styles for each of the lines.',
      }, {
        name: 'Text decoration color',
        property: 'text-decoration-color',
        type: 'color',
        defaults: 'auto',
        fixedValues: ['auto', 'inherit', 'initial', 'revert', 'unset'],
        info: 'The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.',
      }, {
        name: 'Text decoration thickness',
        property: 'text-decoration-thickness',
        type: 'integer',
        units: ['px', '%', 'em'],
        info: 'The text-decoration-thickness CSS property sets the stroke thickness of the decoration line that is used on text in an element, such as a line-through, underline, or overline.',
        default: 'auto',
        fixedValues: ['auto', 'inherit', 'initial', 'revert', 'unset'],
      }],
    }, { at: 10 })
    editor.StyleManager.addProperty('typography', {
      name: 'Text transform',

      property: 'text-transform',
      type: 'select',
      defaults: 'none',
      options: [
        /* @ts-ignore */
        { value: 'none', name: 'none' },
        /* @ts-ignore */
        { value: 'capitalize', name: 'capitalize' },
        /* @ts-ignore */
        { value: 'uppercase', name: 'uppercase' },
        /* @ts-ignore */
        { value: 'lowercase', name: 'lowercase' },
      ],
      info: 'The text-transform CSS property sets how to capitalize an element\'s text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.',
    }, { at: 11 })
    editor.StyleManager.addProperty('typography', {
      name: 'Text overflow',
      property: 'text-overflow',
      type: 'select',
      defaults: 'clip',
      options: [
        /* @ts-ignore */
        { value: 'clip', name: 'clip' },
        /* @ts-ignore */
        { value: 'ellipsis', name: 'ellipsis' },
      ],
      info: 'The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis (\'…\', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string. It covers the two long-hand properties text-overflow-clip and text-overflow-string.',
    }, { at: 12 })

    // Add content property, visible only when a pseudo element is selected
    const contentProp = editor.StyleManager.addProperty('general', {
      name: 'Content',
      property: 'content',
      type: 'text',
      defaults: 'none',
      info: 'The content CSS property replaces an element with a generated value. Objects inserted using the content property are anonymous replaced elements.',
      full: true,
      visible: false,
    }, { at: 0 })
    function refreshContentProp() {
      const state = editor.SelectorManager.getState()
      if (['before', 'after'].includes(state)) {
        contentProp.set('visible', true)
      } else {
        contentProp.set('visible', false)
      }
    }
    editor.on('selector:state component:selected style:sector:update', (state, opts) => setTimeout(() => refreshContentProp()))
    editor.StyleManager.getSector('general').on('change', () => refreshContentProp())

    // Add pseudo elements
    editor.SelectorManager.states.add({name: 'before', label: 'Before'})
    editor.SelectorManager.states.add({name: 'after', label: 'After'})
    editor.SelectorManager.states.add({name: 'active', label: 'Active'})
    editor.SelectorManager.states.add({name: 'first-child', label: 'First child'})
    editor.SelectorManager.states.add({name: 'last-child', label: 'Last child'})
    editor.SelectorManager.states.add({name: 'focus', label: 'Focus'})
    editor.SelectorManager.states.add({name: 'visited', label: 'Visited'})
    editor.SelectorManager.states.add({name: 'link', label: 'Link'})
    editor.SelectorManager.states.add({name: 'first-letter', label: 'First letter'})
    editor.SelectorManager.states.add({name: 'first-line', label: 'First line'})
    editor.SelectorManager.states.add({name: 'selection', label: 'Selection'})
    editor.SelectorManager.states.add({name: 'empty', label: 'Empty'})
    editor.SelectorManager.states.add({name: 'enabled', label: 'Enabled'})
    editor.SelectorManager.states.add({name: 'disabled', label: 'Disabled'})
    editor.SelectorManager.states.add({name: 'checked', label: 'Checked'})
    editor.SelectorManager.states.add({name: 'indeterminate', label: 'Indeterminate'})
    editor.SelectorManager.states.add({name: 'placeholder-shown', label: 'Placeholder shown'})
    editor.SelectorManager.states.add({name: 'placeholder', label: 'Placeholder'})
    editor.SelectorManager.states.add({name: 'default', label: 'Default'})
    editor.SelectorManager.states.add({name: 'valid', label: 'Valid'})
    editor.SelectorManager.states.add({name: 'invalid', label: 'Invalid'})
    editor.SelectorManager.states.add({name: 'in-range', label: 'In range'})
    editor.SelectorManager.states.add({name: 'out-of-range', label: 'Out of range'})
    editor.SelectorManager.states.add({name: 'required', label: 'Required'})
    editor.SelectorManager.states.add({name: 'optional', label: 'Optional'})
    editor.SelectorManager.states.add({name: 'read-only', label: 'Read only'})
    editor.SelectorManager.states.add({name: 'read-write', label: 'Read write'})
  })
}
