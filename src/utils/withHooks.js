import React from "react"
import PropTypes from "prop-types"

export const withHooks = ComposedComponent => {
  class MountHooksHOC extends React.Component
  {
    componentWillMount () {
      if (this.props.onMount) this.props.onMount(this.props.onMountParams)
    }

    componentWillUnmount () {
      if (this.props.onUnmount) this.props.onUnmount(this.props.onUnmountParams)
    }

    render () {
      const { onMount, onUnmount, ...other } = this.props; // eslint-disable-line
      return <ComposedComponent { ...other } />
    }
  }

  MountHooksHOC.propTypes = {
    onMount: PropTypes.func,
    onUnmount: PropTypes.func,
    onMountParams: PropTypes.any,
    onUnmountParams: PropTypes.any
  }

  return MountHooksHOC
}
