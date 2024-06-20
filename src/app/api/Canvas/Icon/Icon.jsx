// General imports
import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Icon = ({ name, ...otherProps }) => {
  switch (name) {
    case 'Select':
      return <Image width={12} height={12} src='/images/select.svg' alt="select" {...otherProps}/>
    case 'Line':
      return <Image width={12} height={12} src='/images/line.svg' alt="line" {...otherProps} />
    case 'Circle':
      return <Image width={12} height={12} src='/images/circle.svg' alt="circle" {...otherProps} />
    case 'Ellipse':
      return <Image width={12} height={12} src='/images/ellipse.svg' alt="ellipse" {...otherProps} />
    case 'Text':
      return <Image width={12} height={12} src='/images/text.svg' alt="text" {...otherProps} />
    case 'Delete':
      return <Image width={12} height={12} src='/images/delete.svg' alt="delete" {...otherProps} />
    case 'Clone':
      return <Image width={12} height={12} src='/images/clone.svg' alt="clone" {...otherProps} />
    case 'Path':
      return <Image width={12} height={12} src='/images/path.svg' alt="path" {...otherProps} />
    case 'Square':
      return <Image width={12} height={12} src='/images/square.svg' alt="square" {...otherProps} />
    case 'Rect':
      return <Image width={12} height={12} src='/images/rect.svg' alt="rect" {...otherProps} />
    case 'Close':
      return <Image width={12} height={12} src='/images/close.svg' alt="close" {...otherProps} />
    case 'Download':
      return <Image width={12} height={12} src='/images/save.svg' alt="save" {...otherProps} />
    case 'Save':
      return <Image width={12} height={12} src='/images/save.svg' alt="save" {...otherProps} />
    case 'Undo':
      return <Image width={12} height={12} src='/images/undo.svg' alt="undo" {...otherProps} />
    case 'Redo':
      return <Image width={12} height={12} src='/images/redo.svg' alt="redo" {...otherProps} />
    case 'Group':
      return <Image width={12} height={12} src='/images/group_elements.svg' alt="group" {...otherProps} />
    case 'Ungroup':
      return <Image width={12} height={12} src='/images/ungroup.svg' alt="group" {...otherProps} />
    case 'AlignBottom':
      return <Image width={12} height={12} src='/images/align_bottom.svg' alt="group" {...otherProps} />
    case 'AlignCenter':
      return <Image width={12} height={12} src='/images/align_center.svg' alt="group" {...otherProps} />
    case 'AlignTop':
      return <Image width={12} height={12} src='/images/align_top.svg' alt="group" {...otherProps} />
    case 'AlignLeft':
      return <Image width={12} height={12} src='/images/align_left.svg' alt="group" {...otherProps} />
    case 'AlignRight':
      return <Image width={12} height={12} src='/images/align_right.svg' alt="group" {...otherProps} />
    case 'AlignMiddle':
      return <Image width={12} height={12} src='/images/align_middle.svg' alt="group" {...otherProps} />
    case 'Align':
      return <Image width={12} height={12} src='/images/align.svg' alt="group" {...otherProps} />
    case 'MoveBottom':
      return <Image width={12} height={12} src='/images/move_bottom.svg' alt="group" {...otherProps} />
    case 'MoveTop':
      return <Image width={12} height={12} src='/images/move_top.svg' alt="group" {...otherProps} />
    case 'Bold':
      return <Image width={12} height={12} src='/images/bold.svg' alt="group" {...otherProps} />
    case 'Italic':
      return <Image width={12} height={12} src='/images/italic.svg' alt="group" {...otherProps} />
    case 'Fill':
      return <Image width={12} height={12} src='/images/fill.svg' alt="group" {...otherProps} />
    case 'Stroke':
      return <Image width={12} height={12} src='/images/stroke.svg' alt="group" {...otherProps} />
    case 'FontSize':
      return <Image width={12} height={12} src='/images/fontsize.svg' alt="group" {...otherProps} />
    case 'NoColor':
      return <Image width={12} height={12} src='/images/no_color.svg' alt="group" {...otherProps} />
    case 'Zoom':
      return <Image width={12} height={12} src='/images/zoom.svg' alt="group" {...otherProps} />
    default:
      return <Image width={12} height={12} src='/images/group_elements.svg' alt="group" {...otherProps} />
  }
}

// Properties restriction
Icon.propTypes = { name: PropTypes.string.isRequired }

export default Icon
